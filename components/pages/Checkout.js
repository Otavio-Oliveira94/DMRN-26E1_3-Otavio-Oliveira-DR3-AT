import { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesCheckout from '../../styles/stylesCheckout';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
//import { PEDIDOS_MOCK } from '../../mocks/dadosMock';

import { scheduleOrderStatusNotification } from '../../services/NotificationsService';
import { buscarEnderecoPorCep } from '../../services/EnderecoService';

export default function Checkout({ navigation }) {
  const { itens, calcularTotal, limparCarrinho } = useContext(CarrinhoContext);

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [erro, setErro] = useState('');
  const [buscandoCep, setBuscandoCep] = useState(false);

  const total = calcularTotal();

  async function aoBuscarCep() {
    setErro('');
    const cepLimpo = String(cep).replace(/\D/g, '');
    if (!cepLimpo || cepLimpo.length !== 8) {
      setErro('Informe um CEP válido (8 dígitos).');
      return;
    }

    setBuscandoCep(true);
    const resposta = await buscarEnderecoPorCep(cepLimpo);
    setBuscandoCep(false);

    if (!resposta.success) {
      setErro(resposta.error || 'Não foi possível buscar o CEP.');
      return;
    }

    const enderecoCompleto = resposta.endereco;
    setEndereco(
      enderecoCompleto.texto ||
        `${enderecoCompleto.logradouro} - ${enderecoCompleto.bairro}`
    );
    if (enderecoCompleto.complemento) {
      setComplemento(enderecoCompleto.complemento);
    }
  }

  function validarCampos() {
    setErro('');
    if (!endereco || endereco.trim() === '') {
      setErro('Endereço de entrega é obrigatório.');
      return false;
    }
    if (!numero || numero.trim() === '') {
      setErro('Número é obrigatório.');
      return false;
    }
    if (!metodoPagamento || metodoPagamento.trim() === '') {
      setErro('Selecione um método de pagamento.');
      return false;
    }
    if (!itens || itens.length === 0) {
      setErro('Seu carrinho está vazio.');
      return false;
    }
    return true;
  }

  async function aoConfirmarPedido() {
    if (!validarCampos()) return;

    const novoPedido = {
      id: `Order-${Math.floor(1000 + Math.random() * 9000)}`,
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'Em preparo',
      itens: itens.map((i) => ({
        id: i.produto.id,
        nome: i.produto.nome,
        quantidade: i.quantidade,
        preco: i.produto.preco,
      })),
      enderecoEntrega: `${endereco}, ${numero}${
        complemento ? ' - ' + complemento : ''
      }`,
      metodoPagamento,
    };

    try {
      await scheduleOrderStatusNotification(novoPedido.id, 'Em preparo', 3);
      await scheduleOrderStatusNotification(
        novoPedido.id,
        'Saiu para entrega',
        20
      );
      await scheduleOrderStatusNotification(novoPedido.id, 'Entregue', 40);
    } catch (e) {
      console.log('Erro ao agendar notificações:', e);
    }

    limparCarrinho();

    Alert.alert('Pedido confirmado', `Pedido ${novoPedido.id} confirmado.`, [
      {
        text: 'OK',
        onPress: () => navigation.replace('Pedidos'),
      },
    ]);
  }

  function renderItem({ item }) {
    return (
      <View style={stylesCheckout.item}>
        <View style={stylesCheckout.info}>
          <Text style={stylesCheckout.nome}>{item.produto.nome}</Text>
          <Text style={stylesCheckout.quantidade}>Qtd: {item.quantidade}</Text>
        </View>
        <Text style={stylesCheckout.preco}>
          R$ {(item.produto.preco * item.quantidade).toFixed(2)}
        </Text>
      </View>
    );
  }

  return (
    /* <GradientFundo>
      <View style={stylesCheckout.container}>
        <Text style={stylesCheckout.titulo}>Revisar pedido</Text>

        <FlatList
          data={itens}
          keyExtractor={(i) => i.produto.id}
          renderItem={renderItem}
          contentContainerStyle={stylesCheckout.lista}
          ListEmptyComponent={
            <Text style={stylesCheckout.vazio}>Seu carrinho está vazio.</Text>
          }
        />

        <View style={stylesCheckout.resumo}>
          <Text style={stylesCheckout.totalLabel}>Total</Text>
          <Text style={stylesCheckout.totalValor}>R$ {total.toFixed(2)}</Text>
        </View>

        <View style={stylesCheckout.form}>
          <Text style={stylesCheckout.label}>Endereço de entrega</Text>
          <TextInput
            style={stylesCheckout.input}
            placeholder="Rua, avenida..."
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={endereco}
            onChangeText={setEndereco}
          />

          <Text style={stylesCheckout.label}>Número</Text>
          <TextInput
            style={stylesCheckout.input}
            placeholder="Número"
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={numero}
            onChangeText={setNumero}
          />

          <Text style={stylesCheckout.label}>Complemento (opcional)</Text>
          <TextInput
            style={stylesCheckout.input}
            placeholder="Apto, bloco, etc."
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={complemento}
            onChangeText={setComplemento}
          />

          <Text style={stylesCheckout.label}>Método de pagamento</Text>
          <View style={stylesCheckout.pagamentos}>
            <TouchableOpacity
              style={[
                stylesCheckout.metodo,
                metodoPagamento === 'Cartão'
                  ? stylesCheckout.metodoAtivo
                  : null,
              ]}
              onPress={() => setMetodoPagamento('Cartão')}>
              <Text style={stylesCheckout.metodoTexto}>Cartão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesCheckout.metodo,
                metodoPagamento === 'Dinheiro'
                  ? stylesCheckout.metodoAtivo
                  : null,
              ]}
              onPress={() => setMetodoPagamento('Dinheiro')}>
              <Text style={stylesCheckout.metodoTexto}>Dinheiro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesCheckout.metodo,
                metodoPagamento === 'Pix' ? stylesCheckout.metodoAtivo : null,
              ]}
              onPress={() => setMetodoPagamento('Pix')}>
              <Text style={stylesCheckout.metodoTexto}>Pix</Text>
            </TouchableOpacity>
          </View>

          {erro ? <Text style={stylesCheckout.erro}>{erro}</Text> : null}
        </View>

        <View style={stylesCheckout.acoes}>
          <TouchableOpacity
            style={stylesCheckout.botaoVoltar}
            onPress={() => navigation.goBack()}>
            <Text style={stylesCheckout.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesCheckout.botaoConfirmar}
            onPress={aoConfirmarPedido}>
            <Text style={stylesCheckout.textoBotaoConfirmar}>
              Confirmar pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientFundo> */
    <GradientFundo>
      <View style={stylesCheckout.container}>
        <Text style={stylesCheckout.titulo}>Revisar pedido</Text>

        <FlatList
          data={itens}
          keyExtractor={(i) => i.produto.id}
          renderItem={renderItem}
          contentContainerStyle={stylesCheckout.lista}
          ListEmptyComponent={<Text style={stylesCheckout.vazio}>Seu carrinho está vazio.</Text>}
        />

        <View style={stylesCheckout.resumo}>
          <Text style={stylesCheckout.totalLabel}>Total</Text>
          <Text style={stylesCheckout.totalValor}>R$ {total.toFixed(2)}</Text>
        </View>

        <View style={stylesCheckout.form}>
          <Text style={stylesCheckout.label}>CEP</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[stylesCheckout.input, { flex: 1 }]}
              placeholder="00000000"
              placeholderTextColor="rgba(0,0,0,0.4)"
              value={cep}
              onChangeText={setCep}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={[stylesCheckout.botaoBuscarCep]}
              onPress={aoBuscarCep}
              activeOpacity={0.85}
            >
              {buscandoCep ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={stylesCheckout.textoBotaoBuscarCep}>Buscar CEP</Text>
              )}
            </TouchableOpacity>
          </View>

          <Text style={stylesCheckout.label}>Endereço de entrega</Text>
          <TextInput
            style={stylesCheckout.input}
            placeholder="Rua, avenida..."
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={endereco}
            onChangeText={setEndereco}
          />

          <Text style={stylesCheckout.label}>Número</Text>
          <TextInput
            style={stylesCheckout.input}
            placeholder="Número"
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={numero}
            onChangeText={setNumero}
          />

          <Text style={stylesCheckout.label}>Complemento (opcional)</Text>
          <TextInput
            style={stylesCheckout.input}
            placeholder="Apto, bloco, etc."
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={complemento}
            onChangeText={setComplemento}
          />

          <Text style={stylesCheckout.label}>Método de pagamento</Text>
          <View style={stylesCheckout.pagamentos}>
            <TouchableOpacity
              style={[
                stylesCheckout.metodo,
                metodoPagamento === 'Cartão' ? stylesCheckout.metodoAtivo : null,
              ]}
              onPress={() => setMetodoPagamento('Cartão')}
            >
              <Text style={stylesCheckout.metodoTexto}>Cartão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesCheckout.metodo,
                metodoPagamento === 'Dinheiro' ? stylesCheckout.metodoAtivo : null,
              ]}
              onPress={() => setMetodoPagamento('Dinheiro')}
            >
              <Text style={stylesCheckout.metodoTexto}>Dinheiro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesCheckout.metodo,
                metodoPagamento === 'Pix' ? stylesCheckout.metodoAtivo : null,
              ]}
              onPress={() => setMetodoPagamento('Pix')}
            >
              <Text style={stylesCheckout.metodoTexto}>Pix</Text>
            </TouchableOpacity>
          </View>

          {erro ? <Text style={stylesCheckout.erro}>{erro}</Text> : null}
        </View>

        <View style={stylesCheckout.acoes}>
          <TouchableOpacity style={stylesCheckout.botaoVoltar} onPress={() => navigation.goBack()}>
            <Text style={stylesCheckout.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesCheckout.botaoConfirmar} onPress={aoConfirmarPedido}>
            <Text style={stylesCheckout.textoBotaoConfirmar}>Confirmar pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientFundo>
  );
}

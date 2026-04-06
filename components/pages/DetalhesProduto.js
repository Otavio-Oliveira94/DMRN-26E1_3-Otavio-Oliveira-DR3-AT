import { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesDetalhes from '../../styles/stylesDetalhesProduto';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

export default function DetalhesProduto({ route, navigation }) {
  const { produto } = route.params;
  const [quantidade, setQuantidade] = useState(1);
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  function incrementar() {
    setQuantidade((q) => q + 1);
  }

  function decrementar() {
    setQuantidade((q) => (q > 1 ? q - 1 : 1));
  }

  function aoAdicionar() {
    adicionarAoCarrinho(produto, quantidade);
    navigation.navigate('Home');
  }

  return (
    <GradientFundo>
      <View style={stylesDetalhes.container}>
        <View style={stylesDetalhes.card}>
          <Text style={stylesDetalhes.nome}>{produto.nome}</Text>
          <Text style={stylesDetalhes.descricao}>{produto.descricao}</Text>

          <View style={stylesDetalhes.blocoPreco}>
            <Text style={stylesDetalhes.preco}>
              R$ {produto.preco.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={stylesDetalhes.footer}>
          <View style={stylesDetalhes.controleQuantidade}>
            <TouchableOpacity
              style={stylesDetalhes.botaoQuantidade}
              onPress={decrementar}
              activeOpacity={0.8}>
              <Text style={stylesDetalhes.textoQuantidade}>-</Text>
            </TouchableOpacity>

            <Text style={stylesDetalhes.valorQuantidade}>{quantidade}</Text>

            <TouchableOpacity
              style={stylesDetalhes.botaoQuantidade}
              onPress={incrementar}
              activeOpacity={0.8}>
              <Text style={stylesDetalhes.textoQuantidade}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={stylesDetalhes.botaoAdicionar}
            onPress={aoAdicionar}
            activeOpacity={0.85}>
            <Text style={stylesDetalhes.textoBotao}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientFundo>
  );
}

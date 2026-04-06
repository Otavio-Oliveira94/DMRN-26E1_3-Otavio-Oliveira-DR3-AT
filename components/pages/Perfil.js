import { View, Text, TouchableOpacity } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesPerfil from '../../styles/stylesPerfil';
import { USUARIO_MOCK, PEDIDOS_MOCK } from '../../mocks/dadosMock';

function calcularTotalDoPedido(pedido) {
  return pedido.itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0);
}

export default function Perfil({ navigation }) {
  const usuario = USUARIO_MOCK;
  const pedidos = PEDIDOS_MOCK;
  const totalPedidos = pedidos.length;
  const totalGasto = pedidos.reduce((s, p) => s + calcularTotalDoPedido(p), 0);
  const ultimoPedido = pedidos[0];

  return (
    <GradientFundo>
      <View style={stylesPerfil.container}>
        <View style={stylesPerfil.topoAcoes}>
          <TouchableOpacity
            style={stylesPerfil.botaoConfigPerfil}
            onPress={() => navigation.navigate('Configuracoes')}>
            <Text style={stylesPerfil.textoBotaoConfigPerfil}>
              Configurações
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={stylesPerfil.titulo}>Meu Perfil</Text>

        <View style={stylesPerfil.card}>
          <Text style={stylesPerfil.label}>Nome</Text>
          <Text style={stylesPerfil.valor}>{usuario.nome}</Text>

          <Text style={stylesPerfil.label}>E-mail</Text>
          <Text style={stylesPerfil.valor}>{usuario.email}</Text>

          <Text style={stylesPerfil.label}>Telefone</Text>
          <Text style={stylesPerfil.valor}>{usuario.telefone}</Text>

          <Text style={stylesPerfil.label}>Endereço</Text>
          <Text style={stylesPerfil.valor}>{usuario.endereco}</Text>
        </View>

        <View style={stylesPerfil.pedidosCard}>
          <Text style={stylesPerfil.pedidosTitulo}>Pedidos</Text>

          <View style={stylesPerfil.pedidosResumo}>
            <Text style={stylesPerfil.pedidosResumoTexto}>
              Total de pedidos:{' '}
              <Text style={stylesPerfil.pedidosResumoValor}>
                {totalPedidos}
              </Text>
            </Text>
            <Text style={stylesPerfil.pedidosResumoTexto}>
              Total gasto:{' '}
              <Text style={stylesPerfil.pedidosResumoValor}>
                R$ {totalGasto.toFixed(2)}
              </Text>
            </Text>
          </View>

          {ultimoPedido ? (
            <View style={stylesPerfil.ultimoPedido}>
              <Text style={stylesPerfil.ultimoPedidoTitulo}>Último pedido</Text>
              <Text style={stylesPerfil.ultimoPedidoLinha}>
                ID:{' '}
                <Text style={stylesPerfil.ultimoPedidoValor}>
                  {ultimoPedido.id}
                </Text>
              </Text>
              <Text style={stylesPerfil.ultimoPedidoLinha}>
                Data:{' '}
                <Text style={stylesPerfil.ultimoPedidoValor}>
                  {ultimoPedido.data}
                </Text>
              </Text>
              <Text style={stylesPerfil.ultimoPedidoLinha}>
                Status:{' '}
                <Text style={stylesPerfil.ultimoPedidoValor}>
                  {ultimoPedido.status}
                </Text>
              </Text>
              <Text style={stylesPerfil.ultimoPedidoLinha}>
                Itens:{' '}
                <Text style={stylesPerfil.ultimoPedidoValor}>
                  {ultimoPedido.itens.length}
                </Text>
              </Text>
              <Text style={stylesPerfil.ultimoPedidoLinha}>
                Total:{' '}
                <Text style={stylesPerfil.ultimoPedidoValor}>
                  R$ {calcularTotalDoPedido(ultimoPedido).toFixed(2)}
                </Text>
              </Text>
            </View>
          ) : (
            <Text style={stylesPerfil.semPedidos}>
              Você ainda não fez pedidos.
            </Text>
          )}

          <TouchableOpacity
            style={stylesPerfil.verPedidosBotao}
            onPress={() => navigation.navigate('Pedidos')}
            activeOpacity={0.85}>
            <Text style={stylesPerfil.verPedidosTexto}>
              Ver todos os pedidos
            </Text>
          </TouchableOpacity>
        </View>

        <View style={stylesPerfil.acoes}>
          <TouchableOpacity style={stylesPerfil.botaoEditar} onPress={() => {}}>
            <Text style={stylesPerfil.textoBotaoEditar}>Editar perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesPerfil.botaoVoltar}
            onPress={() => navigation.goBack()}>
            <Text style={stylesPerfil.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientFundo>
  );
}

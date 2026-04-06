import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesPedidos from '../../styles/stylesPedidos';
import { PEDIDOS_MOCK } from '../../mocks/dadosMock';

function calcularTotalDoPedido(pedido) {
  return pedido.itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0);
}

export default function Pedidos({ navigation }) {
  const [pedidos] = useState(PEDIDOS_MOCK);

  function renderItem({ item }) {
    const total = calcularTotalDoPedido(item);
    const itensCount = item.itens.reduce((s, it) => s + it.quantidade, 0);

    return (
      <View style={stylesPedidos.itemPedido}>
        <View style={stylesPedidos.cabecalho}>
          <Text style={stylesPedidos.idPedido}>{item.id}</Text>
          <Text style={stylesPedidos.dataPedido}>{item.data}</Text>
        </View>

        <Text style={stylesPedidos.status}>Status: {item.status}</Text>

        <View style={stylesPedidos.resumoLinha}>
          <Text style={stylesPedidos.itensResumo}>{itensCount} itens</Text>
          <Text style={stylesPedidos.totalResumo}>R$ {total.toFixed(2)}</Text>
        </View>

        <View style={stylesPedidos.acoes}>
          <TouchableOpacity
            style={stylesPedidos.botaoDetalhes}
            onPress={() => {
              /* LEMBAR: que preciso implementar um botão para navegar até pedidos navigate(pedidos) */
            }}>
            <Text style={stylesPedidos.textoBotaoDetalhes}>Ver detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesPedidos.botaoRepetir}
            onPress={() => {
              /* LEMBAR: aqui preciso implementar um botão para repetir pedido */
            }}>
            <Text style={stylesPedidos.textoBotaoRepetir}>Repetir pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <GradientFundo>
      <View style={stylesPedidos.container}>
        <Text style={stylesPedidos.titulo}>Meus Pedidos</Text>

        <FlatList
          data={pedidos}
          keyExtractor={(p) => p.id}
          renderItem={renderItem}
          contentContainerStyle={stylesPedidos.lista}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={stylesPedidos.vazio}>Você não tem pedidos ainda.</Text>
          }
        />
      </View>
    </GradientFundo>
  );
}

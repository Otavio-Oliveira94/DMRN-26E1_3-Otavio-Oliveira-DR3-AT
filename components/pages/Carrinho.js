import { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesCarrinho from '../../styles/stylesCarrinho';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

export default function Carrinho({ navigation }) {
  const { itens, removerDoCarrinho, limparCarrinho, calcularTotal } =
    useContext(CarrinhoContext);

  function renderItem({ item }) {
    return (
      <View style={stylesCarrinho.item}>
        <View style={stylesCarrinho.info}>
          <Text style={stylesCarrinho.nome}>{item.produto.nome}</Text>
          <Text style={stylesCarrinho.quantidade}>
            Quantidade: {item.quantidade}
          </Text>
        </View>

        <View style={stylesCarrinho.direita}>
          <Text style={stylesCarrinho.preco}>
            R$ {(item.produto.preco * item.quantidade).toFixed(2)}
          </Text>

          <TouchableOpacity
            style={stylesCarrinho.botaoRemover}
            onPress={() => removerDoCarrinho(item.produto.id)}>
            <Text style={stylesCarrinho.textoBotaoRemover}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <GradientFundo>
      <View style={stylesCarrinho.container}>
        <Text style={stylesCarrinho.titulo}>Meu Carrinho</Text>

        <FlatList
          data={itens}
          keyExtractor={(item) => item.produto.id}
          renderItem={renderItem}
          contentContainerStyle={stylesCarrinho.lista}
          ListEmptyComponent={
            <Text style={stylesCarrinho.vazio}>Seu carrinho está vazio.</Text>
          }
        />

        <View style={stylesCarrinho.resumo}>
          <Text style={stylesCarrinho.totalLabel}>Total</Text>
          <Text style={stylesCarrinho.totalValor}>
            R$ {calcularTotal().toFixed(2)}
          </Text>
        </View>

        <View style={stylesCarrinho.acoes}>
          <TouchableOpacity
            style={stylesCarrinho.botaoLimpar}
            onPress={() => limparCarrinho()}>
            <Text style={stylesCarrinho.textoBotaoLimpar}>Limpar carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesCarrinho.botaoFinalizar}
            onPress={() => {
              navigation.navigate('Checkout');
            }}>
            <Text style={stylesCarrinho.textoBotaoFinalizar}>
              Finalizar pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientFundo>
  );
}

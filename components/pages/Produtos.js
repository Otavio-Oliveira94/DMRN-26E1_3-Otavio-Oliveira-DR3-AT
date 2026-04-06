import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesProdutos from '../../styles/stylesProdutos';
import { PRODUTOS } from '../../mocks/dadosMock';

export default function Produtos({ route, navigation }) {
  const { categoriaId, nomeCategoria } = route.params || {};

  const produtosFiltrados = PRODUTOS.filter(
    (p) => p.categoriaId === categoriaId
  );

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={stylesProdutos.itemProduto}
        onPress={() =>
          navigation.navigate('DetalhesProduto', { produto: item })
        }>
        <View style={stylesProdutos.conteudoItem}>
          <Text style={stylesProdutos.nomeProduto}>{item.nome}</Text>
          <Text style={stylesProdutos.descricaoProduto}>{item.descricao}</Text>
        </View>
        <Text style={stylesProdutos.precoProduto}>
          R$ {item.preco.toFixed(2)}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <GradientFundo>
      <View style={stylesProdutos.container}>
        <Text style={stylesProdutos.titulo}>
          {nomeCategoria ? nomeCategoria : 'Produtos'}
        </Text>

        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={stylesProdutos.listaConteudo}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={stylesProdutos.textoVazio}>
              Nenhum produto encontrado.
            </Text>
          }
        />
      </View>
    </GradientFundo>
  );
}

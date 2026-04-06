import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesHome from '../../styles/stylesHome';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { CATEGORIAS } from '../../mocks/dadosMock';

export default function Home({ navigation }) {
  const { itens } = useContext(CarrinhoContext);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={stylesHome.itemCategoria}
        onPress={() =>
          navigation.navigate('Produtos', {
            categoriaId: item.id,
            nomeCategoria: item.nome,
          })
        }>
        <View style={stylesHome.itemLinha}>
          <View style={stylesHome.barraDestaque} />
          <View style={stylesHome.conteudoItem}>
            <Text style={stylesHome.nomeCategoria}>{item.nome}</Text>
            <Text style={stylesHome.descricaoCategoria}>{item.descricao}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <GradientFundo>
      <View style={stylesHome.container}>
        <View style={stylesHome.menuFixo}>
          <View style={stylesHome.acaoEsquerda}>
            <TouchableOpacity
              style={stylesHome.botaoPerfil}
              onPress={() => navigation.navigate('Perfil')}>
              <Text style={stylesHome.textoBotaoPerfil}>Perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesHome.acaoDireita}>
            <TouchableOpacity
              style={stylesHome.botaoMapa}
              onPress={() => navigation.navigate('MapaRestaurantes')}>
              <Text style={stylesHome.textoBotaoMapa}>Mapa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesHome.botaoCarrinho}
              onPress={() => navigation.navigate('Carrinho')}>
              <Text style={stylesHome.textoBotaoCarrinho}>Carrinho</Text>
              <View style={stylesHome.badge}>
                <Text style={stylesHome.badgeTexto}>{itens.length}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesHome.botaoSair}
              onPress={() => navigation.replace('Login')}>
              <Text style={stylesHome.textoBotaoSair}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={stylesHome.titulo}>Categorias</Text>

        <FlatList
          data={CATEGORIAS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={stylesHome.listaConteudo}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </GradientFundo>
  );
}

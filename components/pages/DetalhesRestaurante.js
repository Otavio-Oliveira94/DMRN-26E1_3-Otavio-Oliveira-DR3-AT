import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesDetalhesRestaurante from '../../styles/stylesDetalhesRestaurante';
import { RESTAURANTES, PRODUTOS } from '../../mocks/dadosMock';

export default function DetalhesRestaurante({ route, navigation }) {
  const restauranteParam = route.params?.restaurante || null;
  const restauranteIdParam = route.params?.restauranteId || null;

  const restaurante =
    restauranteParam ||
    RESTAURANTES.find((r) => r.id === restauranteIdParam) ||
    RESTAURANTES[0];

  const itensCardapio = PRODUTOS.slice(0, 3);

  function abrirNoMaps() {
    if (restaurante.lat && restaurante.lng) {
      const lat = restaurante.lat;
      const lng = restaurante.lng;
      const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      Linking.openURL(url).catch(() => {});
      return;
    }

    if (restaurante.endereco) {
      const query = encodeURIComponent(restaurante.endereco);
      const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
      Linking.openURL(url).catch(() => {});
      return;
    }

    const urlFallback =
      'https://www.google.com/maps/search/?api=1&query=Centro+Rio+de+Janeiro';
    Linking.openURL(urlFallback).catch(() => {});
  }

  function renderItem({ item }) {
    return (
      <View style={stylesDetalhesRestaurante.itemCardapio}>
        <View style={stylesDetalhesRestaurante.infoItem}>
          <Text style={stylesDetalhesRestaurante.nomeItem}>{item.nome}</Text>
          <Text style={stylesDetalhesRestaurante.descricaoItem}>
            {item.descricao}
          </Text>
        </View>
        <Text style={stylesDetalhesRestaurante.precoItem}>
          R$ {item.preco.toFixed(2)}
        </Text>
      </View>
    );
  }

  return (
    <GradientFundo>
      <View style={stylesDetalhesRestaurante.container}>
        <View style={stylesDetalhesRestaurante.content}>
          <View style={stylesDetalhesRestaurante.card}>
            <Text style={stylesDetalhesRestaurante.nomeRestaurante}>
              {restaurante.nome}
            </Text>

            <View style={stylesDetalhesRestaurante.linha}>
              <Text style={stylesDetalhesRestaurante.label}>Endereço</Text>
              <Text style={stylesDetalhesRestaurante.valor}>
                {restaurante.endereco}
              </Text>
            </View>

            <View style={stylesDetalhesRestaurante.linha}>
              <Text style={stylesDetalhesRestaurante.label}>Telefone</Text>
              <Text style={stylesDetalhesRestaurante.valor}>
                {restaurante.telefone}
              </Text>
            </View>
          </View>

          <View style={stylesDetalhesRestaurante.cardapio}>
            <Text style={stylesDetalhesRestaurante.tituloCardapio}>
              Cardápio
            </Text>

            <FlatList
              data={itensCardapio}
              keyExtractor={(i) => i.id}
              renderItem={renderItem}
              contentContainerStyle={stylesDetalhesRestaurante.lista}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <Text style={stylesDetalhesRestaurante.vazio}>
                  Nenhum item disponível.
                </Text>
              }
            />
          </View>
        </View>

        <View style={stylesDetalhesRestaurante.footer}>
          <TouchableOpacity
            style={stylesDetalhesRestaurante.botaoVoltar}
            onPress={() => navigation.goBack()}>
            <Text style={stylesDetalhesRestaurante.textoBotaoVoltar}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesDetalhesRestaurante.botaoVerNoMapa}
            onPress={abrirNoMaps}>
            <Text style={stylesDetalhesRestaurante.textoBotaoVerNoMapa}>
              Ver no mapa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientFundo>
  );
}

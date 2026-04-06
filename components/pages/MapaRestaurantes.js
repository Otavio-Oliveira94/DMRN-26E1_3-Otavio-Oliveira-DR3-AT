import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import GradientFundo from '../ui/GradientFundo';
import stylesMapa from '../../styles/stylesMapa';
import { RESTAURANTES } from '../../mocks/dadosMock';

function gerarHtmlLeaflet(restaurantes) {
  const pinsRestaurantes = restaurantes
    .map(
      (r) =>
        `L.marker([${r.lat}, ${r.lng}]).addTo(map).bindPopup("<b>${r.nome}</b><br/>${r.endereco}");`
    )
    .join('\n');

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
    <style>html,body,#map{height:100%;margin:0;padding:0}</style>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  </head>
  <body>
    <div id="map"></div>
    <script>
      const map = L.map('map').setView([-22.9068, -43.1729], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
      ${pinsRestaurantes}
    </script>
  </body>
  </html>
  `;
}

export default function MapaRestaurantes({ navigation }) {
  const html = gerarHtmlLeaflet(RESTAURANTES);

  function abrirNoMaps(restaurante) {
    const lat = restaurante.lat;
    const lng = restaurante.lng;
    const label = encodeURIComponent(restaurante.nome);
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${label}`;
    Linking.openURL(url).catch(() => {});
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={stylesMapa.item}
        onPress={() =>
          navigation.navigate('DetalhesRestaurante', { restaurante: item })
        }>
        <View style={stylesMapa.info}>
          <Text style={stylesMapa.nome}>{item.nome}</Text>
          <Text style={stylesMapa.endereco}>{item.endereco}</Text>
        </View>
        <Text style={stylesMapa.telefone}>{item.telefone}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <GradientFundo>
      <View style={stylesMapa.container}>
        <Text style={stylesMapa.titulo}>Restaurantes no Centro</Text>

        <View style={stylesMapa.mapaWrapper}>
          <WebView
            originWhitelist={['*']}
            source={{ html }}
            style={stylesMapa.webview}
            scalesPageToFit
          />
        </View>
        <Text style={stylesMapa.listaTitulo}>Lista de restaurantes</Text>
        <FlatList
          data={RESTAURANTES}
          keyExtractor={(r) => r.id}
          renderItem={renderItem}
          contentContainerStyle={stylesMapa.lista}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </GradientFundo>
  );
}

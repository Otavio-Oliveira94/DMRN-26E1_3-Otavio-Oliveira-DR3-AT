import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 14,
    paddingTop: 28,
    paddingVertical: 16,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 14,
  },
  nomeRestaurante: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 10,
  },
  linha: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '700',
    marginBottom: 4,
  },
  valor: {
    fontSize: 15,
    color: '#222222',
    fontWeight: '700',
  },
  cardapio: {
    marginBottom: 16,
  },
  tituloCardapio: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 10,
  },
  lista: {
    paddingBottom: 8,
  },
  itemCardapio: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  infoItem: {
    flex: 1,
    marginRight: 12,
  },
  nomeItem: {
    fontSize: 15,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 4,
  },
  descricaoItem: {
    fontSize: 13,
    color: '#444444',
  },
  precoItem: {
    fontSize: 14,
    fontWeight: '800',
    color: '#ff4b2b',
  },
  vazio: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 12,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 8
  },
  botaoVoltar: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoVoltar: {
    color: '#222222',
    fontWeight: '800',
  },
  botaoVerNoMapa: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#ff4b2b',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoVerNoMapa: {
    color: '#ffffff',
    fontWeight: '800',
  },
});

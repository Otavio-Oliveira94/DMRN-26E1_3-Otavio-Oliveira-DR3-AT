import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 28,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
    paddingTop: 21,
  },
  mapaWrapper: {
    height: 240,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listaTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  lista: {
    paddingBottom: 40,
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    marginRight: 8,
  },
  nome: {
    fontSize: 15,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 4,
  },
  endereco: {
    fontSize: 13,
    color: '#444444',
  },
  telefone: {
    fontSize: 13,
    color: '#ff4b2b',
    fontWeight: '800',
  },
});

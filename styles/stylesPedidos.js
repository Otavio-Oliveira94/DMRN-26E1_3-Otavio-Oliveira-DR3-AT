import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 14,
    textAlign: 'center',
    paddingTop: 20,
  },
  lista: {
    paddingBottom: 40,
  },
  itemPedido: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  idPedido: {
    fontSize: 14,
    fontWeight: '800',
    color: '#222222',
  },
  dataPedido: {
    fontSize: 13,
    color: '#666666',
  },
  status: {
    fontSize: 13,
    color: '#444444',
    marginBottom: 8,
  },
  resumoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  itensResumo: {
    fontSize: 13,
    color: '#444444',
  },
  totalResumo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#ff4b2b',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  botaoDetalhes: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 8,
  },
  textoBotaoDetalhes: {
    color: '#222222',
    fontWeight: '700',
  },
  botaoRepetir: {
    backgroundColor: '#ff4b2b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  textoBotaoRepetir: {
    color: '#ffffff',
    fontWeight: '800',
  },
  vazio: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
  },
});

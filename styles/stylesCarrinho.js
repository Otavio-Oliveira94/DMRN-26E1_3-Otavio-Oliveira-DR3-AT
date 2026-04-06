import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 46,
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
    paddingBottom: 12,
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  info: {
    flex: 1,
    marginRight: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 6,
  },
  quantidade: {
    fontSize: 13,
    color: '#444444',
  },
  direita: {
    alignItems: 'flex-end',
  },
  preco: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ff4b2b',
    marginBottom: 8,
  },
  botaoRemover: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  textoBotaoRemover: {
    color: '#222222',
    fontWeight: '700',
  },
  vazio: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
    fontSize: '32',
  },
  resumo: {
    marginTop: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  totalValor: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoLimpar: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoLimpar: {
    color: '#222222',
    fontWeight: '800',
  },
  botaoFinalizar: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#ff4b2b',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoFinalizar: {
    color: '#ffffff',
    fontWeight: '800',
  },
});

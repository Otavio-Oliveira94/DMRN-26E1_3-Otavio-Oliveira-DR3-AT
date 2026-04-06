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
  },
  listaConteudo: {
    paddingBottom: 40,
  },
  itemProduto: {
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
  conteudoItem: {
    flex: 1,
    marginRight: 12,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 6,
  },
  descricaoProduto: {
    fontSize: 13,
    color: '#444444',
  },
  precoProduto: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ff4b2b',
  },
  textoVazio: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
  },
});

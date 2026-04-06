import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 16,
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
    paddingTop: 38,
  },
  lista: {
    paddingBottom: 12,
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
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  info: {
    flex: 1,
    marginRight: 12,
  },
  nome: {
    fontSize: 15,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 4,
  },
  quantidade: {
    fontSize: 13,
    color: '#444444',
  },
  preco: {
    fontSize: 14,
    fontWeight: '800',
    color: '#ff4b2b',
  },
  vazio: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
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
  form: {
    marginTop: 6,
    marginBottom: 12,
  },
  label: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.12)',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: '#222222',
    marginBottom: 10,
  },
  pagamentos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metodo: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  metodoAtivo: {
    backgroundColor: '#ff4b2b',
  },
  metodoTexto: {
    color: '#222222',
    fontWeight: '800',
  },
  erro: {
    color: '#D41515',
    marginTop: 6,
    marginBottom: 6,
    fontSize: 13,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  botaoVoltar: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoVoltar: {
    color: '#222222',
    fontWeight: '800',
  },
  botaoConfirmar: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#ff4b2b',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoConfirmar: {
    color: '#ffffff',
    fontWeight: '800',
  },
  botaoBuscarCep: {
    marginLeft: 8,
    backgroundColor: '#ff4b2b',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotaoBuscarCep: {
    color: '#ffffff',
    fontWeight: '800'
  },
});

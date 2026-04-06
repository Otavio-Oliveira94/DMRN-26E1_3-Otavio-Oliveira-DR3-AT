import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
    paddingTop: 4,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#666666',
    marginTop: 10,
    marginBottom: 4,
    fontWeight: '700',
  },
  valor: {
    fontSize: 16,
    color: '#222222',
    fontWeight: '700',
  },
  pedidosCard: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 18,
  },
  pedidosTitulo: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 8,
  },
  pedidosResumo: {
    marginBottom: 10,
  },
  pedidosResumoTexto: {
    fontSize: 13,
    color: '#444444',
    marginBottom: 4,
  },
  pedidosResumoValor: {
    fontWeight: '800',
    color: '#ff4b2b',
  },
  ultimoPedido: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
    paddingTop: 10,
    marginTop: 8,
  },
  ultimoPedidoTitulo: {
    fontSize: 14,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 6,
  },
  ultimoPedidoLinha: {
    fontSize: 13,
    color: '#444444',
    marginBottom: 4,
  },
  ultimoPedidoValor: {
    fontWeight: '800',
    color: '#222222',
  },
  semPedidos: {
    fontSize: 13,
    color: '#444444',
    marginBottom: 10,
  },
  verPedidosBotao: {
    marginTop: 12,
    backgroundColor: '#ff4b2b',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  verPedidosTexto: {
    color: '#ffffff',
    fontWeight: '800',
  },
  acoes: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoEditar: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#ff4b2b',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoEditar: {
    color: '#ffffff',
    fontWeight: '800',
  },
  botaoVoltar: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotaoVoltar: {
    color: '#222222',
    fontWeight: '800',
  },
  topoAcoes: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 6,
    paddingTop: 28,
  },
  botaoConfigPerfil: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10
  },
  textoBotaoConfigPerfil: {
    color: '#222222',
    fontWeight: '800'
  },
});

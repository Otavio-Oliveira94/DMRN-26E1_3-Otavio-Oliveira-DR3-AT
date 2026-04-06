import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 20,
    justifyContent: 'flex-start'
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
    paddingTop: 36,
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
    elevation: 6
  },
  label: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '700',
    marginBottom: 10
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  opcao: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  opcaoAtiva: {
    backgroundColor: '#ff4b2b'
  },
  textoOpcao: {
    color: '#222222',
    fontWeight: '800'
  },
  previewLabel: {
    fontSize: 13,
    color: '#444444',
    fontWeight: '700',
    marginBottom: 8
  },
  previewLight: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  previewDark: {
    backgroundColor: '#222222',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  previewTextLight: {
    color: '#222222',
    fontWeight: '700'
  },
  previewTextDark: {
    color: '#ffffff',
    fontWeight: '700'
  },
  acoes: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  botaoVoltar: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center'
  },
  textoBotaoVoltar: {
    color: '#222222',
    fontWeight: '800'
  },
  botaoSalvar: {
    backgroundColor: '#ff4b2b',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginLeft: 8
  },
  textoBotaoSalvar: {
    color: '#ffffff',
    fontWeight: '800'
  }
});

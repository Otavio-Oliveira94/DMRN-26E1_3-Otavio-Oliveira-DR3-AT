import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 28,
  },
  logoNormal: {
    color: '#ffffff',
  },
  logoFood: {
    color: '#ff3b30',
  },
  label: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 6,
    color: '#ffffff',
  },
  campo: {
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255,0.18)',
    color: '#ffffff',
    fontSize: 16,
  },
  botao: {
    marginTop: 22,
    backgroundColor: '#ff4b2b',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  erro: {
    color: '#D41515',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 4,
    fontSize: 13,
  },
  botaoDesabilitado: {
    marginTop: 22,
    backgroundColor: 'rgba(255,75,43,0.6)',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
});
export const placeholderColor = 'rgba(0,0,0,0.5)';
export const indicatorColor = '#ffffff';
export default styles;

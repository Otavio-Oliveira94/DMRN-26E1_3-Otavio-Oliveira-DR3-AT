import { useContext } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import stylesGradient from '../../styles/stylesGradient';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function GradientFundo({ children }) {
  const { tema } = useContext(ThemeContext);

  const cores =
    tema === 'dark'
      ? ['rgba(20,20,20,0.95)', 'rgba(42,123,155,0.6)', 'rgba(87,199,133,0.6)']
      : [
          'rgba(42,123,155,0.5)',
          'rgba(87,199,133,0.5)',
          'rgba(237,221,83,0.8)',
        ];

  return (
    <LinearGradient
      colors={cores}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={stylesGradient.gradiente}>
      <View style={stylesGradient.conteudo}>{children}</View>
    </LinearGradient>
  );
}

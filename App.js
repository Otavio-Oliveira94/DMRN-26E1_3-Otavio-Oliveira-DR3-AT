import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarrinhoProvider } from './contexts/CarrinhoContext';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Produtos from './components/pages/Produtos';
import DetalhesProduto from './components/pages/DetalhesProduto';
import Carrinho from './components/pages/Carrinho';
import Perfil from './components/pages/Perfil';
import Pedidos from './components/pages/Pedidos';
import MapaRestaurantes from './components/pages/MapaRestaurantes';
import DetalhesRestaurante from './components/pages/DetalhesRestaurante';
import Checkout from './components/pages/Checkout';
import Configuracoes from './components/pages/Configuracoes';

import { ThemeProvider } from './contexts/ThemeContext';

import { useEffect } from 'react';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { requestPermissionsAsync } from './services/NotificationsService';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        console.log('Permissão de notificações não concedida');
      }
    })();
    const receivedListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('Notificação recebida (foreground):', notification);
      }
    );
    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const data = response.notification.request.content.data || {};
        const orderId = data.orderId;
        const status = data.status;
        if (orderId) {
          Alert.alert(`Pedido ${orderId}`, `Status: ${status}`);
        }
      });
    return () => {
      receivedListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <ThemeProvider>
      <CarrinhoProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Pedidos" component={Pedidos} />
            <Stack.Screen
              name="MapaRestaurantes"
              component={MapaRestaurantes}
            />
            <Stack.Screen
              name="DetalhesRestaurante"
              component={DetalhesRestaurante}
            />
            <Stack.Screen name="Configuracoes" component={Configuracoes} />
          </Stack.Navigator>
        </NavigationContainer>
      </CarrinhoProvider>
    </ThemeProvider>
  );
}

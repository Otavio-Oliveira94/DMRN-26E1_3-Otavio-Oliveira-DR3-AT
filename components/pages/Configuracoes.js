import { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesConfiguracoes from '../../styles/stylesConfiguracoes';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Configuracoes({ navigation }) {
  const { tema, alterarTema } = useContext(ThemeContext);
  const [selecionado, setSelecionado] = useState(tema);

  useEffect(() => {
    setSelecionado(tema);
  }, [tema]);

  function aoSalvar() {
    alterarTema(selecionado);
    navigation.goBack();
  }

  return (
    <GradientFundo>
      <View style={stylesConfiguracoes.container}>
        <Text style={stylesConfiguracoes.titulo}>Configurações</Text>

        <View style={stylesConfiguracoes.card}>
          <Text style={stylesConfiguracoes.label}>Tema do aplicativo</Text>

          <View style={stylesConfiguracoes.opcoes}>
            <TouchableOpacity
              style={[
                stylesConfiguracoes.opcao,
                selecionado === 'light' ? stylesConfiguracoes.opcaoAtiva : null,
              ]}
              onPress={() => setSelecionado('light')}
              activeOpacity={0.85}>
              <Text style={stylesConfiguracoes.textoOpcao}>Claro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesConfiguracoes.opcao,
                selecionado === 'dark' ? stylesConfiguracoes.opcaoAtiva : null,
              ]}
              onPress={() => setSelecionado('dark')}
              activeOpacity={0.85}>
              <Text style={stylesConfiguracoes.textoOpcao}>Escuro</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesConfiguracoes.acoes}>
            <TouchableOpacity
              style={stylesConfiguracoes.botaoVoltar}
              onPress={() => navigation.goBack()}
              activeOpacity={0.85}>
              <Text style={stylesConfiguracoes.textoBotaoVoltar}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesConfiguracoes.botaoSalvar}
              onPress={aoSalvar}
              activeOpacity={0.85}>
              <Text style={stylesConfiguracoes.textoBotaoSalvar}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GradientFundo>
  );
}

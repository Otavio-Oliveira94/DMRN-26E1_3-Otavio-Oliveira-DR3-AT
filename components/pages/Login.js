import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import GradientFundo from '../ui/GradientFundo';
import stylesLogin, {
  placeholderColor,
  indicatorColor,
} from '../../styles/stylesLogin';
import { CREDENCIAIS_TESTE } from '../../mocks/dadosMock';

export default function Login({ navigation }) {
  const CREDENCIAL_EMAIL = CREDENCIAIS_TESTE.email;
  const CREDENCIAL_SENHA = CREDENCIAIS_TESTE.senha;

  const [email, setEmail] = useState(CREDENCIAL_EMAIL);
  const [senha, setSenha] = useState(CREDENCIAL_SENHA);
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(valor).toLowerCase());
  }

  function limparErros() {
    setErroEmail('');
    setErroSenha('');
  }

  function aoPressionarEntrar() {
    limparErros();

    let temErro = false;

    if (!email || email.trim() === '') {
      setErroEmail('Erro: O e-mail é obrigatório. Preencha o campo.');
      temErro = true;
    } else if (!validarEmail(email)) {
      setErroEmail('Erro: E-mail inválido. Digite um e-mail válido.');
      temErro = true;
    }

    if (!senha || senha.trim() === '') {
      setErroSenha('Erro: A senha é obrigatória. Preencha o campo.');
      temErro = true;
    }

    if (temErro) {
      return;
    }

    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
      navigation.replace('Home');
    }, 100);
  }

  const estiloBotao = carregando
    ? stylesLogin.botaoDesabilitado
    : stylesLogin.botao;

  const corPlaceholder = placeholderColor;

  return (
    <GradientFundo>
      <View style={stylesLogin.container}>
        <Text style={stylesLogin.logo}>
          <Text style={stylesLogin.logoNormal}>Infnet</Text>
          <Text style={stylesLogin.logoFood}>Food</Text>
        </Text>

        <Text style={stylesLogin.label}>E-mail</Text>
        <TextInput
          style={stylesLogin.campo}
          placeholder="seu@email.com"
          placeholderTextColor={corPlaceholder}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        {erroEmail ? <Text style={stylesLogin.erro}>{erroEmail}</Text> : null}
        <Text style={stylesLogin.label}>Senha</Text>
        <TextInput
          style={stylesLogin.campo}
          placeholder="Senha"
          placeholderTextColor={corPlaceholder}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        {erroSenha ? <Text style={stylesLogin.erro}>{erroSenha}</Text> : null}
        <TouchableOpacity
          style={estiloBotao}
          onPress={aoPressionarEntrar}
          activeOpacity={0.8}
          disabled={carregando}>
          {carregando ? (
            <ActivityIndicator size="small" color={indicatorColor} />
          ) : (
            <Text style={stylesLogin.textoBotao}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </GradientFundo>
  );
}

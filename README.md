# Infnet Food

Instruções básicas para executar o projeto localmente.

## Requisitos
- [Node.js (LTS)](https://snack.expo.dev/)
- npm ou yarn
- Expo CLI (opcional) — pode usar `npx expo` sem instalar globalmente
- Dispositivo físico com Expo Go para testar notificações locais

## Instalação e execução
```bash
# clonar repositório
git clone <REPO_URL>
cd <PASTA_DO_PROJETO>

# instalar dependências
npm install
# ou
# yarn install

# instalar dependências nativas usadas pelo projeto
npx expo install expo-notifications @react-native-async-storage/async-storage

# iniciar o Metro / Expo
npx expo start
# Lista de Contatos Native

## Descrição

Desenvolvimento de uma aplicação mobile utilizando React Native para gerenciar contatos. A aplicação permite aos usuários visualizar uma lista de contatos, incluindo nome, e-mail e foto. Ao selecionar um contato, o usuário pode acessar uma tela com informações detalhadas sobre ele. Os dados dos contatos são obtidos a partir de uma API externa.

## Tecnologias Utilizadas

- React Native: Framework para desenvolvimento de aplicativos móveis utilizando React.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.
- React Navigation: Biblioteca para navegação entre telas no React Native.

## Funcionalidades

- Autenticação: O projeto utiliza uma rota privada para proteger acessos não autorizados.
- Listagem de Contatos: Exibição de uma lista de contatos com nome, e-mail e foto.
- Detalhes do Contato: Tela com informações detalhadas do contato escolhido.
- Responsividade: Design adaptável a diferentes tamanhos de tela e dispositivos móveis.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- Node.js (versão recomendada: 16.x ou superior).
- npm ou Yarn
- React Native CLI para desenvolvimento sem Expo.
- Android Studio (para emuladores Android) ou Xcode (para emuladores iOS).

## Instalação

Clone o repositório
```bash
git clone https://github.com/WillianBatista19/lista-contatos-native.git
```

Navegue até o diretório do projeto
```bash
cd lista-contatos-native
```

Instale as dependências
```bash
npm install
# ou
yarn install
```

## Execução

Inicie o aplicativo no Android
```bash
npx react-native run-android
```

Inicie o aplicativo no iOS
```bash
npx react-native run-ios
```

Inicie o metro bundler

Caso esteja utilizando um dispositivo físico ou emulador, o Metro Bundler deve iniciar automaticamente. Se não iniciar, você pode iniciar manualmente com:
```bash
npm start
# ou
yarn start
```

## Use o aplicativo em seu dispositivo

Se tudo estiver configurado corretamente, o aplicativo será aberto automaticamente no emulador ou no dispositivo conectado.

## Início Rápido

Após instalar as dependências e iniciar o aplicativo, você pode começar a editar o projeto. O ponto de entrada principal do projeto é o arquivo app.tsx. Qualquer alteração feita neste arquivo ou em seus componentes será refletida automaticamente no dispositivo ou emulador.

## Configuração de Fontes

Este projeto utiliza fontes padrão do sistema operacional móvel, o que garante compatibilidade e desempenho em diferentes dispositivos. Se necessário, fontes personalizadas podem ser adicionadas seguindo a documentação oficial do React Native.

## Usuário e Senha para Acesso
Usuário: admin
Senha: admin123


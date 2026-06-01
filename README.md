🐾 HelpPet

Aplicativo mobile desenvolvido com React Native, Expo e TypeScript, com o objetivo de facilitar a adoção de animais domésticos por meio de uma interface simples, intuitiva e acessível.

📱 Sobre o Projeto

O HelpPet foi desenvolvido como projeto acadêmico da disciplina de Desenvolvimento Mobile, aplicando conceitos fundamentais de desenvolvimento de aplicações móveis, incluindo:

- Navegação entre telas
- Componentes reutilizáveis
- Integração com recursos nativos do dispositivo
- Organização modular do código
- Boas práticas de desenvolvimento com React Native

O aplicativo permite visualizar pets disponíveis para adoção, consultar informações detalhadas de cada animal e utilizar recursos do dispositivo para personalização do perfil do usuário.

---

🚀 Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Bottom Tab Navigation
- Native Stack Navigation
- Expo Camera
- Expo Image Picker
- Expo Vector Icons

---

📂 Estrutura do Projeto


---

📸 Funcionalidades

🏠 Tela Inicial

- Apresentação do aplicativo
- Navegação para as demais funcionalidades

🐶 Lista de Pets

- Exibição dos animais disponíveis para adoção
- Utilização de FlatList para melhor desempenho

📋 Detalhes do Pet

- Nome
- Idade
- Raça
- Descrição
- Foto do animal

👤 Perfil

- Personalização do perfil do usuário
- Seleção de imagens da galeria
- Integração com recursos nativos do dispositivo

---

🧭 Navegação

O aplicativo utiliza dois tipos de navegação:

Bottom Tab Navigator

Home
Pets
Perfil

Stack Navigator

Pets
 ├── Lista de Pets
 └── Detalhes do Pet

---

📦 Instalação

Clone o repositório:

git clone https://github.com/nihilist-404/HelpPet.git

Entre na pasta do projeto:

cd HelpPet

Instale as dependências:

npm install

Execute o projeto:

npx expo start

---

📋 Dependências Principais

{
  "@react-navigation/native": "^7.2.5",
  "@react-navigation/bottom-tabs": "^7.16.2",
  "@react-navigation/native-stack": "^7.16.0",
  "@expo/vector-icons": "^15.1.1",
  "expo-camera": "~17.0.10",
  "expo-image-picker": "~17.0.11"
}

---

🎯 Objetivos do Projeto

- Aplicar conceitos de desenvolvimento mobile
- Implementar navegação entre telas
- Utilizar recursos nativos do dispositivo
- Desenvolver uma interface intuitiva
- Promover uma experiência simples para adoção de animais

---

🔮 Melhorias Futuras

- Sistema de autenticação
- Cadastro de usuários
- Favoritos
- Chat entre adotante e responsável
- Banco de dados em nuvem
- Integração com API
- Sistema de busca e filtros
- Geolocalização de ONGs e abrigos

---

👨‍💻 Equipe

Desenvolvido por:
José Gustavo Santana da Silva 
Julliano Cezar Marciel Evangelista Silva

---

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
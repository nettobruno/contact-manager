# Contact Manager

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=husky&logoColor=white)](https://typicode.github.io/husky/#/)
[![Commitlint](https://img.shields.io/badge/Commitlint-000000?style=for-the-badge&logo=commitlint&logoColor=white)](https://commitlint.js.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

**Contact Manager** é um projeto de frontend para controle de contatos, desenvolvido com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**.  
O projeto segue o design definido no [Figma](https://www.figma.com/design/1xoHhvXTjn55iqzHFb3XNO/Gerenciador-de-contatos--Community-?node-id=3106-396&t=3QSy66fz2WEdk00J-1).

Inclui validação de formulários, mensagens de erro padronizadas, componentes reutilizáveis e padronização de commits para demonstrar boas práticas de desenvolvimento.

---

## 🚀 Stack utilizada

- **Front-end:** React, Next.js, TypeScript, Tailwind CSS
- **Padronização de commits:** Husky + Commitlint

---

## 📸 Screenshots
Login:
<img width="1366" height="768" alt="login" src="https://github.com/user-attachments/assets/5bf3c05d-dfdc-4b25-ab08-497d89fcc6e3" />

Register:
<img width="1366" height="768" alt="register" src="https://github.com/user-attachments/assets/ff42d2bb-59a1-405f-8ce2-2e0fb14c898b" />

---

## 🛠 Rodando localmente

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/contact-manager.git

```

Entre na pasta e instale as dependências:

```bash
cd contact-manager
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra http://localhost:3000 no navegador.

📦 Commits
Este projeto segue Commitlint com convenção Conventional Commits e usa Husky para pré-validar mensagens.

Para criar commits padronizados, basta rodar:

```bash
npm run commit
```

Isso abrirá um assistente interativo (Commitizen) para escolher o tipo de alteração e gerar mensagens de commit corretas, como:

- feat: → Nova funcionalidade
- fix: → Correção de bug
- chore: → Atualização de dependências ou configuração

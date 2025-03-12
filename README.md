<h1>Sistema de Controle de Acesso</h1>

<h2>Descrição</h2>

Sistema web para gerenciamento de controle de acesso, permitindo o registro e acompanhamento de funcionários, visitantes e prestadores de serviço.

<h2>Tecnologias Utilizadas</h2>

<ul>
  <li>Next.js 13</li>
  <li>TypeScript</li>
  <li>MongoDB</li>
  <li>NextAuth</li>
  <li>Tailwind CSS</li>
  <li>Bcrypt</li>
</ul>

<h2>Funcionalidades</h2>

<ul>
  <li>Autenticação de usuários</li>
  <li>Registro de funcionários</li>
  <li>Registro de visitantes</li>
  <li>Registro de prestadores de serviço</li>
  <li>Dashboard administrativo</li>
</ul>

<h2>Configuração do Ambiente</h2>

1.  Clone o repositório
git clone [url-do-repositorio]

2.  Instale as dependências
npm install

3.  Configure as variáveis de ambiente Crie um arquivo .env.local na raiz do projeto com:
MONGODB_URI=sua-conexao-mongodb
NEXTAUTH_SECRET=sua-chave-secreta
NEXTAUTH_URL=http://localhost:3000

4. Inicie o servidor de desenvolvimento
npm run dev ou npx next dev

<h2>Estrutura do Projeto</h2>

<ul>
  <li>/app - Rotas e páginas da aplicação</li>
  <li>/components - Componentes reutilizáveis</li>
  <li>/lib - Configurações do MongoDB</li>
  <li>/models - Modelos do banco de dados</li>
  <li>/hooks - Hooks personalizados</li>
</ul>

<h2>Rotas Principais</h2>

<ul>
  <li>/login - Página de autenticação</li>
  <li>/dashboard - Painel principal</li>
  <li>/dashboard/employees - Gestão de funcionários</li>
  <li>/dashboard/visitors - Gestão de visitantes</li>
  <li>/dashboard/service-providers - Gestão de prestadores</li>
</ul>

<h2>Contribuição</h2>

1. Faça o fork do projeto
2. Crie sua branch de feature
3. Commit suas alterações
4. Push para a branch
5. Abra um Pull Request
   
<h2>Licença</h2>

MIT

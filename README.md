# Sistema de Cadastro e Listagem de Produtos

Um aplicativo web desenvolvido com Next.js para gerenciar produtos, permitindo cadastro e listagem com funcionalidades específicas.

## Funcionalidades (Como requisitado)

### Cadastro de Produtos

- Formulário com os seguintes campos:
  - Nome do produto (texto)
  - Descrição do produto (texto)
  - Valor do produto (número)
  - Disponível para venda (sim/não)

### Listagem de Produtos

- Exibição em tabela com as colunas:
  - Nome do produto
  - Valor do produto
  - Disponibilidade
- Ordenação automática por valor (do menor para o maior)
- Botão para adicionar novo produto
- Transição automática para listagem após cadastro

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
cd cadastro_e_listagem_de_produtos
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse o aplicativo:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
src/
  ├── app/
  │   └── page.tsx         # Página principal
  ├── components/
  │   ├── FormularioProduto.tsx  # Componente do formulário
  │   └── ListagemProdutos.tsx   # Componente da listagem
  └── types/
      └── produto.ts       # Definição de tipos
```

## Licença

Este projeto está sob a licença MIT.

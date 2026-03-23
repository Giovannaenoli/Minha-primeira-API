# API de Produtos - Trabalho da Disciplina

A proposta foi juntar os conteúdos das aulas e montar uma API completa com endpoints funcionando, validações e testes realizados no Postman.

A API simula um pequeno sistema de produtos.

# O que foi implementado

Na API eu implementei:
- Listagem de produtos
- Busca de produto por ID
- Criação de novos produtos (POST)
- Validações de dados no cadastro de produtos
- Testes completos no Postman

# Endpoints da API

## Listar todos os produtos

Método: **GET**

/api/produtos

Exemplo no Postman:

GET http://localhost:3000/api/produtos

Esse endpoint retorna todos os produtos cadastrados na API.

## Buscar produto por ID

Método: **GET**

/api/produtos/:id

Exemplo:

GET http://localhost:3000/api/produtos/1

Teste que eu fiz:
- Buscar um produto existente
- Buscar um produto que não existe (para testar erro 404)

## Criar produto

Método: **POST**

/api/produtos

Exemplo no Postman:

POST http://localhost:3000/api/produtos

Body enviado:

JSON
{
  "nome": "Livro A Hipótese do Amor",
  "preco": 55,
  "categoria": "Livros",
}

Esse endpoint adiciona um novo produto na lista.

Validações implementadas

No endpoint de criação de produtos eu implementei algumas validações:

O nome do produto é obrigatório
O preço precisa ser informado
A categoria precisa ser informada
O estoque precisa ser um número
O preço não pode ser negativo

Caso algum dado esteja errado, a API retorna um erro.

Testes realizados no Postman

Eu testei todos os endpoints para garantir que a API estava funcionando corretamente.

Os testes que fiz foram:

✔ Listar todos os produtos
✔ Buscar produto por ID
✔ Testar erro de produto não encontrado
✔ Criar novos produtos
✔ Verificar se os produtos aparecem na lista depois de criar

Produtos criados via POST

Para testar a API, eu criei os seguintes produtos:

Produto 1

{
  "nome": "Livro A Hipótese do Amor",
  "preco": 55,
  "categoria": "Livros",
}

Produto 2

{
  "nome": "HeadSet Gamer",
  "preco": 350,
  "categoria": "Informática",
}

Produto 3

{
  "nome": "Livro Corte de Chamas Prateadas",
  "preco": 98,
  "categoria": "Livros",
}

Produto 4

{
  "nome": "Monitor Smsung 240hz",
  "preco": 98, --esqueci de alterar o preço
  "categoria": "Informática",
}

Produto 5

{
  "nome": "Livro A Garota do Lago",
  "preco": 32,
  "categoria": "Livros",
}

Prints dos testes - Eu criei uma pasta chamada:

/prints

Dentro dessa pasta estão as capturas de tela dos testes realizados no Postman.

Os prints mostram:

Teste do GET de todos os produtos
Teste do GET por ID
Teste de erro 404
Teste de criação de produtos
Lista atualizada após os cadastros

Considerações finais:
Neste trabalho eu consegui praticar melhor como funciona a criação de APIs, rotas, requisições e testes utilizando o Postman. Também foi importante para entender como organizar melhor o código e validar dados recebidos.

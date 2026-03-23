// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

// Dados em memória
let produtos = [
    { id: 1, nome: "Notebook Acer Predator", preco: 3500, categoria: "Informática", estoque: 15 },
    { id: 2, nome: "Mouse Logitech", preco: 150, categoria: "Informática", estoque: 50 },
    { id: 3, nome: "Livro Corte de Chamas Prateadas", preco: 89, categoria: "Livros", estoque: 30 },
    { id: 4, nome: "Teclado Mecânico Gamer", preco: 450, categoria: "Informática", estoque: 20 },
    { id: 5, nome: "Livro Quarta Asa", preco: 68, categoria: "Livros", estoque: 40 }
];

let proximoId = 5;

// 5. Criar primeiro endpoint
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

// 6. Endpoint de informações
app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API REST',
        versao: '1.0.0',
        autor: 'Giovanna Oliveira'
    });
});

// GET /api/produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// GET /api/produtos/:id
app.get('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
});

// POST /api/produtos
app.post('/api/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;

    if (!nome || !preco || !categoria) {
        return res.status(400).json({
            erro: "Campos obrigatórios: nome, preco, categoria"
        });
    }

    if (typeof preco !== 'number') {
        return res.status(400).json({
            erro: "Preço deve ser um número"
        });
    }

    if (preco <= 0) {
        return res.status(400).json({
            erro: "Preço deve ser maior que zero"
        });
    }

    if (nome.length < 3) {
        return res.status(400).json({
            erro: "Nome deve ter pelo menos 3 caracteres"
        });
    }

    const novoProduto = {
        id: proximoId++,
        nome,
        preco,
        categoria
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT
app.put('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if (!produto) return res.status(404).json({ erro: "Não encontrado" });

    const { nome, preco, categoria } = req.body;
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }

    produto.nome = nome;
    produto.preco = preco;
    produto.categoria = categoria;
    res.json(produto);
});

// DELETE
app.delete('/api/produtos/:id', (req, res) => {
    const index = produtos.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ erro: "Não encontrado" });

    produtos.splice(index, 1);
    res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
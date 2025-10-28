const produtosModel = require('../models/produtosModel');

module.exports = {
    formCadProd: (req, res) => {
        res.sendFile('formCadProd.html', { root: './views' });
    },

    cadastrar: (req, res) => {
        const { id, descricao, quantidade, valor_unitario } = req.body;
        const mensagemCadastro = produtosModel.cadastrar(id, descricao, quantidade, valor_unitario);
        res.send(`<h1>${mensagemCadastro}</h1>`);
    }
};
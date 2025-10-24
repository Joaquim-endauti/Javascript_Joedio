const userModel = require('../models/userModel');

module.exports = {

    index: (req, res) => {
        res.sendFile('user.html', { root: './views'});
    },

    formulario: (req, res) => {
        res.sendFile('formLogin.html', {root: './views'});
    },

    login: (req, res) => {
        const { login, senha } = req.body;
        const mensagemLogin = userModel.gerarMensagemLogin(login, senha);
        res.send(`<h1>${mensagem}</h1>`);
    }
}
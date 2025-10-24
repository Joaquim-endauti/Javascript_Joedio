
module.exports = {

    gerarMensagemLogin: (login, senha) => {
        let acesso;

        if (login === "Joédio" && senha === "12345678") {
            acesso = "liberado";
        } else {
            acesso = "negado";
        }
        return `Olá, ${login}! Seu acesso foi ${acesso}.`
    }
}
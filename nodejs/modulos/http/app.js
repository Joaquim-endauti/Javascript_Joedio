//importando o módulo http
import http from 'http';

//criando o servidor que responde com "Hello World" para todas as requisições
http.createServer((req, res) => {
    //definindo o cabeçalho da resposta com status 200 e tipo de conteúdo texto simples
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //enviando a resposta "Hello World"
    res.end('Olá, Mundo!');
    //adicionando um log no console para cada requisição recebida
}).listen(8080);
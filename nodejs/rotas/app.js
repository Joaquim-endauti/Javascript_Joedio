//importa o módulo http nativo do Node.js
import http from 'http';

const PORT = 3000;

//cria o servidor
const server = http.createServer((request, response) => { // Corrigido parêntese
    const url = request.url;
    const method = request.method;

    //define o cabeçalho da resposta como HTML
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); // Corrigido parêntese e aspas

    //roteamento básico
    if (url === '/') {
        response.statusCode = 200; // OK
        response.end('<h1>Página inicial!</h1>');
    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; // OK
        response.end('<h1>Sobre nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro</p>');
    } else if (url === '/contato') {
        response.statusCode = 200; // OK
        response.end('<h1>Fale Conosco</h1>');
    } else if (url === '/fotos') {
        response.statusCode = 200; // OK
        response.end('<h1>Fotos</h1>');
    } else if (url === '/imagens') {
        response.statusCode = 200; // OK
        response.end('<h1>Imagens</h1>');
    } else {
        // Se nenhuma rota corresponder
        response.statusCode = 404; // Not Found
        response.end('<h1>404 - Página não encontrada</h1>');
    }
});

//inicia o servidor para ouvir na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
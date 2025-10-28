import http from 'http';

http.get('http://jsongplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    //Um pedaço de dado foi recebido.
    res.on('data', (chunk) => {
        data += chunk;
    });

    //A resposta inteira foi recebida. Imprime o resultado
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => {
    console.log("Error: " + err.message);
});
//importe o express
import express from "express";

const app = express();
const PORT = 3000;

//Middleware ara definir  cabeçalho da resposta como HTML
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    next();
});

// ROteamento Basico
app.get("/", (req, res) => {
    res.status(200).send("<h1>Página Inicial</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Página Sobre</h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Fale conosco</h1>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Página Fotos</h1>");
});

//errp noggers
app.use((req, res) => {
    res.status(404).send("<h1> 404 -- Página não encontrada</h1>");
});

//servidor poggers
app.listen(PORT, () => {
    console.log(`Servidor Rodando em http://localhost:${PORT}`);
});
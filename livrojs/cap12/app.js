const express = require('express');
const app = express()
const port = 3001



app.get('/', (req, res) =>{
    res.send('Olá... Bem vindo')
})

app.get('/cap12',(req,res) =>{
    res.send('<h2>Olá mundo</h2>')
})

app.use(express.json())

app.post('/filmes',(req, res) =>{
    //const titulo = req.body.titulo
    //const genero = req.body.genero
    
    const {titulo, genero} = req.body
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido`)
})

app.listen(port, () =>{
    console.log(`Servido rodando em http://localhost:${port}`)
})

app.get('/transfere',(req,res) =>{
    res.send("Ok! Valor transferido com sucesso...")
})

const livros =  require("./livros");

app.use('/livros', livros)
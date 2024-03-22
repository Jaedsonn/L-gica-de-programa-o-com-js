const express = require('express');
const app = express()
const port = 3001

app.get('/', (req, res) =>{
    res.send('Olá... Bem vindo')
})

app.get('/cap12', (req,res) =>{
    res.send('<h2>Olá mundo</h2>')
})

app.listen(port, () =>{
    console.log(`Servido rodando em http://localhost:${port}`)
})
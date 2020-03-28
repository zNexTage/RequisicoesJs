const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const porta = 8080;

app.use(bodyParser.urlencoded({extended:true}));

app.post('/login', (req, res)=>{
    const body = req.body;
    const jBody = JSON.stringify(body);

    res.send(`
    <div style="font-family:Arial">
    <p>Essa é uma mensagem vinda do servidor \\o/ </p>
    <p>Olá <span style="font-weight: bold">${body.nome}</span>, possuidor da senha <span style="font-weight: bold">${body.senha}</span> <p>
    <br />
    <p>Olha o JSON!!!! </p>
    <br>
    ${jBody}
    </div>

    `);
});

app.listen(porta, ()=>{
    console.log('Porta 8080')
});

const express = require('express');

const app = express();

//Nossos web services
app.use('/data', (req, res) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json(dataAtual);
});

app.use('/inverter/:str', (req, res) => {
    //Recupera a variável de parâmetro
    let str = req.params.str;
    //Inverte a string
    str = str.split('').reverse().join('');
    res.json(str);
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    //Deixo pra vcs!

    if(cpf.length == 14){
        console.log("CPF válido");
    }else{
        console.log("CPF inválido");
    }
    
    res.send(cpf);
});

app.listen(3000, () => console.log('Servidor iniciado'));
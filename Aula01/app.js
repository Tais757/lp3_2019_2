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
    res.json({resultado: str});
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    //Deixo pra vcs!
    let numeros, digitos, soma = 0, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
          res.json(false);
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = cpf.substring(0,9);
          digitos = cpf.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                res.json(false);//res.json(valido: false);
          numeros = cpf.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                res.json(false);
          res.json(true);
          }
    else
        res.json(true);
    //res.send(cpf);
});

module.exports = app;
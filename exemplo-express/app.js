const express = require('express');

//Constante que controla nosso app
const app = express(); 

app.use('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Servidor iniciado'));
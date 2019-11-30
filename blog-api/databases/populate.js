const itens = [{
    "título": "O que será ?",
    "texto": "Qualquer coisa...."
},
{
    "título": "Onde andará",
    "texto": "Por onde andarás os passaros que aqui abitavam......"
}
];

require('./db');
const Item = require('../models/Item');

Item.insertMany(itens, (erro, itensSalvos) => console.log('Itens salvos'));

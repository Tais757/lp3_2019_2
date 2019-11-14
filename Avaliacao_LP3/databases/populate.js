const itens = [{
    "nome": "Claudio",
    "email": "claudio16@yahoo.com",
    "senha": "Clau1616"
},
{
    "nome": "Joana",
    "email": "ana123@hotmail.com",
    "senha": "Anajo123"
},
{
    "nome": "Evandro",
    "email": "evandro@gmail.com",
    "senha": "Andro522"
},
{
    "nome": "Maya",
    "email": "aya001@gmail.com",
    "senha": "Ayam1323"
}];

require('./db');
const Item = require('../models/Item');

Item.insertMany(itens, (erro, itensSalvos) => console.log('Itens salvos'));
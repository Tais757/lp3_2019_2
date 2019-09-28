const { Item } = require('./db');

const itens = [{
    "unidade": "SETOR1",
    "descricao": "CET"
},
{
    "unidade": "SETOR2",
    "descricao": "CAE"
},
{
    "unidade": "SETOR3",
    "descricao": "MDIS"
},
{
    "unidade": "SETOR4",
    "descricao": "CHCSA"
},
{
    "unidade": "SETOR5",
    "descricao": "CBC"
},
{
    "unidade": "SETOR6",
    "descricao": "FIC"
}
];

/**
 * A função abaixo salvar cada 
 * um dos itens do array acima 
 * no banco de dados.
 */

const  salvarItens = async () => {
    await require('./db');
    //Versão com o laço for
    for (let i = 0; i < itens.length; i++){
        await Item.create(itens[i]);
    }

    //Versão com o laço forEach
    //itens.forEach(async(item) => await Lista.create(item));
};

//Invoca a função que salva os itens
salvarItens();


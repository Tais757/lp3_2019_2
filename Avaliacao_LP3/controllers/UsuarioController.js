const Usuario = require('../models/Usuario');
const Item = require('../models/Item');

const controller = {

    recuperarItens: async (req, res) => {
        const { filtro } = req.body;
        const itens = await Item.find({ 
            descricao: { '$regex': filtro, '$options': 'i' } 
        });
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { nome } = req.body;
        if (nome) {
            const usuario = req.body;
            Usuario
            .create(usuario)
            .then(salvaUsuario => res.status(201).json(salvaUsuario))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar o usuario'});
            });
        } else {
            return res.status(400).json({ mensagem: 'Nome não encontrado'});
        }
    }
};

module.exports = controller;
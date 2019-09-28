const { Op } = require('sequelize');
const { Lista, Item } = require('../databases/db');

const controller = {
    recuperarTodas: async (req, res) => {
        const trabalhos = await Lista.findAll();
        return res.json(trabalhos);
    },

    salvar: (req, res) =>{
        const trabalhos = req.body;

        if(!trabalhos.nome){
            return res 
                .status(400) 
                .json({mensagem: 'Nome não informado'}); 
        }
            
        Lista
            .create(trabalhos)
            .then(
                trabalhosSalva => res.status(201).json(trabalhosSalva),
                erro => res.status(400).json(erro)
            )
            .catch(erro =>{
                console.log(erro);
                return res
                    .status(500)
                    .json({mensagem: 'Erro ao tentar salvar a lista'});
            });
    },

    recuperarItensPorDescricao: async (req, res) => {
        const { consulta } = req.body;
        let itens = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `%${consulta}%`
                }
            }
        });

        return res.json(itens);
    }
        
};

module.exports = controller;
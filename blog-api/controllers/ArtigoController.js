const Artigo = require('../models/Artigo');
const Item = require('../models/Item');

const controller = {

    recuperarArtigos: async (req, res) => {
        const artigos = await Artigo.find();
        return res.json(artigos);
    },

    recuperarItens: async (req, res) => {
        const itens = await Item.find({ titulo: { $regex: '', $options: 'i' } 
        });
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { titulo, texto } = req.body;
        if (titulo, texto) {
            const artigo = req.body;
            Artigo
            .create(artigo)
            .then(salvarArtigo => res.status(201).json(salvarArtigo))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar a artigo'});
            });
        } else {
            return res.status(400).json({ mensagem: 'Título ou texto não informado'});
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const artigo = req.body;

        Artigo
            .findByIdAndUpdate(id, artigo)
            .exec()
            .then(artigoAtulizado => {
                /**
                 * Se encontrou a Artigo e
                 * a atualizou...
                 */
                if(artigoAtulizado){
                    res.json({mensagem: 'Artigo atualizado'});
                } else {
                    res
                        .status(404)
                        .json({ mensagem: 'Artigo não encontrado' });
                }
            })
            .catch(erro => { console.log(erro)});
            res
                .status(500)
                .json({ mensagem: 'Erro ao tentar atualizar a artigo' });
    },

    remover: (req, res) => {
        const { id } = req.params;

        Artigo.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(204).end(),
        erro => {
            console.log(erro);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json({
                mensagem: 'Erro ao tentar remover a artigo'
            });
        });
    }
};

module.exports = controller;
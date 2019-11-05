const Usuario = require('../models/Usuario');
const Item = require('../models/Item');

const controller = {

    recuperarItens: async (req, res) => {
        const { filtro } = req.body;
        const itens = await Item.find({ 
            nome: { '$regex': filtro, '$options': 'i' },
            email: { '$regex': filtro, '$options': 'i' }
        });
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { nome, email, senha} = req.body;
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
            return res.status(400).json({ mensagem: 'Usuário não informado'});
        }

        if (email) {
            const email = req.body;
            Usuario
            .create(email)
            .then(salvaEmail => res.status(201).json(salvaEmail))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar o e-mail do usuario'});
            });
        } else {
            return res.status(400).json({ mensagem: 'E-mail de usuário não informado'});
        }
          
        while (senha) {
            const digito = senha;
            const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})/;

            if (digito.length < 8){
                return res.status(400).json({ mensagem: 'A senha deve conter no mínimo 8 digitos!' });
            } else if (!regex.exec(digito)){
                return res.status(400).json({ mensagem: 'A senha deve conter no mínimo 1 letra maiúscula e 1 digito numérico!' });
            } else if (senha === digito ){
             return res.status(400).json({ mensagem: 'Senha diferente' });
            }

            if (senha){
            const senha = req.body;
            Usuario
            .create(senha)
            .then(salvaSenha => res.status(201).json(salvaSenha))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar a senha de usuario'});
            });
        } else {
            return res.status(400).json({ mensagem: 'Senha de usuário inválida'});
        }
        }
    }
};

module.exports = controller;
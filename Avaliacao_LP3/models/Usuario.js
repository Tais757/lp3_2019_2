const { Schema, model, ObjectId } = require('mongoose');

const esquema = new Schema({
    nome: {
        type: String,
        required: true
    },
    itens: [
        {
            type: ObjectId,
            ref: 'Item'
        }
    ]
});

const Usuario = model('Usuario', esquema);
module.exports = Usuario;
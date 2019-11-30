const { Schema, model } = require('mongoose');

const esquema = new Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    texto: {
        type: String,
        required: true
    }
});

const Item = model('Item', esquema);
module.exports = Item;
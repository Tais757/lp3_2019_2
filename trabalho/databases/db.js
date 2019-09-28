const Sequelize = require('sequelize');

const dbConfig = require('./config');
const AreaModel = require('../models/AreaModel');
const ItemModel = require('../models/ItemModel');

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password, {
        host: config.host,
        dialect: config.dialect,
        port: config.port
    });

     const Lista = AreaModel(conexao, Sequelize);
     const Item = ItemModel(conexao, Sequelize);

    conexao
        .sync({alter: true})
        .then(() => console.log('BD Conectado e sincronizado'));

    const db = { Lista, Item };

    module.exports = db;
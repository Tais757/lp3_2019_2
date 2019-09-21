const ItemModel = (sequelize, DataTypes) =>{
    
    const Item = sequelize.define('Item', {
        descricao:{
            type: DataTypes.STRING, //define o tipo 
            allowNull: false //define que tem que ser obrigatório(não ser null)
        },
        unidade:{
            type: DataTypes.STRING, 
            allowNull: false 
        }
    }, {});

    return Item;
};

module.exports = ItemModel;
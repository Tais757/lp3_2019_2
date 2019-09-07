const ListaModel = (sequelize, DataTypes) =>{
    const Lista = sequelize.define('Lista', {
        nome:{
            type: DataTypes.STRING, //define o tipo 
            allowNull: false //define que tem que ser obrigatório(não ser null)
        }
    }, {});

    return Lista;
};

module.exports = ListaModel;
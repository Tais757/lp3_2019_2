const ListaModel = (sequelize, DataTypes) =>{
    const Lista = sequelize.define('Lista', {
        titulo:{
            type: DataTypes.STRING,  
            allowNull: false 
        },
        orientador:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        estudante1:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        estudante2:{
            type: DataTypes.STRING, 
            allowNull: true 
        },
        estudante3:{
            type: DataTypes.STRING, 
            allowNull: true 
        },
        area:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        dataSubmissao:{
            type: DataTypes.DATEONLY, 
            allowNull: false 
        }
    }, {});

    return Lista;
};

module.exports = ListaModel;
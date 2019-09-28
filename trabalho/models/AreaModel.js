const AreaModel = (sequelize, DataTypes, DateOnly) =>{
    const Trabalho = sequelize.define('Trabalho', {
        nome:{
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
            type: DataTypes.DateOnly, 
            allowNull: false 
        }
    }, {});

    return Area;
};

module.exports = AreaModel;
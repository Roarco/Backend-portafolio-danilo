const { Model, DataTypes, Sequelize} = require('sequelize');

const PROJECT_TABLE = 'projects';

const projectSchema ={
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

class Project extends Model {
    static associate(){
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PROJECT_TABLE,
            modelName: 'Project',
            timestamps: false,
        }
    }
};

module.exports = {
    PROJECT_TABLE,
    projectSchema,
    Project
}
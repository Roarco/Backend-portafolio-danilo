const {projectSchema, Project} = require('./projects');

function setupModels(sequelize){
    Project.init(projectSchema, Project.config(sequelize));
};

module.exports = setupModels;
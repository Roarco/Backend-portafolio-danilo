const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')

class ProjectService {
    constructor(){

    }

    async create(data){
        const reslut = await models.Project.create(data);
        return reslut;
    }

    async find() {
        const result = await models.Project.findAll();
        return result;
    }

    async findOne(id) {
        const result = await models.Project.findByPk(id);
        if (!result) {
            throw boom.notFound('Project not found');
        }
        return result;
    }

    async update(id, changes) {
        const result = await models.Project.update(changes, {
            where: {
                id
            }
        });
        if (!result) {
            throw boom.notFound('Project not found');
        }
        return result;
    }

    async delete(id) {
        const result = await models.Project.destroy({
            where: {
                id
            }
        });
        if (!result) {
            throw boom.notFound('Project not found');
        }
        return result;
    }
};

module.exports = ProjectService;
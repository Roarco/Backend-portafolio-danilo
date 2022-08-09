const express = require('express');
const ProjectService = require('../services/project');
const validatorHandler = require('../middleware/validator');
const {createProjectSchema,updateProjectSchema,getProjectSchema} = require('../schema/project');


const router = express.Router();
const services = new ProjectService();

//GET

router.get('/', async (req, res, next) => {
    try {
        const project = await services.find();
        res.json(project);
    } catch (error) {
        next(error);
    }
});


//GET BY ID
router.get('/:id',
validatorHandler(getProjectSchema, 'params'),
async (req, res, next) => {
    try {
        const {id } = req.params;
        const project = await services.findOne(id);
        res.json(project);
    }catch (error) {
        next(error);
    }
})

//POST
router.post('/',
validatorHandler(createProjectSchema, 'body'),
async (req, res, next) => {
    try {
        const {body} = req;
        const newProject = await services.create(body);
        res.json(201).json(newProject);
    } catch (error) {
        next(error);
    }
})

//PATH

router.patch('/:id',
validatorHandler(getProjectSchema, 'params'),
validatorHandler(updateProjectSchema, 'body'),
async (req, res, next) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updateProject = await services.update(id, body);
        res.json({
            message: 'Project updated',
        });
    } catch (error) {
        next(error);
    }
}
);

//DELETE
router.delete('/:id',
validatorHandler(getProjectSchema, 'params'),
async (req, res, next) => {
    try {
        const {id} = req.params;
        const project = await services.delete(id);
        res.json({
            message: 'Project deleted',
        });
    } catch (error) {
        next(error);
    }
})

module.exports = router;
const joi = require('joi');

const id = joi.number().integer();
const img = joi.string().required();
const title = joi.string().min(10).max(200).required();
const description = joi.string().min(10).max(500).required();

//creamos una constante llamada skill que es un array de strings cons las skills que se pueden llegar a tener un proyecto
const skills = joi.array().items(joi.string().min(3).max(50));
const link = joi.string().required();


const createProjectSchema = joi.object({
    img: img.required(),
    title: title.required(),
    description: description.required(),
    skills: skills.required(),
    link: link.required()
});

const updateProjectSchema = joi.object({
    img: img,
    title: title,
    description: description,
    skills: skills,
    link: link
});

const getProjectSchema = joi.object({
    id: id.required()
});

module.exports = {
    createProjectSchema,
    updateProjectSchema,
    getProjectSchema
}



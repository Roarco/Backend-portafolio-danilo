const express = require('express');

const project = require('./routes/project');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/project', project);
}

module.exports = routerApi;
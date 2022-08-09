const express = require('express');
const routerApi = require('./src/index');
const { logErrors, errorHandler, boomErrorHandler } = require('./src/middleware/errorHadlers');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//usando un middleware nativo de express
app.use(express.json());

// creamos un middleware para que se pueda usar cors en todas las rutas
app.use(cors());

//usamos las rutas
routerApi(app);

// usamos un middleware para manejar los errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
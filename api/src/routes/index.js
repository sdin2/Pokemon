const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoute = require('./pokemonRoute');
const typesRoute = require('./typesRoute');


const router = Router();

router.use("/pokemon", pokemonRoute);
router.use("/types", typesRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

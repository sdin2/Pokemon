const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoute = require('./pokemonRoute');


const router = Router();

router.use("/pokemon", pokemonRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

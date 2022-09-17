const { Router } = require("express"); // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Types } = require("../db.js");

router.get("/", async (req, res, next) => {
    const name= req.query.name? req.query.name : req.body.name
    try {
     if (name){
        let types= await Types.findOne({
            where: {name : name}
        })
        res.send(types)
     }
     else {
        let types = await Types.findAll()
        res.send(types)
      }
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;
const { Router } = require("express"); // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Type } = require("../db.js");

router.get("/", async (req, res, next) => {
    const name= req.query.name? req.query.name : req.body.name
    try {
     if (name){
        let type= await Type.findOne({
            where: {name : name}
        })
        res.send(type)
     }
     else {
        let type = await Type.findAll()
        res.send(type)
      }
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;
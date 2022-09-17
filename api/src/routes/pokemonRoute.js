const { Router } = require("express"); // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Pokemon } = require("../db.js");


router.get("/", async (req, res, next) => {
    const name= req.query.name? req.query.name : req.body.name
    try {
     if (name){
        let pokemon= await Pokemon.findOne({
            where: {name : name}
        })
        res.send(pokemon)
     }
     else {
        let pokemon = await Pokemon.findAll()
        res.send(pokemon)
      }
    } catch (error) {
      console.log(error);
    }
  });


router.post("/", async (req, res, next) => {
    let body=req.body
    console.log(body)
    console.log(body.elemTypes, "1123123123")
    try {
      await Pokemon.findOrCreate({
        where:{
            name:body.name,
            id:Number(body.id),
            height:Number(body.height),
            weight:Number( body.weight),
            elemTypes: body.elemTypes,
            description:body.description,
            image: body.image
        }
      })
    } catch (error) {
      console.log(error);
    }
  });


router.put("/:id", async (req, res, next) => {
    let id= req.params.id
    let body= req.body
    try {
      let pokemon = await Pokemon.findByPk(id)
        pokemon.update({
            name: body.name,
            image: body.image,
            id:Number(body.id),
            height:Number(body.height),
            weight: Number(body.weight),
            elemTypes: body.elemTypes,
            description:body.description
        })
    } catch (error) {
      console.log(error);
    }
  });
  
  
  module.exports = router;
  
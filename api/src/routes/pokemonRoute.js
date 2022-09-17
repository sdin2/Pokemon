const { Router } = require("express"); // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Pokemon, Types } = require("../db.js");


router.get("/", async (req, res, next) => {
    const name= req.query.name? req.query.name : req.body.name
    try {
     if (name){
        let pokemon= await Pokemon.findOne({
          
            where: {name : name}

        },
        {include: [
          {
            model: Types,
            attributes: ["id", "name"],
          }]}
        )
        res.send(pokemon)
     }
     else {
        let pokemon = await Pokemon.findAll( 
          {include: [
            {
              model: Types,
              attributes: ["id", "name"],
            }]}
        )
        res.send(pokemon)
      }
    } catch (error) {
      console.log(error);
    }
  });


router.post("/", async (req, res, next) => {
    let body=req.body
    try {
      await Pokemon.findOrCreate({
        where:{
            name:body.name,
            pokedexId:Number(body.id),
            height:Number(body.height),
            weight:Number( body.weight),
            description:body.description,
            image: body.image
        }
      })
      let pokemonAddtypes = await Pokemon.findOne({
        where: {
          name: body.name
        }
      })
      let type1 = await Types.findOne({
        where: {
          name:body.elemType[0]
        }
      })
      if( body.elemTypes.length > 0) {
      let type2 = await Types.findOne({
        where: {
          name:body.elemType[1]
        }
      })
    await pokemonAddtypes.addTypes(type2)
  }
  await pokemonAddtypes.addTypes(type1)

      
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
            description:body.description
        })
    } catch (error) {
      console.log(error);
    }
  });
  
  
  module.exports = router;
  
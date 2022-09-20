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
        {include: 
          {
            model: Types,
            attributes: ["id", "name", "image"],
          }}
        )
        res.send(pokemon)
     }
     else {
        let pokemon = await Pokemon.findAll( 
          {
            include:
              {
                model: Types,
                attributes: ["id", "name", "image"],
              }
            ,
          }
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
      let pokemonInDb= await Pokemon.findAll()
      let pokemonInDbFilterByPkdexId=pokemonInDb.filter(e=>e.pokedexId==body.id)
      let pokemonInDbFilterByName=pokemonInDb.filter(e=>e.name==body.name)
      if(body.name===""||body.id===""||body.elemTypes.length===0||pokemonInDbFilterByPkdexId.length>0 || pokemonInDbFilterByName>0 ){
        res.send("no se completaron todos los campos o el nombre o la pokedex id ya existen")
      }
     else{ await Pokemon.findOrCreate({
        where:{
            name:body.name,
            pokedexId:Number(body.id),
            height:Number(body.height),
            weight:Number( body.weight),
            description:body.description,
            image: body.image
        }
      })
      let pokemonAddTypes = await Pokemon.findOne({
        where: {
          name: body.name
        }
      })
      let type1 = await Types.findOne({
        where: {
          name:body.elemTypes[0]
        }
      })
      console.log(type1)
      await pokemonAddTypes.addTypes(type1)
      if( body.elemTypes.length > 1) {
      let type2 = await Types.findOne({
        where: {
          name:body.elemTypes[1]
        }
      })
    await pokemonAddTypes.addTypes(type2)
  }

      res.send("all good")}
    } catch (error) {
      console.log(error);
    }
  });


router.put("/:id", async (req, res, next) => {
    let id= req.params.id
    let body= req.body
    try {
      let pokemonInDb= await Pokemon.findAll()
      let pokemonInDbFilterByPkdexId=pokemonInDb.filter(e=>e.pokedexId==body.id)
      let pokemonInDbFilterByName=pokemonInDb.filter(e=>e.name==body.name)
      if(pokemonInDbFilterByPkdexId.length===0 || pokemonInDbFilterByName===0){
        let pokemon = await Pokemon.findByPk(id)
          pokemon.update({
              name: body.name,
              image: body.image,
              pokedexId:Number(body.id),
              height:Number(body.height),
              weight: Number(body.weight),
              description:body.description
          })
          res.send("all good")
      }
      else{
        res.send("name or pokedex number already exist")
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  
  module.exports = router;
  
const { Router } = require("express"); // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Pokemon, Type } = require("../db.js");


router.get("/", async (req, res, next) => {
    const name= req.query.name? req.query.name : req.body.name
    try {
     if (name){
        let pokemon= await Pokemon.findOne({
          
            where: {name : name}

        },
        {include: 
          {
            model: Type,
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
                model: Type,
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
      let pokemonInDbFilterByName=pokemonInDb.filter(e=>e.name.toLowerCase()==body.name.toLowerCase())
      if(body.name===""||body.id===""||body.elemType.length===0||pokemonInDbFilterByPkdexId.length>0 || pokemonInDbFilterByName.length>0 ){
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
      let pokemonAddType = await Pokemon.findOne({
        where: {
          name: body.name
        }
      })
      let type1 = await Type.findOne({
        where: {
          name:body.elemType[0]
        }
      })
      
      await pokemonAddType.addType(type1)
      if( body.elemType.length > 1) {
      let type2 = await Type.findOne({
        where: {
          name:body.elemType[1]
        }
      })
    await pokemonAddType.addType(type2)
  }

      res.send("all good")}
    } catch (error) {
      console.log(error);
    }
  });


router.put("/:id", async (req, res, next) => {
    let id= req.params.id
    let body= req.body
    let pokemonFilterByName = []
    let pokemonFilterById = []
    try {
      if(body.name !== body.pastName) {
        let pokemonInDb= await Pokemon.findAll()
        pokemonFilterByName=pokemonInDb.filter(e=>e.name.toLowerCase()===body.name.toLowerCase()) 
               
      }
      if( body.id !== body.pastId) {
        let pokemonInDb= await Pokemon.findAll()
        pokemonFilterById=pokemonInDb.filter(e=>e.pokedexId == body.id)
      }
console.log(body)
      if( body.elemType[0] !== body.pastElemType[0] || body.elemType[1] !== body.pastElemType[1]) {
        let pokemon = await Pokemon.findByPk(id)
        await pokemon.setTypes([])
        let type1 = await Type.findOne({
          where: {
            name:body.elemType[0]
          }
        })
        
        await pokemon.addType(type1)
        if( body.elemType.length > 1) {
        let type2 = await Type.findOne({
          where: {
            name:body.elemType[1]
          }
        })
      await pokemon.addType(type2)
      }}

      if(pokemonFilterByName.length === 0 && pokemonFilterById.length === 0){
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
      else {
        res.send("Ya existe ese pokemon")
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  
  module.exports = router;
  
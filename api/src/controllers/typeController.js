const axios = require ("axios");
const {Types} = require ("../db")



function typeDb () {
    const elemTypes = ["Acero", "Agua", "Bicho", "Dragón", "Eléctrico", "Fantasma", "Fuego", "Hada", "Hielo", "Lucha", "Normal", "Planta", "Psíquico", "Roca", "Siniestro", "Tierra", "Veneno", "Volador"]
    elemTypes.forEach(e => {
        Types.findOrCreate({
            where: {
                name: e,
                
            }
        })
        
    });
    console.log("Los Tipos fueron guardados")
}

module.exports = {typeDb}; 
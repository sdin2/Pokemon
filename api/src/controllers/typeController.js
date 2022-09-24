const axios = require ("axios");
const {Type} = require ("../db")



function typeDb () {
    const elemType =[{image:"https://pm1.narvii.com/6154/0e13205d4cfa9f158af881d548c8c0a59c989d2a_hq.jpg",name:"Acero"}, {image:"https://pm1.narvii.com/6154/4e9ba6a3e2bb8dd8b6af5aed858ca08e7be805b3_hq.jpg" , name:"Agua"}, {image:"https://pm1.narvii.com/6154/e8ae89b17b8e266d603bb2dde190820f4268beb5_hq.jpg" , name:"Bicho"}, {image: "https://pm1.narvii.com/6154/25c10fe787b0abeb6f157238e6a532a7fdcad194_hq.jpg" , name:"Dragon"}, {image:"https://pm1.narvii.com/6154/2dfe9262129296cafa150ebd87518688af4e93d6_hq.jpg" , name:"Fuego"}, {image: "https://pm1.narvii.com/6154/84231d47186fbb2bbca4aa8c563c2de3c2445817_hq.jpg" , name:"Fantasma"}, {image:"https://pm1.narvii.com/6154/0e5993c463e705d0c101bc166fea358cfc640d97_hq.jpg" , name:"Electrico"}, {image:"https://pm1.narvii.com/6154/4ac8f1f708c63b2d29483284e437af66f2f1fd29_hq.jpg" , name:"Hada"}, {image:"https://pm1.narvii.com/6154/3306f53722f94bf2441b39559b1163402cab1cef_hq.jpg" , name:"Lucha"}, {image: "https://pm1.narvii.com/6154/1fed68d1da4f15fb892527cb7d8d82d998d4e7dc_hq.jpg", name:"Hielo"}, {image:"https://pm1.narvii.com/6154/3070b32887ecb1d0d3698fb8b3a9ca44ff4c5fe6_hq.jpg" , name:"Normal"}, {image: "https://pm1.narvii.com/6154/279baf37243b5928afd427a590c0c449d326ec14_hq.jpg", name:"Psiquico"}, {image:"https://pm1.narvii.com/6154/85cc3e40ef1dc2b596f5c6052f2f285dec80d0ee_hq.jpg" , name:"Planta"}, {image:"https://pm1.narvii.com/6154/e84bc5308f7e476638510a6b1142d3f4263a23f2_hq.jpg" , name:"Siniestro"}, {image:"https://pm1.narvii.com/6154/8159436a86f809a099a76a433b9b140463fdb5fa_hq.jpg" , name:"Roca"}, {image:"https://pm1.narvii.com/6154/4c6c3d7f26b1bc786cb963765528bd9a4d61fc8c_hq.jpg" , name:"Veneno"}, {image:"https://pm1.narvii.com/6154/28cb2b1307d223ddd21fa3c162033082b64837b8_hq.jpg" , name:"Tierra"}, {image:"https://pm1.narvii.com/6154/c4eb58d752de61ab92e5f6e594660efb0bdc2b61_hq.jpg" , name:"Volador"}]
     elemType.forEach(e => {
        Type.findOrCreate({
            where: {
                name: e.name,
                image:e.image
            }
        })
        
    });
    console.log("Los Tipos fueron guardados")
}

module.exports = {typeDb}; 
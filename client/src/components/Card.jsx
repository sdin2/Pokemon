import React, { useEffect, useState } from "react";
import EditPokemonForm from "./EditPokemonForm";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { getTypes } from "../redux/actions";

export default function Card({ poke }) {
    
    let Acero = "https://pm1.narvii.com/6154/0e13205d4cfa9f158af881d548c8c0a59c989d2a_hq.jpg"
    let Agua = "https://pm1.narvii.com/6154/4e9ba6a3e2bb8dd8b6af5aed858ca08e7be805b3_hq.jpg"
    let Bicho = "https://pm1.narvii.com/6154/e8ae89b17b8e266d603bb2dde190820f4268beb5_hq.jpg"
    let Dragon = "https://pm1.narvii.com/6154/25c10fe787b0abeb6f157238e6a532a7fdcad194_hq.jpg"
    let Fuego = "https://pm1.narvii.com/6154/2dfe9262129296cafa150ebd87518688af4e93d6_hq.jpg"
    let Fantasma = "https://pm1.narvii.com/6154/84231d47186fbb2bbca4aa8c563c2de3c2445817_hq.jpg"
    let Electrico = "https://pm1.narvii.com/6154/0e5993c463e705d0c101bc166fea358cfc640d97_hq.jpg"
    let Hada = "https://pm1.narvii.com/6154/4ac8f1f708c63b2d29483284e437af66f2f1fd29_hq.jpg"
    let Lucha = "https://pm1.narvii.com/6154/3306f53722f94bf2441b39559b1163402cab1cef_hq.jpg"
    let Hielo = "https://pm1.narvii.com/6154/1fed68d1da4f15fb892527cb7d8d82d998d4e7dc_hq.jpg"
    let Normal = "https://pm1.narvii.com/6154/3070b32887ecb1d0d3698fb8b3a9ca44ff4c5fe6_hq.jpg"
    let Psiquico = "https://pm1.narvii.com/6154/279baf37243b5928afd427a590c0c449d326ec14_hq.jpg"
    let Planta = "https://pm1.narvii.com/6154/85cc3e40ef1dc2b596f5c6052f2f285dec80d0ee_hq.jpg"
    let Siniestro = "https://pm1.narvii.com/6154/e84bc5308f7e476638510a6b1142d3f4263a23f2_hq.jpg"
    let Roca = "https://pm1.narvii.com/6154/8159436a86f809a099a76a433b9b140463fdb5fa_hq.jpg"
    let Veneno = "https://pm1.narvii.com/6154/4c6c3d7f26b1bc786cb963765528bd9a4d61fc8c_hq.jpg"
    let Tierra = "https://pm1.narvii.com/6154/28cb2b1307d223ddd21fa3c162033082b64837b8_hq.jpg"
    let Volador = "https://pm1.narvii.com/6154/c4eb58d752de61ab92e5f6e594660efb0bdc2b61_hq.jpg"
    
   const types1 = "" 
   const types2 = "" 
    
    switch (types) {
        case "Acero":
            return {
                type1 : Acero,
                type2 : Acero
            }
        case "Agua":
            return{
                Agua
            }
            case "Bicho":
                return{
                    Bicho
                }
                case "Dragon":
                    return{
                        Dragon
                    }
                    case "Fuego":
                        return{
                            Fuego
                        }
                        case "Fantasma":
                            return{
                                Fantasma
                            }
                            case "Electrico":
                                return{
                                    Electrico
                                }
                                case "Hada":
                                    return{
                                        Hada
                                    }
                                    case "Lucha":
                                        return {
                                            Lucha
                                        }
                                        case "Hielo":
                                            return {
                                                Hielo
                                            }
                                            case "Normal":
                                                return{
                                                    Normal
                                                }
                                                case "Psiquico":
                                                    return{
                                                        Psiquico
                                                    }
                                                    case "Planta":
                                                        return{
                                                            Planta
                                                        }
                                                        case "Siniestro":
                                                            return{
                                                                Siniestro
                                                            }
                                                            case "Roca":
                                                                return{
                                                                    Roca
                                                                }
                                                                case "Veneno":
                                                                    return{
                                                                        Veneno
                                                                    }
                                                                    case "Tierra":
                                                                        return {
                                                                            Tierra
                                                                        }
                                                                        case "Volador":
                                                                            return {
                                                                                Volador
                                                                            }
        }


    const dispatch = useDispatch()


    const [edit, setEdit] = useState(1);

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])



    function handleOnClick(c) {
        c.preventDefault()
        Swal.fire({
            title: `Details of the pokemon
        Name: ${poke.name},
        Number: ${poke.pokedexId},
        Description: ${poke.description},
        Weigth: ${poke.weight},
        Heigth: ${poke.height},
        Types: ${poke.types.length > 1 ? [ poke.types[0].image, poke.types[1].image] : poke.types[0].image}
        `,
            imageUrl: `${poke.image}`,
            imageWidth: 200,
            showDenyButton: true,
            confirmButtonText: 'Edit',
            denyButtonText: `Close`,
        }).then(result => {
            if (result.isConfirmed === true) {
                setEdit(2)
            }
        })

        // html: ``
    }

    return (
        <div class="min-h-max max-w-sm bg-gray-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 content-center">
            {
                edit === 1 ?
                    <button class="h-full" onClick={c => handleOnClick(c)}>
                        <div class="max-w-sm bg-gray-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a>
                                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div class=" h-full min-h-fit">
                                <a >
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre: {poke.name?.toUpperCase()}</h5>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Número: {poke.pokedexId}</h5>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tipos: {poke.types.length > 1 ? [ poke.types[0].name, poke.types[1].name].toString() : poke.types[0].name}  </h5>
                                </a>
                                <img src={poke.image} alt="" class="mb-3 font-normal text-gray-700 dark:text-gray-400" />
                                <a class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View more
                                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </button>
                    :
                    <div>
                        <EditPokemonForm poke={poke} edit={edit} setEdit={setEdit} />
                    </div>


            }

        </div>
    )
}
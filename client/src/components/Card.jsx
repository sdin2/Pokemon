import React, { useEffect, useState } from "react";
import EditPokemonForm from "./EditPokemonForm";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { getTypes } from "../redux/actions";

export default function Card({ poke }) {




    const dispatch = useDispatch()


    const [edit, setEdit] = useState(1);

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])



    function handleOnClick(c) {
        c.preventDefault()
        Swal.fire({
            title: `
            <div class="text-2xl font-bold">
            ${poke.name.toUpperCase()} 
            </div>
            <image width="500px" src=${poke.image} />
            <div class="flex flex-col justify-center items-center text-xl">
            <div class="flex flex-row justify-center items-center text-xl">Number: <div class="italic font-bold">${poke.pokedexId}</div></div>
            <div class="flex flex-col justify-center items-center text-xl">Description:
            <div class="italic font-bold" > ${poke.description}</div></div>
            <div class="flex flex-row justify-center items-center text-xl"> Weigth: <div class="italic font-bold">${poke.weight}</div> - Heigth: <div class="italic font-bold">${poke.height}</div>
            </div>
            </div>
        `,
            html: poke.types.length > 1 ? `
            <div class="flex flex-row justify-center items-center text-xl font-bold">
            <div class="mr-4">${poke.types[0].name.toUpperCase()} </div>
            <div>${poke.types[1].name.toUpperCase()} </div>
            </div>
            <div class="flex flex-row justify-center items-center text-xl">
            <image width="100px" src=${poke.types[0].image}  />
            <image width="100px" src=${poke.types[1].image} />
            </div>
            ` : `
            <div class="flex flex-row justify-center items-center text-xl font-bold">
            <div class="mr-4">${poke.types[0].name.toUpperCase()} </div>
            </div>
            <div class="flex flex-row justify-center items-center ">
            <image width="100px" src=${poke.types[0].image} />
            </div>
            `,
            width: "600px",
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
        <div className="min-h-max max-w-sm bg-gray-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 content-center">
            {
                edit === 1 ?
                    <button className="h-full" onClick={c => handleOnClick(c)}>
                        <div className="max-w-sm bg-gray-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a>
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className=" h-full min-h-fit">
                                <a >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre: {poke.name?.toUpperCase()}</h5>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Número: {poke.pokedexId}</h5>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tipos: {poke.types.length > 1 ? [poke.types[0].name, poke.types[1].name].toString() : poke.types[0].name}  </h5>
                                </a>
                                <img src={poke.image} alt="" className="mb-3 font-normal text-gray-700 dark:text-gray-400" />
                                <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View more

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
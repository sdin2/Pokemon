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
import { editPokemon, getTypes } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

export default function EditPokemonForm({ poke, setEdit }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: poke.name,
        weight: poke.weight,
        height: poke.height,
        description: poke.description,
        id: poke.pokedexId,
        elemTypes: poke.elemTypes,
        image: poke.image,
    });

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch, getTypes])

    const types = useSelector(state => state.types)

    function handleOnChange(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(editPokemon(poke.id, input))
        setInput({
            name: "",
            weight: "",
            height: "",
            description: "",
            elemTypes: [],
            image: "",
            id: ""
        })
        setEdit(1)
    }


    return (
        // <div className="rounded bg-gray-600 text-white border-white border-opacity-25">
        //     <form onSubmit={(e) => handleSubmit(e)}>
        //         <label> Name:</label><input className="outline-none w-full rounded bg-transparent" value={input.name} name="name" type="text" onChange={e => handleOnChange(e)} />
        //         <label> Height:</label><input className="outline-none w-full rounded bg-transparent" value={input.height} name="height" type="number" onChange={e => handleOnChange(e)} />
        //         <label> Weight:</label><input className="outline-none w-full rounded bg-transparent" value={input.weight} name="weight" type="number" onChange={e => handleOnChange(e)} />
        //         <label> Number:</label><input className="outline-none w-full rounded bg-transparent" value={input.id} name="id" type="number" onChange={e => handleOnChange(e)} />
        //         <label> Image:</label><input value={input.image} name="image" type="text" onChange={e => handleOnChange(e)} />
        //         <label> Description:</label><input className="outline-none w-full rounded bg-transparent" value={input.description} name="description" type="text" onChange={e => handleOnChange(e)} />
        //         <div>
        //             <button type="submit" className="button"> Editar </button>
        //         </div>
        //     </form>
        <div class="w-80 bg-gray-500 rounded shadow-2xl p-8 m-4">
            <h1 class="block w-full text-center text-gray-800 text-2xl font-bold">Edit pokemon</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div class="flex flex-col">
                    <label class=" font-bold text-lg text-gray-900">Name:</label>
                    <input class="border rounded-xl py-2 px-3 text-grey-800" value={input.name} name="name" type="text" onChange={e => handleOnChange(e)} />
                </div>
                <div class="flex flex-col">
                    <label class="mb-2 font-bold text-lg text-gray-900" >Pokedex number:</label>
                    <input class="border rounded-xl py-2 px-3 text-grey-800" value={input.id} name="id" type="number" onChange={e => handleOnChange(e)} />
                </div>
                <div class="flex flex-col">
                    <label class="mb-2 font-bold text-lg text-gray-900" >Height:</label>
                    <input class="border rounded-xl py-2 px-3 text-grey-800" value={input.height} name="height" type="number" onChange={e => handleOnChange(e)} />
                </div>
                <div class="flex flex-col">
                    <label class="mb-2 font-bold text-lg text-gray-900">Weight:</label>
                    <input class="border rounded-xl py-2 px-3 text-grey-800" value={input.weight} name="weight" type="number" onChange={e => handleOnChange(e)} />
                </div>
                <div class="flex flex-col">
                    <label class="mb-2 font-bold text-lg text-gray-900">Description:</label>
                    <textarea class="border rounded-xl py-2 px-3 text-grey-800" value={input.description} name="description" type="text" onChange={e => handleOnChange(e)} />
                </div>
                <div class="flex flex-col">
                    <label class="mb-2 font-bold text-lg text-gray-900" for="password">Image: </label>
                    <input class="border rounded-xl py-2 px-3 text-grey-800" value={input.image} name="image" type="text" onChange={e => handleOnChange(e)} />
                    <img src={input.image} alt="" />
                </div>
                <div className="flex flex-row">
                    <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto p-4" type="submit">Edit</button>
                    <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto p-4" onClick={e => setEdit(1)}> cancel </button>
                </div>
            </form>

        </div>

        // </div>
    )

}

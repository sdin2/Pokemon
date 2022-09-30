import { editPokemon, getTypes } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

export default function EditPokemonForm({ poke, setEdit }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: poke.name,
        pastName: poke.name,
        weight: poke.weight,
        height: poke.height,
        description: poke.description,
        id: poke.pokedexId,
        pastId : poke.pokedexId,
        elemType: [poke.types[0].name, poke.types[1].name],
        pastElemType: [poke.types[0].name, poke.types[1].name],
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
console.log(input.elemType, input.pastElemType)
//  let checkbox = document.querySelectorAll("input[type='checkbox']")
    
     
    // for (let index = 0; index < checkbox.length; index++) {
    //      if (checkbox[index].name === input.elemType[0] || checkbox[index].name === input.elemType[1])
    //      checkbox[index].checked = true
    //  }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(editPokemon(poke.id, input))
        setInput({
            name: "",
            pastName: "",
            weight: "",
            height: "",
            description: "",
            elemType: [],
            pastElemType: [],
            image: "",
            id: "",
            pastId: ""
        })
        setEdit(1)
    }
    function handleOnCheck(c, e) {
        c.target.checked ? setInput({
            ...input,
            elemType: [...input.elemType, c.target.value]

        }) :
            setInput({
                ...input,
                elemType: input.elemType.filter((b) => b !== c.target.value)
            })
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
        <div className="w-80 bg-gray-500 rounded shadow-2xl p-8 m-4">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold">Edit pokemon</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col">
                    <label className=" font-bold text-lg text-gray-900">Name:</label>
                    <input className="border rounded-xl py-2 px-3 text-grey-800" value={input.name} name="name" type="text" onChange={e => handleOnChange(e)} />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-900" >Pokedex number:</label>
                    <input className="border rounded-xl py-2 px-3 text-grey-800" value={input.id} name="id" type="number" onChange={e => handleOnChange(e)} />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-900" >Height:</label>
                    <input className="border rounded-xl py-2 px-3 text-grey-800" value={input.height} name="height" type="number" onChange={e => handleOnChange(e)} />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-900">Weight:</label>
                    <input className="border rounded-xl py-2 px-3 text-grey-800" value={input.weight} name="weight" type="number" onChange={e => handleOnChange(e)} />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-900">Description:</label>
                    <textarea className="border rounded-xl py-2 px-3 text-grey-800" value={input.description} name="description" type="text" onChange={e => handleOnChange(e)} />
                </div>
                <div className="grid grid-cols-3 gap-1 flex flex-wrap content-start pb-5 font-bold text-lg text-gray-900">
                    {types?.map((e, index) => {
                        return (
                            <div className="grid justify-items-start" key={index}>
                                <label className="flex flex-row mr-5" >
                                    <input checked = {e.name === input.elemType[0] || e.name === input.elemType[1] ? true : false} value={e.name} name={e.name} type="checkbox" onChange={c => handleOnCheck(c, e)} />
                                    {e.name}
                                </label>

                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-900" >Image: </label>
                    <input className="border rounded-xl py-2 px-3 text-grey-800" value={input.image} name="image" type="text" onChange={e => handleOnChange(e)} />
                    <img src={input.image} alt="" />
                </div>
                <div className="flex flex-row">
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto p-4" type="submit">Edit</button>
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto p-4" onClick={e => setEdit(1)}> cancel </button>
                </div>
            </form>

        </div>

        // </div>
    )

}

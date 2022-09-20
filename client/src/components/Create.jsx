import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../redux/actions"



export default function Create({ setOpen }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch, getTypes])

    const types = useSelector(state => state.types)


    const [input, setInput] = useState({
        name: "",
        weight: "",
        height: "",
        description: "",
        id: "",
        elemTypes: [],
        image: "",
    });


    function handleOnChange(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleOnCheck(c, e) {
        c.target.checked ? setInput({
            ...input,
            elemTypes: [...input.elemTypes, c.target.value]

        }) :
            setInput({
                ...input,
                elemTypes: input.elemTypes.filter((b) => b !== c.target.value)
            })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createPokemon(input))
        // alert("Se a creado el pokemon")
        setInput({
            name: "",
            weight: "",
            height: "",
            description: "",
            elemTypes: [],
            image: "",
            id: ""
        })
        let checkBox = document.querySelectorAll("input[type='checkbox']")
        // console.log(checkBox)
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked === true) {
                checkBox[i].checked = false
            }
        }
    }




    return (
        // <div>
        //     <form onSubmit={(e) => handleSubmit(e)}>
        //         <label> Name:</label><input value={input.name} name="name" type="text" onChange={e => handleOnChange(e)} />
        //         <label> Height:</label><input value={input.height} name="height" type="number" onChange={e => handleOnChange(e)} />
        //         <label> Weight:</label><input value={input.weight} name="weight" type="number" onChange={e => handleOnChange(e)} />
        //         <label> Number:</label><input value={input.id} name="id" type="number" onChange={e => handleOnChange(e)} />
        //         <label> Image:</label><input value={input.image} name="image" type="text" onChange={e => handleOnChange(e)} />
        //         {types?.map((e, index) => {
        //             return (
        //                 <label key={index}> {e.name}
        //                     <input value={e.name} name={e.name} type="checkbox" onChange={c => handleOnCheck(c, e)} />
        //                 </label>
        //             )
        //         })}
        //         <label> Description:</label><input value={input.description} name="description" type="text" onChange={e => handleOnChange(e)} />
        //         <div>
        //             <button type="submit" className="button"> Crear </button>
        //         </div>
        //     </form>
        // </div>

        <div className=" bg-gray-500 rounded shadow-2xl p-8 m-4 w-1/2  ">
            <h1 className=" flex flex-wrap block w-full text-center text-gray-800 text-2xl font-bold">Create pokemon</h1>
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
                    <label className="mb-2 font-bold text-lg text-gray-900">Image: </label>
                    <input className="border rounded-xl py-2 px-3 text-grey-800" value={input.image} name="image" type="text" onChange={e => handleOnChange(e)} />
                    <img src={input.image} alt="" />
                </div>
                <div className="flex flex-col">
                    <label className=" font-bold text-lg text-gray-900">Description:</label>
                    <textarea className="border rounded-xl py-2 px-3 text-grey-800" value={input.description} name="description" type="text" onChange={e => handleOnChange(e)} />
                </div>
                <div className="grid grid-cols-3 gap-1 flex flex-wrap content-start pb-5 font-bold text-lg text-gray-900">
                    {types?.map((e, index) => {
                        return (
                            <div className="grid justify-items-start" key={index}>
                                <label className="flex flex-row mr-5" >
                                    <input value={e.name} name={e.name} type="checkbox" onChange={c => handleOnCheck(c, e)} />
                                    {e.name}
                                </label>

                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-row">
                    <button className="block bg-blue-700 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create</button>
                    <button className="block bg-blue-700 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" onClick={e => setOpen("z")}>Cancel</button>
                </div>
            </form>

        </div>
    )
}
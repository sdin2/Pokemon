import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createPokemon} from "../redux/actions"



export default function Create() {
    const dispatch = useDispatch();
    const button = document.getElementsByClassName('button')
    

const [input, setInput] = useState({
    name: "",
    weight: "",    
    height: "",
    description :"",
    id: "",
    elemTypes: [],
    image: "",    
});
const elemTypes = ["Acero", "Agua", "Bicho", "Dragón", "Eléctrico", "Fantasma", "Fuego", "Hada", "Hielo", "Lucha", "Normal", "Planta", "Psíquico", "Roca", "Siniestro", "Tierra", "Veneno", "Volador"]

function handleOnChange(e){
    e.preventDefault()
    console.log(e, e.target)
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

function handleOnCheck (e) {
    e.target.checked ? setInput({
    ...input,
    elemTypes: [...input.elemTypes, e.target.value]
    
}) : 
setInput ({
    ...input,
    elemTypes: input.elemTypes.filter((b) => b !== e.target.value)
})}

function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemon(input))
    alert ("Se a creado el pokemon")
    setInput({
        name: "",
        weight: "",        
        height: "",        
        description: "",
        elemTypes: [],
        image: "",
        id: ""
    })}





return(
    <div>
    <form onSubmit = {(e)=>handleSubmit(e)}>
        <label> Name:</label><input value = {input.name} name = "name" type="text" onChange={e=>handleOnChange(e)}/>
        <label> Height:</label><input value = {input.height} name= "height" type="number" onChange={e=>handleOnChange(e)}/>
        <label> Weight:</label><input value = {input.weight} name = "weight" type="number" onChange={e=>handleOnChange(e)}/>
        <label> Number:</label><input value = {input.id} name = "id" type="number" onChange={e=>handleOnChange(e)}/>
        <label> Image:</label><input value = {input.image} name = "image" type="text"  onChange={e=>handleOnChange(e)}/> 
        {elemTypes?.map((e, index) => {
            return (
                <label key = {index}> {e}
                    <input value = {e} name = {e} type="checkbox" onChange={e=>handleOnCheck(e)}/>
                </label>
            )
            })}
        <label> Description:</label><input value = {input.description} name = "description"type="text" onChange={e=>handleOnChange(e)}/>
        <div>
                <button type = "submit" className ="button"> Crear </button>
            </div>
    </form>
    </div>
)}
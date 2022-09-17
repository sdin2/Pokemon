import React from "react";
import { Link } from "react-router-dom";


export default function Card({name,id,elemTypes,image}){
    return (
        <div >
            <Link to= '/home'>
                <button>Volver</button>
            </Link>
            <div>
            
            </div>
            <div className = "h-container">
            <h3> Nombre: {name.toUpperCase()} </h3>
            <h4> Tipo: {elemTypes}</h4>
            <h5> Número: {id}</h5>
            </div>
        </div>
    )
}
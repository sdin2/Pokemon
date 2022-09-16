import React from "react";
import { Link } from "react-router-dom";


export default function Card({name,id,elemType,image}){
    return (
        <div className = "card_container">
            <Link to= '/home'>
                <button>Volver</button>
            </Link>
            <div className = "image_container">
            <img className = "img" src = {image ? image : "https://previews.123rf.com/images/monicaclick/monicaclick1705/monicaclick170500032/79248182-perro-pug-con-amarillo-constructor-trabajador-casco-y-cono-de-seguridad-adem%C3%A1s-de-se%C3%B1al-de-advertenc.jpg"}  alt={`imagen de: ${name}`}/>
            </div>
            <div className = "h-container">
            <h3> Nombre: {name.toUpperCase()} </h3>
            <h4> Tipo: {elemType}</h4>
            <h5> Número: {id}</h5>
            </div>
        </div>
    )
}
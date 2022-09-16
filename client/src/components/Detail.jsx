import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../redux/actions";
import { useParams } from "react-router-dom";




export default function Detail (){
    

const dispatch = useDispatch()
const { id } = useParams();



useEffect(() => {    
    dispatch(getDetail(id));
}, [dispatch])

const myPokemon = useSelector((state)=> state.detail)

    
 return (
    <div className ="detail-container">         
        <div>
            <div>
                <img src={myPokemon.image ? myPokemon.image : "https://previews.123rf.com/images/monicaclick/monicaclick1705/monicaclick170500032/79248182-perro-pug-con-amarillo-constructor-trabajador-casco-y-cono-de-seguridad-adem%C3%A1s-de-se%C3%B1al-de-advertenc.jpg"} width = "300px" alt="imagen"/>
            <div>
            <h1>{myPokemon.name}</h1>
            <h2>#{myPokemon.id}</h2>
            <div> 
                <h2 >Altura: </h2>
                <p> {myPokemon.height}  Centimetros</p>
            </div>
            <div>
            <h2>Peso: </h2>
                <p> {myPokemon.weight}  Kilogramos</p>
            </div>
            <div>
            <h2 >Tipo: </h2>
                
                <p>{myPokemon.elemType} </p>
            </div>
            <div>
            <h2 >Descripción: </h2>
                
                <p>{myPokemon.description} </p>
            </div>
            
        </div> </div>  </div>
        
    <Link to= '/home'><button>Volver</button></Link>
    </div>
 )

 }
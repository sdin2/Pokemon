import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { getAllPokemons } from "../redux/actions";
import Paginado from "../components/Paginado";
import Card from "../components/Card"
import Create from "../components/Create"

export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState (1);
    const [pokemonPerPage, setPokemonPerPage] = useState (8);
    const [open, setOpen] = useState("z");
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon =  indexOfLastPokemon - pokemonPerPage;
    const currentPokemons = allPokemons?.length ? allPokemons?.slice (indexOfFirstPokemon, indexOfLastPokemon) : [];
    const paginado = (pageNumber) => {setCurrentPage(pageNumber)};

    useEffect(() => {
        dispatch(getAllPokemons())},
        [dispatch]);



    return (
        <div>
            <h1> La Gran Pokedex</h1>
            <div> 

                {
                    open === 1?
                    <div>
                        <Create/>
                        <button onClick = {e => setOpen("z")}> Cancel</button>
                    </div>
                    : 

                
                    <button onClick = {e => setOpen(1)}> Crear </button>
                
                }
            </div>
            <Paginado allPokemons = {allPokemons} pokemonPerPage = {pokemonPerPage} paginado = {paginado} className ="paginado"/>
            <div className="Card">
         {typeof currentPokemons === "object" ? currentPokemons?.map((e) => {
          return(
            <div className="Card" key={e.id}>
                {
              <Link to ={`/home/${e.id}`}>
                  <Card name = {e.name} id = {e.id} description = {e.description} image = {e.image} key ={e.id}/>
              </Link>                  
                }
            </div>      
          )
        }): "No se encontraron pokemons"}
         </div>
        </div>
    )
}
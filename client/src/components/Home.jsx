import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons } from "../redux/actions";
import Paginado from "../components/Paginado";
import Card from "../components/Card"
import Create from "../components/Create"


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons())
    },
        [dispatch]);


    const allPokemons = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(9);
    const [open, setOpen] = useState("z");
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemons = allPokemons?.length ? allPokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon) : [];
    const paginado = (pageNumber) => { setCurrentPage(pageNumber) }


    return (
        <div className="bg-gray-500 h-full">
            <div className="bg-gray-500 h-full">
                <p className="pt-10 text-3xl font-bold italic"> La Gran Pokedex</p>

                {
                    open === 1 ?
                        <div className="pt-10 flex flex-col justify-center items-center bg-gray-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                            <Create setOpen={setOpen} />

                        </div>
                        :
                        <button className="mt-8 block bg-blue-700 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" onClick={e => setOpen(1)}> Crear </button>
                }
            </div>
            <div className="pt-10">
                <Paginado thingPerPage={pokemonPerPage} array={allPokemons} paginate={paginado} currentPage={currentPage} className="paginado" />
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {typeof currentPokemons === "object" ? currentPokemons?.map((e) => {
                    return (
                        <Card key={e.id} poke={e} types={e.types} />
                    )
                }) : "No se encontraron pokemons"}
            </div>
            <div className="pt-10">
                <Paginado thingPerPage={pokemonPerPage} array={allPokemons} paginate={paginado} currentPage={currentPage} className="paginado" />
            </div>
        </div>
    )
}
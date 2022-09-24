import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons, filterByType, orderByNumber, orderByName, orderByWeight, orderByHeight } from "../redux/actions";
import Paginado from "../components/Paginado";
import Card from "../components/Card"
import Create from "../components/Create"
import SearchBar from "./SearchBar";


export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((e) =>e.types)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(9);
    const [open, setOpen] = useState("z");
    const [orden, setOrden] = useState("");
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemons = allPokemons?.length ? allPokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon) : [];
    const paginado = (pageNumber) => { setCurrentPage(pageNumber) }

    useEffect(() => {
        dispatch(getAllPokemons())
    },[dispatch]);

    function handleFilterType(e) {
        e.preventDefault()
        dispatch (filterByType(e.target.value))
        setCurrentPage(1)
    }
    function handleOrderByNumber(e) {
        e.preventDefault()
        dispatch (orderByNumber(e.target.value))
        setOrden(e.target.value)
        setCurrentPage(1)
    }
    const handleOrderByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(e.target.value)
        setCurrentPage(1);
    };
     const handleOrderByWeight = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setOrden(e.target.value)
        setCurrentPage(1);
    };
     const handleOrderByHeight = (e) => {
        e.preventDefault();
        dispatch(orderByHeight(e.target.value));
        setOrden(e.target.value)
        setCurrentPage(1);
    };
    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(getAllPokemons(), document.getElementById("myForm").reset(), document.getElementById("mySearch").reset())
    }




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
            <div>
            <form id = "myForm">
                <select onChange = {(e) => handleOrderByName(e)} name = "order" id = "order">
                <option hidden> Orden Alfabético </option>
                <option value = "alf asc"> Orden Ascendente</option>
                <option value = "alf desc"> Orden Descendente</option>
            </select>
            <select onChange = {(e) => handleOrderByWeight(e)}>
                <option hidden> Orden por peso </option>
                <option value = "weightmin"> Peso Ascendente</option>
                <option value = "weightmax"> Peso Descendente</option>
            </select>
            <select onChange = {(e) => handleOrderByHeight(e)}>
                <option hidden> Orden por altura </option>
                <option value = "heightmin"> Peso Ascendente</option>
                <option value = "heightmax"> Peso Descendente</option>
            </select>
            <select onChange = {(e) => handleOrderByNumber(e)}>
            <option hidden> Orden por número </option>
                <option value = "asc"> Orden Ascendente </option>
                <option value = "desc"> Orden Descendente </option>
            </select>
            <select onChange = {(e) => handleFilterType(e)}>
                <option hidden> Orden por tipos </option>
                <option value = "all"> Todos los tipos </option>
                {allTypes && allTypes.map((e) => {
                    return (<option value = {e.name} key={e.id} >{e.name}</option>)
                })
            }
            </select>
            <button onClick = {(e) => handleOnClick(e)}> Resetear filtros</button>
            </form>
        </div>
            <SearchBar/>
            <Paginado thingPerPage={pokemonPerPage} array={allPokemons} paginate={paginado} currentPage={currentPage} className="paginado" />
            <div className="flex flex-wrap ">
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
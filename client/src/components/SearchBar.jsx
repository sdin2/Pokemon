import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import {SearchPokemon} from "../redux/actions"

function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        dispatch(SearchPokemon(e.target.value))
    }
    
    return (
        <form>
        <input type = "text" placeholder = "Buscar..." onChange = {handleOnChange}/> 
        </form>      
    
)
    }

    export default SearchBar;


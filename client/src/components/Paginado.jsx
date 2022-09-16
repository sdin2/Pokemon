import React from "react";

export default function Paginado ({allPokemons, pokemonPerPage, paginado}) {
    const pageNumber = [];
    if( typeof allPokemons === 'object' )
    for (let i = 1; i < Math.ceil (allPokemons.length / pokemonPerPage); i++) {
        pageNumber.push (i)        
    };
    
return(
    <nav className ="paginado">
            {pageNumber && pageNumber.map(e => (
                <ul className="number" key = {e}> 
                    <a onClick= {() => paginado(e)}>
                        {e}
                    </a>
                </ul>
            ))}
        
    </nav>
)};
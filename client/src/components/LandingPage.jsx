import React from "react";
import {Link} from "react-router-dom"


export default function LandingPage() {
    return (
        <div className="main_container">
            <h1 className="titleApp">Pokedex</h1>
            <Link to = "/Home"><button className="button_home"> Entrar </button></Link>             
        </div>
    )
}
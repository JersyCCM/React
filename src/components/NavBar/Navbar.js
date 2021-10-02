import React from "react";
import { CartWidget } from "./CartWidget";



export const NavBar = () => {


    return(
        <header>
            <h1 className= "titulo">Ricarnes</h1>

            <nav className="nav">
        <ul className="navList"> 
        <a class="nav-link navIt texto" href="index.html">RES</a>
        <a class="nav-link navIt texto" href="index.html">AVES</a>   
        <a class="nav-link navIt texto" href="index.html">CERDO</a>

        </ul>
              
                
            </nav>
        </header>
    )
}
import React from "react";
import { CartWidget } from "./CartWidget";



export const NavBar = () => {


    return(
        <header>
            <h1 className= "titulo">Ricarnes</h1>
            

        <nav className="nav">
        
        <ul className="navList"> 
        <a className="nav-link navIt texto" href="index.html">RES</a>
        <a className="nav-link navIt texto" href="index.html">AVES</a>   
        <a className="nav-link navIt texto" href="index.html">CERDO</a>
        <CartWidget/>
        
        </ul>
              
                
            </nav>

            
        </header>
    )
}
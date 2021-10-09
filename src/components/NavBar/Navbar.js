import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {CartWidget} from './CartWidget'
import './NavBar.css'
import  { Logo }   from "../../data/img"




export const NavBar = () => {


    return(
<Navbar bg="dark" variant="dark" className="nav">
 <Navbar.Brand href="#home"><img className="estiloLogo" src={Logo} alt="Logo" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#carnes">Vacuno</Nav.Link>
      <Nav.Link href="#avess">Aves</Nav.Link>
      <Nav.Link href="#cerdo">Cerdo</Nav.Link>
    </Nav>
    <CartWidget/>
  </Navbar>
    
    
    )
  
    
}


  
       /*  <header>
            <h1 className= "titulo">Ricarnes</h1>
            

        <nav className="nav">
        
        <ul className="navList"> 
        <a className="nav-link navIt texto" href="index.html">RES</a>
        <a className="nav-link navIt texto" href="index.html">AVES</a>   
        <a className="nav-link navIt texto" href="index.html">CERDO</a>
        <CartWidget/>
        
        </ul>
              
                
            </nav>

            
        </header> */
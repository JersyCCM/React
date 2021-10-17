import React from 'react'
import './footer.css'
import  { Logo }   from "../../data/img"
import {Facebook} from "../../data/img"
import {Instagram} from "../../data/img"


export const Footer = () => {
    return (
        <div>

<footer className="page-footer font-small pt-4 color">

<div className="container">

        <div className="footerAling">
          
          <img className="estiloLogo" src={Logo} alt="Logo" />

      <div className="container footerCenter">
                    <p className="text">Seguinos por:</p>
                    <a target="_blank" href="https://www.facebook.com/Ricarenesmaracay"><img src={Facebook} alt="Icono" /> Facebook: Ricarnesmaracay</a>
                    <a target="_blank" href="https://www.instagram.com/ricarnes.maracay/"> <img src={Instagram} alt="Icono" />Instagram: @ricarnes.maracay</a>
   
      </div>
      

    
  
      </div>
  </div>

</footer>


        </div>
    )
}


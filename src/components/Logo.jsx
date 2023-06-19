import React from 'react'
import logo from "../assets/freecodecamp-logo.jpg";
import "../style/Logo.css"

function Logo() {
  return (
    <>
        <div className="freecodecamp-logo-contenedor">
            <img src={logo} alt="logo" className="freecodecamp-logo" />
        </div>
  </>
  )
}

export default Logo
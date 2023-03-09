import React from 'react'
import "./Header.css"

const header = ({ makeCicle, homeLink, whatIs }) => {
  return (
    <div  className='header'>
        <div className='nav-bar'>
          <h1>Ciclo de Estudos</h1>
       
          <ul>
              <li onClick={homeLink}>Home</li>
              <li onClick={whatIs}>Sobre</li>
              <li onClick={ makeCicle } ><button className='primary-button'>Fazer Ciclo</button></li>
          </ul>
        </div>
    </div>
  )
}

export default header
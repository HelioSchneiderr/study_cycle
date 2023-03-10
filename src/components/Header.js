import { useState } from "react"
import "./Header.css"


const Header = ({ makeCicle, homeLink, whatIs }) => {

  const[isOpen, setIsOpen] = useState(false)

  const openMenuOrClose = ()=>{
    setIsOpen(!isOpen)
  }

  console.log(isOpen)

  return (
    <div  className='header'>
        <div className='nav-bar'>
          <h1>Ciclo de Estudos</h1>
          <div className="nav-list">
            <ul >
              <li onClick={homeLink}>Home</li>
              <li onClick={whatIs}>Sobre</li>
              <li onClick={ makeCicle } ><button className='primary-button'>Fazer Ciclo</button></li>
            </ul>
            <div className="menu-mobile">
              <button type="button"  onClick={openMenuOrClose}><img src="https://stefanoskarakasis.com/images/icons/hamburger_icon_grey.png" alt="" width="30px" height="30px"/></button>
            </div>
          </div>
        </div>

        <div className='nav-bar-mobile'>   
          {isOpen ? 
          
          null
          
          : 
            <div className="nav-bar-list-mobile">
              <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Fazer Ciclo</li>
              </ul>
            </div>
            
          } 
        </div>

      </div>
  )
}

export default Header
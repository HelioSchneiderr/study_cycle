import React from 'react'
import { useContext, useState } from "react"
import { CicleContext }   from "../context/CicleContext"

import "./Ciclestudy.css"

const Ciclestudy = ({ makeCicle }) => {

  const { terribleList, badList, moreorlessList, goodList, excellentList, hours } = useContext(CicleContext);

  const total = terribleList.length * 5 + badList.length * 4 + moreorlessList.length * 3
    + goodList.length * 2 + excellentList.length * 1;
  const totalHours = hours / total;
  
  // adiciona o estado para controlar a marcação dos checkboxes
  const [isChecked, setIsChecked] = useState();

  const handleReset = () => {
    if(isChecked === false){
      setIsChecked();
    }
    else{
      setIsChecked(false)
    }
    
  }


  const renderSquare = (count) => {
    const squares = [];
    for (let i = count * totalHours; i >= 0; i--) {
      squares.push(<input className='square-radio' type="checkbox" checked={isChecked} />);;
    }
    return squares;
  };

  return (
    <>
      <div className='square'>
        <div className='square-cicle'>
          <h4>Dificuldade Péssimo</h4>
          {terribleList.length > 0 ? (
          <ul className='square-list'>
            {terribleList.map((item) => (
              <li key={item}>
                  <div className='square-list-intern'>
                    <p>{item}</p>
                    <div>{renderSquare(5)}</div>
                  </div>   
              </li>
            ))}
          </ul>
          ) : (
            <p className='empty-list'>A lista está vazia</p>
          )}
        </div>
        <div className='square-cicle'>
          <h4>Dificuldade Ruim</h4>
          {badList.length > 0 ? (
            <ul className='square-list'>
              {badList.map((item) => (
                <li key={item}>
                    <div className='square-list-intern'>
                      <p>{item}</p>
                      <div>{renderSquare(1)}</div>
                    </div>   
                </li>
              ))}
            </ul>
          ) : (
            <p className='empty-list'>A lista está vazia</p>
          )}
        </div>
        <div className='square-cicle'>
          <h4>Dificuldade Mais ou Menos</h4>
          {moreorlessList.length > 0 ? (
            <ul className='square-list'>
              {moreorlessList.map((item) => (
                <li key={item}>
                    <div className='square-list-intern'>
                      <p>{item}</p>
                      <div>{renderSquare(3)}</div>
                    </div>   
                </li>
              ))}
            </ul>
          ) : (
            <p className='empty-list'>A lista está vazia</p>
          )}
        </div>
        <div className='square-cicle'>
          <h4>Dificuldade Bom</h4>
          {goodList.length > 0 ? (
            <ul className='square-list'>
              {goodList.map((item) => (
                <li key={item}>
                    <div className='square-list-intern'>
                      <p>{item}</p>
                      <div>{renderSquare(2)}</div>
                    </div>   
                </li>
              ))}
            </ul>
          ) : (
            <p className='empty-list'>A lista está vazia</p>
          )}
        </div>
        <div className='square-cicle'>
          <h4>Dificuldade Ótimo</h4>
          {excellentList.length > 0 ? (
            <ul className='square-list'>
              {excellentList.map((item) => (
                <li key={item}>
                    <div className='square-list-intern'>
                      <p>{item}</p>
                      <div>{renderSquare(1)}</div>
                    </div>   
                </li>
              ))}
            </ul>
          ) : (
            <p className='empty-list'>A lista está vazia</p>
          )}
        </div>
      </div>
      <div className="reset-hours">
        
        <p>
          <button className="primary-button" onClick={ makeCicle } >Novo Ciclo</button>
          <button id="reset-button" className="primary-button" onClick={()=>{handleReset();}}>Resetar Ciclo</button></p>
      </div>
    </>
  );
};

export default Ciclestudy;
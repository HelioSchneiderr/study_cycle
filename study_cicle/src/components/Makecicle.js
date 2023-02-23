import { useState, useEffect } from "react"
import React from 'react'

import "./Makecicle.css"

const Makecicle = () => {

  let [terribleList, setTerribleList] = useState([]);
  let [newTerrible, setNewTerrible] = useState("");
  
  
  useEffect(()=>{
    setTerribleList([])
  }, [])

  
  return (
    <div className='makecicle'>
      <div className='flex-cicle'>
        <div>
          <div className='intern-cicle'>
            <h4>Péssimo</h4>
            <input value={newTerrible} onChange={value => setNewTerrible(value.target.value)} type="text"/>
            
            ) {
              
            }
            <button onClick={()=>addNewTerrible()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {terribleList.map((item, index) => (
                <li>
                  {item}
                  <button class="delete" onClick={()=> deleteItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Ruim</h4>
            <input type="text"/>
            <button>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul class="list">
              <li>Item 1<button class="delete">X</button></li>
              <li>Item 2<button class="delete">X</button></li>
              <li>Item 3<button class="delete">X</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Mais ou Menos</h4>
            <input type="text"/>
            <button>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul class="list">
              <li>Item 1<button class="delete">X</button></li>
              <li>Item 2<button class="delete">X</button></li>
              <li>Item 3<button class="delete">X</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Bom</h4>
            <input type="text"/>
            <button>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul class="list">
              <li>Item 1<button class="delete">X</button></li>
              <li>Item 2<button class="delete">X</button></li>
              <li>Item 3<button class="delete">X</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Ótimo</h4>
            <input type="text"/>
            <button>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul class="list">
              <li>Item 1<button class="delete">X</button></li>
              <li>Item 2<button class="delete">X</button></li>
              <li>Item 3<button class="delete">X</button></li>
            </ul>
          </div>
        </div>
        
      </div>
      
    </div>
    
  )
              
  function addNewTerrible() {
    setTerribleList([...terribleList, newTerrible]);
    setNewTerrible("")
  }

  function deleteItem(index) {
    console.log(index)
    let tmpArray = [...terribleList]
    tmpArray.splice(index, 1)

    setTerribleList(tmpArray)

  }
}

export default Makecicle
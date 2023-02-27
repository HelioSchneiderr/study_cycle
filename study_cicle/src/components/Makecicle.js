import { useState, useEffect } from "react"
import React from 'react'

import "./Makecicle.css"

const Makecicle = () => {

  let [terribleList, setTerribleList] = useState([]);
  let [newTerrible, setNewTerrible] = useState("");

  let [badList, setBadList] = useState([]);
  let [newBadList, setNewBadList] = useState("");

  let [moreorlessList, setMoreorlessList] = useState([]);
  let [newMoreorlessList, setNewMoreorlessList] = useState("");

  let [goodList, setGoodList] = useState([]);
  let [newGoodList, setNewGoodList] = useState("");

  let [excellentList, setExcellentList] = useState([]);
  let [newExcellentList, setNewExcellentList] = useState("");

  
  console.log(`Essa é o terrible list`, terribleList)
  console.log(`Está é a newTettibleList`, newTerrible)
  
  
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
            <button onClick={()=>addNewTerrible()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {terribleList.map((item, index) => (
                <li>
                  {item}
                  <button class="delete" onClick={()=> deleteTerribleItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Ruim</h4>
            <input value={newBadList} onChange={value => setNewBadList(value.target.value)} type="text"/>
            <button onClick={()=>addNewBadList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {badList.map((item, index) => (
                <li>
                  {item}
                  <button class="delete" onClick={()=> deleteBadItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Mais ou Menos</h4>
            <input value={newMoreorlessList} onChange={value => setNewMoreorlessList(value.target.value)} type="text"/>
            <button onClick={()=>addMoreorlessList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {moreorlessList.map((item, index) => (
                <li>
                  {item}
                  <button class="delete" onClick={()=> deleteMoreorlessItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Bom</h4>
            <input value={newGoodList} onChange={value => setNewGoodList(value.target.value)} type="text"/>
            <button onClick={()=>addGoodList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {goodList.map((item, index) => (
                <li>
                  {item}
                  <button class="delete" onClick={()=> deleteGoodItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='intern-cicle'>
            <h4>Ótimo</h4>
            <input value={newExcellentList} onChange={value => setNewExcellentList(value.target.value)} type="text"/>
            <button onClick={()=>addExcellentList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {excellentList.map((item, index) => (
                <li>
                  {item}
                  <button class="delete" onClick={()=> deleteExcellentItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
      <div className="reset-hours">
        <label htmlFor="">Horas semanais:</label>
        <input className="input-hours" type="number" min="6" max="168"/>
        <p>
          <button className="primary-button" >Criar Ciclo</button>
          <button id="reset-button" className="primary-button" onClick={()=> resetMatter()}>Resetar</button></p>
      </div>
    </div>
    
  )

  

  function addNewTerrible() {
    setTerribleList([...terribleList, newTerrible]);
    setNewTerrible("")
  }

  function deleteTerribleItem(index) {
    let tmpArray = [...terribleList]
    tmpArray.splice(index, 1)

    setTerribleList(tmpArray)
  }

  function addNewBadList() {
    setBadList([...badList, newBadList]);
    setNewBadList("")
  }

  function deleteBadItem(index) {
    let tmpArray = [...badList]
    tmpArray.splice(index, 1)

    setBadList(tmpArray)
  }


  function addMoreorlessList() {
    setMoreorlessList([...moreorlessList, newMoreorlessList]);
    setNewMoreorlessList("")
  }

  function deleteMoreorlessItem(index) {
    let tmpArray = [...moreorlessList]
    tmpArray.splice(index, 1)

    setMoreorlessList(tmpArray)
  }

  function addGoodList() {
    setGoodList([...goodList, newGoodList]);
    setNewMoreorlessList("")
  }

  function deleteGoodItem(index) {
    let tmpArray = [...goodList]
    tmpArray.splice(index, 1)

    setGoodList(tmpArray)
  }

  function addExcellentList() {
    setExcellentList([...excellentList, newExcellentList]);
    setNewExcellentList("")
  }

  function deleteExcellentItem(index) {
    let tmpArray = [...excellentList]
    tmpArray.splice(index, 1)

    setExcellentList(tmpArray)
  }

  function resetMatter(){
      setTerribleList([])
      setBadList([])
      setMoreorlessList([])
      setGoodList([])
      setExcellentList([])
  }



}

export default Makecicle
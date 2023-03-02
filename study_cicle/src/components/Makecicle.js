import { useState, useContext } from "react"
import { CicleContext }   from "../context/CicleContext"
import React from 'react'


import "./Makecicle.css"

const Makecicle = () => {

  const contextValue = useContext(CicleContext)

  console.log(contextValue.badList)

 

  let [hours, setHours] = useState([])
  
  function calculationHours(){
    let total = contextValue.terribleList.length * 5 + contextValue.badList.length * 4 +contextValue.moreorlessList.length * 3
    + contextValue.goodList.length * 2 + contextValue.excellentList.length * 1

    let totalHours = hours/total


    return (totalHours)
}


/*Functions of list*/

function addNewTerrible() {
  contextValue.setTerribleList([...contextValue.terribleList, contextValue.newTerrible]);
  contextValue.setNewTerrible("")
}

function deleteTerribleItem(index) {
  let tmpArray = [...contextValue.terribleList]
  tmpArray.splice(index, 1)

  contextValue.setTerribleList(tmpArray)
}

function addNewBadList() {
  contextValue.setBadList([...contextValue.badList, contextValue.newBadList]);
  contextValue.setNewBadList("")
}

function deleteBadItem(index) {
  let tmpArray = [...contextValue.badList]
  tmpArray.splice(index, 1)

  contextValue.setBadList(tmpArray)
}


function addMoreorlessList() {
  contextValue.setMoreorlessList([...contextValue.moreorlessList, contextValue.newMoreorlessList]);
  contextValue.setNewMoreorlessList("")
}

function deleteMoreorlessItem(index) {
  let tmpArray = [...contextValue.moreorlessList]
  tmpArray.splice(index, 1)

  contextValue.setMoreorlessList(tmpArray)
}

function addGoodList() {
  contextValue.setGoodList([...contextValue.goodList, contextValue.newGoodList]);
  contextValue.setNewMoreorlessList("")
}

function deleteGoodItem(index) {
  let tmpArray = [...contextValue.goodList]
  tmpArray.splice(index, 1)

  contextValue.setGoodList(tmpArray)
}

function addExcellentList() {
  contextValue.setExcellentList([...contextValue.excellentList, contextValue.newExcellentList]);
  contextValue.setNewExcellentList("")
}

function deleteExcellentItem(index) {
  let tmpArray = [...contextValue.excellentList]
  tmpArray.splice(index, 1)

  contextValue.setExcellentList(tmpArray)
}

function resetMatter(){
  contextValue.setTerribleList([])
  contextValue.setBadList([])
  contextValue.setMoreorlessList([])
  contextValue.setGoodList([])
  contextValue.setExcellentList([])
}
  
  return (
    <div className='makecicle'>
      <div className='flex-cicle'>
        <div className="cicle">
          <div className='intern-cicle'>
            <h4>Péssimo</h4>
            <input value={contextValue.newTerrible} onChange={value => contextValue.setNewTerrible(value.target.value)} type="text"/>
            <button onClick={()=>addNewTerrible()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {contextValue.terribleList.map((item, index) => (
                <li>
                  <p>{item}</p> 
                  <button class="delete" onClick={()=> deleteTerribleItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cicle">
          <div className='intern-cicle'>
            <h4>Ruim</h4>
            <input value={contextValue.newBadList} onChange={value => contextValue.setNewBadList(value.target.value)} type="text"/>
            <button onClick={()=>addNewBadList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
            {contextValue.badList.map((item, index) => (
                <li>
                  <p>{item}</p> 
                  <button class="delete" onClick={()=> deleteBadItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cicle">
          <div className='intern-cicle'>
            <h4>Mais ou Menos</h4>
            <input value={contextValue.newMoreorlessList} onChange={value => contextValue.setNewMoreorlessList(value.target.value)} type="text"/>
            <button onClick={()=>addMoreorlessList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {contextValue.moreorlessList.map((item, index) => (
                <li>
                  <p>{item}</p> 
                  <button class="delete" onClick={()=> deleteMoreorlessItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cicle">
          <div className='intern-cicle'>
            <h4>Bom</h4>
            <input value={contextValue.newGoodList} onChange={value => contextValue.setNewGoodList(value.target.value)} type="text"/>
            <button onClick={()=>addGoodList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {contextValue.goodList.map((item, index) => (
                <li>
                  <p>{item}</p> 
                  <button class="delete" onClick={()=> deleteGoodItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cicle">
          <div className='intern-cicle'>
            <h4>Ótimo</h4>
            <input value={contextValue.newExcellentList} onChange={value => contextValue.setNewExcellentList(value.target.value)} type="text"/>
            <button onClick={()=>addExcellentList()}>Adicionar</button>
          </div>
          <div className='list-cicle'>
            <ul className="list">
              {contextValue.excellentList.map((item, index) => (
                <li>
                  <p>{item}</p>
                  <button class="delete" onClick={()=> deleteExcellentItem(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
      <div className="reset-hours">
        <label htmlFor="">Horas semanais:</label>
        <input value={hours} onChange={value => setHours(value.target.value)} className="input-hours" type="number" min="6" max="168"/>
        <p>
          <button className="primary-button" onClick={calculationHours()} >Criar Ciclo</button>
          <button id="reset-button" className="primary-button" onClick={()=> resetMatter()}>Resetar</button></p>
      </div>
    </div>
    
  )

}

export default Makecicle
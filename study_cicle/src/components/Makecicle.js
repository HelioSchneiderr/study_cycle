import { useContext } from "react"
import { CicleContext }   from "../context/CicleContext"
import React from 'react'


import "./Makecicle.css"

const Makecicle = ({ cicleStudy }) => {

  const contextValue = useContext(CicleContext)

  console.log(contextValue.badList)



/*Functions of list*/

function addNewTerrible() {
  if (contextValue.newTerrible.length >= 3) {
    contextValue.setTerribleList([...contextValue.terribleList, contextValue.newTerrible]);
    contextValue.setNewTerrible("")
  }else{
    alert("O conteúdo não pode está vazio ou ter menos de duas letras;")
  }
}

function deleteTerribleItem(index) {
  let tmpArray = [...contextValue.terribleList]
  tmpArray.splice(index, 1)

  contextValue.setTerribleList(tmpArray)
}

function addNewBadList() {
  if (contextValue.newBadList.length >= 3) {
    contextValue.setBadList([...contextValue.badList, contextValue.newBadList]);
    contextValue.setNewBadList("")
  }else{
    alert("O conteúdo não pode está vazio ou ter menos de duas letras;")
  }
}

function deleteBadItem(index) {
  let tmpArray = [...contextValue.badList]
  tmpArray.splice(index, 1)

  contextValue.setBadList(tmpArray)
}

console.log(contextValue.hours)

function addMoreorlessList() {
  if (contextValue.newMoreorlessList.length >= 3) {
    contextValue.setMoreorlessList([...contextValue.moreorlessList, contextValue.newMoreorlessList]);
    contextValue.setNewMoreorlessList("")
  }else{
    alert("O conteúdo não pode está vazio ou ter menos de duas letras;")
  }
}

function deleteMoreorlessItem(index) {
  let tmpArray = [...contextValue.moreorlessList]
  tmpArray.splice(index, 1)

  contextValue.setMoreorlessList(tmpArray)
}

function addGoodList() {
  if (contextValue.newGoodList.length >= 3) {
    contextValue.setGoodList([...contextValue.goodList, contextValue.newGoodList]);
    contextValue.setNewGoodList("")
  }else{
    alert("O conteúdo não pode está vazio ou ter menos de duas letras;")
  }
}

function deleteGoodItem(index) {
  let tmpArray = [...contextValue.goodList]
  tmpArray.splice(index, 1)

  contextValue.setGoodList(tmpArray)
}

function addExcellentList() {
  if (contextValue.newExcellentList.length >= 3) {
    contextValue.setExcellentList([...contextValue.excellentList, contextValue.newExcellentList]);
    contextValue.setNewExcellentList("")
  }else{
    alert("O conteúdo não pode está vazio ou ter menos de duas letras;")
  }
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
            <input value={contextValue.newBadList} onChange={value => contextValue.setNewBadList(value.target.value)} type="text" pattern=""/>
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
        <input value={contextValue.hours} onChange={event => {
          const value = parseInt(event.target.value, 10); // converte para inteiro decimal
          const minValue = 6;
          const maxValue = 168;
          const newValue = Math.max(minValue, Math.min(maxValue, value)); // limita o valor mínimo e máximo
        
          contextValue.setHours(newValue);
      }} className="input-hours" type="number" min="6" max="168"/>
        <p>
          <button className="primary-button" onClick={ cicleStudy }>Criar Ciclo</button>
          <button id="reset-button" className="primary-button" onClick={()=> resetMatter()}>Resetar</button></p>
      </div>
    </div>
    
  )

}

export default Makecicle
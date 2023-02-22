import React from 'react'
import "./Apresentation.css"


const Apresentation = ({ makeCicle }) => {
  return (
    <div className='apresentation'>
        <div className='apresentation-text'>
            <h1>Melhor solução para os seus estudos</h1>
            <p>Você não consegue focar nos seus estudos, então está é a sua solução para se tornar um mestre em apreender</p>
            <button onClick={makeCicle}>Fazer ciclo</button>
        </div>
        <div>
            <img src="https://www.mindex.com/hs-fs/hubfs/Case%20Study%20Icon.png?width=300&height=246&name=Case%20Study%20Icon.png" alt="" />
        </div>
    </div>
  )
}

export default Apresentation
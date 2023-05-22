import React from 'react'

import "./Whatis.css"

const Whatis = () => {
  return (
    <div className='what-is'>
      <div className='what-is-text'>
        <h2 className='what-is-text-h2'>O que é um ciclo de estudos?</h2>
        <p className='what-is-text-p'>
Um ciclo de estudos é um plano estruturado de estudos com o objetivo de alcançar metas de aprendizagem dentro de um período determinado. É importante dividir o conteúdo em blocos menores para estudar de forma eficiente. Ao criar um ciclo de estudos, é necessário levar em consideração os objetivos de aprendizagem e os recursos disponíveis. </p>

        <h2 className='what-is-text-h1'>Como este ciclo que criamos?</h2>
        <p className='what-is-text-p'>O ciclo de estudos do canal Matemática em Evidência foi automatizado em um site que se adapta ao horário de estudo e é baseado em períodos de tempo. Cada período representa uma hora de estudo, e o usuário divide suas matérias de estudo em cinco níveis de conhecimento para alcançar seus objetivos de aprendizagem.</p>
        <button className='primary-button' >Fazer Ciclo</button>
      </div>
      <div>
        <img src="https://usp.com.pk/wp-content/uploads/2020/01/illustration19.png" alt="" width="500px" heigth="500px"/>
      </div>  
    </div>
  )
}

export default Whatis
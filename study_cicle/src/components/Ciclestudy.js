import React from 'react'
import { useContext } from "react"
import { CicleContext }   from "../context/CicleContext"

import "./Ciclestudy.css"

const Ciclestudy = () => {

  const { terribleList, badList, moreorlessList, goodList, excellentList, hours } = useContext(CicleContext);

  const total = terribleList.length * 5 + badList.length * 4 + moreorlessList.length * 3
    + goodList.length * 2 + excellentList.length * 1;
  const totalHours = hours / total;

  const renderSquare = (count) => {
    const squares = [];
    for (let i = count * totalHours; i >= 0; i--) {
      squares.push(<input className='square-radio' type="checkbox" />);
    }
    return squares;
  };

  return (
    <>
      <div>
        <div>
          <h4>Dificuldade Péssimo</h4>
          <ul>
            {terribleList.map((item) => (
              <li key={item}>
                <p>
                  {item}
                  {renderSquare(5)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Dificuldade Ruim</h4>
          <ul>
            {badList.map((item) => (
              <li key={item}>
                <p>
                  {item}
                  {renderSquare(4)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Dificuldade Mais ou Menos</h4>
          <ul>
            {moreorlessList.map((item) => (
              <li key={item}>
                <p>
                  {item}
                  {renderSquare(3)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Dificuldade Bom</h4>
          <ul>
            {goodList.map((item) => (
              <li key={item}>
                <p>
                  {item}
                  {renderSquare(2)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Dificuldade Ótimo</h4>
          <ul>
            {excellentList.map((item) => (
              <li key={item}>
                <p>
                  {item}
                  {renderSquare(1)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ciclestudy;
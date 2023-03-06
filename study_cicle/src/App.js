
import { useState} from "react"
import { CicleProvider } from "./context/CicleContext";

import Header from './components/Header';
import Apresentation from './components/Apresentation';
import Makecicle from "./components/Makecicle";
import Whatis from "./components/Whatis";
import Ciclestudy from "./components/Ciclestudy";


import './App.css';


function App() {

  const stages = [
    {id: 1, name: "init"},
    {id: 2, name: "what-is"},
    {id: 3, name: "makecicle"},
    {id: 4, name: "cicleStudy"}
  ];

  const [stage, setStage] = useState(stages[0].name)


  const homeLink = ()=>{
    setStage(stages[0].name)
  }

  const whatIs = ()=>{
    setStage(stages[1].name)
  }

  const makeCicle = ()=>{
    setStage(stages[2].name)
  }

  const cicleStudy = ()=>{
    setStage(stages[3].name)
  }

  return (
      <CicleProvider>
      <div>
      <Header 
        makeCicle={ makeCicle } 
        homeLink={ homeLink } 
        whatIs={ whatIs }
      ></Header>

      {/*stage changes*/}
      {stage === "init" && <Apresentation makeCicle={ makeCicle }></Apresentation> }
      {stage === "what-is" && <Whatis></Whatis>}
      {stage === "makecicle" && <Makecicle cicleStudy={ cicleStudy }></Makecicle> }
      {stage === "cicleStudy" && <Ciclestudy></Ciclestudy>}
     </div>
     </CicleProvider>
    

  );
}

export default App;


/*
1 - Usuário escolher as matérias
2 - Dividir a matéria por Ranking (Péssimo, Ruim, + ou -, Bom, Ótimo)
3 - cada matéria terá seu multiplo, 5x, 4x, 3x...
4 - Pegar horas totais disponiveis na semana
5 - Dividi a quantidade de horas por quantidade de x
6 - Multiplicar o resultdo da divisão por quantidade de x de cada materia, gerando a quantidade de quadrados

*/
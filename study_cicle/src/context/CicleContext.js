import React from "react";
import { useState } from "react"

export const CicleContext = React.createContext({});

export const CicleProvider = (props) => {
  
  let [test, setTest] = useState(["Opa", "Brasil"]);
  let [terribleList, setTerribleList] = useState(["Opa", "Brasil"]);
  let [badList, setBadList] = useState(["Opa", "Brasil"]);
  let [moreorlessList, setMoreorlessList] = useState(["Opa", "Brasil"]);
  let [goodList, setGoodList] = useState(["Opa", "Brasil"]);
  let [excellentList, setExcellentList] = useState(["Opa", "Brasil"]);
  let [newTerrible, setNewTerrible] = useState("");
  let [newBadList, setNewBadList] = useState("");
  let [newMoreorlessList, setNewMoreorlessList] = useState("");
  let [newGoodList, setNewGoodList] = useState("");
  let [newExcellentList, setNewExcellentList] = useState("");
  
  const cicleList = {
    value: terribleList, setTerribleList,
    badList, setBadList, moreorlessList, setMoreorlessList,
    goodList, setGoodList, excellentList, setExcellentList,
    test, setTest, newTerrible, setNewTerrible, newMoreorlessList, setNewMoreorlessList,
    newBadList, setNewBadList, newGoodList, setNewGoodList, 
    newExcellentList, setNewExcellentList

  }

  return (
    <CicleContext.Provider value={cicleList}>
      {props.children}
    </CicleContext.Provider>
  );
}

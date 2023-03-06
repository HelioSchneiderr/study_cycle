import React from "react";
import { useState } from "react"

export const CicleContext = React.createContext({});

export const CicleProvider = (props) => {
  
 
  let [terribleList, setTerribleList] = useState([]);
  let [badList, setBadList] = useState([]);
  let [moreorlessList, setMoreorlessList] = useState([]);
  let [goodList, setGoodList] = useState([]);
  let [excellentList, setExcellentList] = useState([]);
  let [newTerrible, setNewTerrible] = useState("");
  let [newBadList, setNewBadList] = useState("");
  let [newMoreorlessList, setNewMoreorlessList] = useState("");
  let [newGoodList, setNewGoodList] = useState("");
  let [newExcellentList, setNewExcellentList] = useState("");

  let [hours, setHours] = useState()
  
  const cicleList = {
    terribleList, setTerribleList,
    badList, setBadList, moreorlessList, setMoreorlessList,
    goodList, setGoodList, excellentList, setExcellentList,
    newTerrible, setNewTerrible, newMoreorlessList, setNewMoreorlessList,
    newBadList, setNewBadList, newGoodList, setNewGoodList, 
    newExcellentList, setNewExcellentList, hours, setHours

  }

  return (
    <CicleContext.Provider value={cicleList}>
      {props.children}
    </CicleContext.Provider>
  );
}

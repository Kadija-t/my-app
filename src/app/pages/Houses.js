import React from "react"
import House from '../data/logements.json'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
 
// state : getting place infos (id..) //filter house by id   //if none found then message //else display info (title...)

 const  Houses = () => {
   const {id} = useParams() 
   const selectedHouse = House.find(house => house.id === id);

    if (!selectedHouse) {
      return <p>Logement non trouvé pour l'ID {id}</p>
    }

  return (
    <>
        <Header/> 
        <h1>{selectedHouse.title}</h1>
    </>
  );
};

export default Houses;

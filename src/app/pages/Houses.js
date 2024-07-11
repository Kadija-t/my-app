import React from "react"
import House from '../data/logements.json'
import { useParams } from 'react-router-dom'

const  Houses = () => {

  // state

  //getting place infos (id..) 

   const {id} = useParams()  

   //filter house by id
   const selectedHouse = House.find(house => house.id === id);
   //if none found then message
   if (!selectedHouse) {
    return <p>Logement non trouvé pour l'ID {id}</p>
   }
   //else display info (title...)
  return (
    <>
      PAGE HOUSES
        <h1>{selectedHouse.title}</h1>
    </>
  );
};

export default Houses;

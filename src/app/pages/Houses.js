import React, { useEffect } from "react"
import Header from '../components/Header'
import House from '../data/logements.json'
import Slideshow from "../components/Slideshow"
import { useParams, useNavigate } from 'react-router-dom'

 
// state : getting place infos (id..) //filter house by id   //if none found then message //else display info (title...)

// Vérifier si le logement n'existe pas retourner sur la page 404
// Utilisation de useState / useEffect
 const  Houses = (pictures) => {
   const {id} = useParams() ; 
   const navigate = useNavigate();

   const selectedHouse = House.find(house => house.id === id);
 

  //  useEffect(() =>{
  //   const imageHouse = selectedHouse;
  //   selectedHouse(imageHouse)
  //  });;

    if (!selectedHouse) {
      navigate(`/error`); ;
      return null
      //<p>Logement non trouvé pour l'ID {id}</p>
     
    }

  return (
    <>
    <main>
        <Header/> 
        <div className="slide-container">
        <Slideshow images={selectedHouse.pictures}></Slideshow> 
        </div>
        <h1 className="house-tile">{selectedHouse.title}</h1>
        <h3 >{selectedHouse.location}</h3>
      </main>
    </>
  );
};

export default Houses;

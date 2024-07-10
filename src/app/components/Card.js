
    /*************************************************************************************************************************
         
                    Etapes à faire dans le header

1. Card qui prend le titre photo du logement
récupération des infos => OK
style sass => A faire   

    **************************************************************************************************************************/

  import React from 'react'
  import House from '../data/logements.json'
  
  function Card() {
    return (
      <>
    <div className="Info">
        {
            House.map (house => {
                return(
                    <div className="box" key={ house.id }>
                        <strong>{ house.title }</strong>
                        <img src={ house.cover } alt =""/>
                    </div>
                )
            })
        }
  </div>
      </>
    );
  }
  
  export default Card;
  
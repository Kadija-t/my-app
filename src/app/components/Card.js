/*************************************************************************************************************************
         
                    Etapes à faire dans le header

1. Card qui prend le titre photo du logement
récupération des infos => OK
style sass => A faire   

    **************************************************************************************************************************/

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({Houses}) => {
  //state
  //1. declare navigate const to enable redirect
  const navigate = useNavigate();

  //comportement

  //1. enable redirect to the house to the click
  const handleClick = (houseId) => {
    // 2.prop the id

    navigate(`/houses/${houseId}`);
  };
  return (
    <>
      <div className="Info">
        {Houses.map((house) => {
          console.log(house.title)
          return (
           // <Link to={`/houses/${house.id}`} key={house.id}>
            <div
              className="box"
              key={house.id}
            //  onClick={() => handleClick(house.id)}
              style={{
                backgroundImage: `url(${house.cover})`,
              }}
            >
              <h3>{house.title}</h3>
            </div>
           // </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card;

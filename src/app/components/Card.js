
    /*************************************************************************************************************************
         
                    Etapes à faire dans le header

1. Card qui prend le titre photo du logement
récupération des infos => OK
style sass => A faire   

    **************************************************************************************************************************/

  import React from 'react'
  import House from '../data/logements.json'
 //import { Link } from 'react-router-dom'
  import { useNavigate } from 'react-router-dom'
  

    //state
 //   let [house, setHouse] =  useState (false) ;

    //comportements
   
    // function handleClick(useState) {
    //     if (useState === true){
    //         <Link></Link>
    //     }
    //     alert(`Voulez-vous allez sur la page du logement: ${title}`)
    // }
    //reder

  const Card = () => { 
    const navigate = useNavigate();
    return (
      <>
        <div className="Info">
          {House.map (house => {
                return(
                    <div className="box" key={ house.id} onClick={() => {navigate ("/houses");}}
                     style = {{
                        backgroundImage: `url(${house.cover})`
                    } }>
                        <h3>{ house.title }</h3><br></br>
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
  
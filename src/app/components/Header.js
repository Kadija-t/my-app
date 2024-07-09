import { NavLink } from 'react-router-dom'
import logo from '../assets/kasa_red.svg'
const Header = () => {
    const isActive = (e) => {
    return e.isActive;
}
  return (


  /***********************************************************************************************************************************
                                     
                                                Etapes à faire dans le header

                                1. LOGO côté gauche           2.navBar coté droit                       
                                                        ( bonne voie => à faire sass)

   ************************************************************************************************************************************/

    <>


<header>
<img src={logo} alt='logo-white' className='white-logo' />
<div id='nav'>
    <NavLink className={(isActive)} to='/'> Accueil</NavLink>
    <NavLink className={(isActive)} to='/about'> A Propos</NavLink>
    <NavLink className={(isActive)} to='/houses'> Logement</NavLink>
    <NavLink className={(isActive)} to='/error'> Erreur</NavLink>
</div>
</header>
    </>
  );
};

export default Header;

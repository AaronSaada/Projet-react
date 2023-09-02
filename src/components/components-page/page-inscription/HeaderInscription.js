import { useState } from 'react'
import { Link } from 'react-router-dom'
 
export default function HeaderConnexion(){

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
      if(!isMenuClicked){
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }else{
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }

      setIsMenuClicked(!isMenuClicked)
  }


  return(
    <div className="sign-up-header-container">
      <header>
            <div className='header-logo'>
                <Link to='/' id='header-title-logo'>Connectify</Link>
                <ul className="desktop-nav">
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/Connexion'>Connexion</Link></li>
                    <li><Link to='/Inscription'>Inscription</Link></li>
                </ul>
            </div>
            <div id="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
            <div className={menu_class}>
                <div className="menu-container">
                    <div className="menu-title-container">
                        <p>Connectify</p>
                    </div>
                    <ul className="burger-nav">
                        <li><Link to='/'>Accueil</Link></li>
                        <li><Link to="/Connexion">Connexion</Link></li>
                        <li><Link to="/Inscription">Inscription</Link></li>
                    </ul>
                </div>
                
            </div>
        </header>
    </div>
  )
  
}
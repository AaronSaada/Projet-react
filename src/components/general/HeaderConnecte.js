import { useState } from "react"
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import { auth } from '../../api/firebase-config'

const HeaderConnecte = () => {

  const navigate = useNavigate()

  const logOut = async () => {

    try{

      await signOut(auth)
      navigate('/Connexion')

    }catch{

      alert("Pour une certaine raison nous ne pouvons pas vous déconnecter, veuillez vérifier votre connexion internet puis réessayez.")

    }

  }
    
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
        <header>
            <div className='header-logo'>
                <Link to='/Profil' id='header-title-logo'>Connectify</Link>
                <ul className="desktop-nav">
                    <li><Link to='/Profil'>Profil</Link></li>
                    <li><Link to='/ContactProfil'>Contact</Link></li>
                    <li><Link onClick={logOut}>Déconnexion</Link></li>
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
                        <li><Link to='/Profil'>Profil</Link></li>
                        <li><Link to="/ContactProfil">Contact</Link></li>
                        <li><Link onClick={logOut}>Déconnexion</Link></li>
                    </ul>
                </div>
                
            </div>
        </header>
    )
}

export default HeaderConnecte;
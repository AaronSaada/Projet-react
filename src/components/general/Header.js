import React, {useState} from "react"

const Header = () => {
    
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
            <div className='headerLogo'>
                <a>Connectify</a>
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
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Connexion</a></li>
                        <li><a href="#">Inscription</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
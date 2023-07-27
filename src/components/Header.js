const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuNav = document.querySelector(".burger-menu-nav");

burgerMenu.addEventListener("click", () => {
  burgerMenuNav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenu.style.zIndex = "101";
  burgerMenu.classList.toggle("burger-menu-fixed");
})

export default function Header(){
    return(
        <header>
            <div className='headerLogo'>
                <a>Connectify</a>
                <div className="burger-menu">
                    <div className="barre"></div>
                    <div className="barre"></div>
                    <div className="barre"></div>
                </div>
            </div>
            <div className="burger-menu-nav">
                <div className="burger-menu-nav-flex">
                    <div className="image-burger-menu-open">
                        <img src="images/logo-ekea.PNG" alt="Logo E-kea"/>
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
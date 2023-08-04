

const Header = () => {
    const handleClick = () => {
        this.classList.toggle("active");
        this.style.zIndex = "101";
        this.classList.toggle("burger-menu-fixed");
    }

    const changeStyle = () => {
        this.classList.toggle("active");
    }
    


    return(
        <header>
            <div className='headerLogo'>
                <a>Connectify</a>
            </div>
            <div id="burger-menu" onClick={handleClick}>
                <div className="barre"></div>
                <div className="barre"></div>
                <div className="barre"></div>
            </div>
            <div id="burger-menu-nav" onClick={changeStyle}>
                <div id="burger-menu-nav-flex">
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="inspiration.html">Inspiration</a></li>
                        <li><a href="produits.html">Produits</a></li>
                        <li><a href="services.html">Nos Services</a></li>
                        <li><a href="contact.html">Nous Contacter</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
import '../styles/header.css'

export default function Header(){
    return(
        <header>
            <div className='headerLogo'>
                <a>Connectify</a>
                <div className='burgerMenu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    )
}
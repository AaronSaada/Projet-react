import PhotoDeProfil from '../../../images/photo-de-profil.png'

export default function MainProfil(){
    return(
        <>
            <div id='profile-informations-container'>
                <div id='profile-informations'>
                    <img src={ PhotoDeProfil } alt='Photo de profil'/>
                    <p id='profile-lastname'>Nom</p>
                    <p id='profile-firstname'>Prénom</p>
                </div>
            </div>
            <ul id='profile-section-nav'>
                <li>All</li>
                <li>Walls</li>
                <li>Gallery</li>
                <li>Video</li>
                <li>Music</li>
            </ul>
        </>
    )
    
}
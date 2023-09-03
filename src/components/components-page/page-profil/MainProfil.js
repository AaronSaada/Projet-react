import PhotoDeProfil from '../../../images/photo-de-profil.png'
import PhotoGallerieUn from '../../../images/pexels-anna-shvets-4315839 1.png'
import PhotoGallerieDeux from '../../../images/pexels-anna-shvets-4315839 2.png'
import PhotoGallerieTrois from '../../../images/pexels-anna-shvets-4315839 3.png'
import PhotoGallerieQuatre from '../../../images/pexels-anna-shvets-4315839 4.png'

export default function MainProfil(){

    return(
        <div id='main-profile'>
            <div id='profile-informations-container'>
                <div id='profile-informations'>
                    <img src={ PhotoDeProfil } alt='Photo de profil'/>
                    <p id='profile-lastname'>Nom</p>
                    <p id='profile-firstname'>Prénom</p>
                </div>
            </div>
            <ul id='profile-section-nav'>
                <li>All</li>
                <li>Wall</li>
                <li>Gallery</li>
                <li>Video</li>
                <li>Music</li>
            </ul>
            <div id='profile-wall'>
                <h2>My wall</h2>
                <div id='profile-wall-render'>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div id='profile-wall-sender'>

                </div>
            </div>
            <div id='profile-gallery'>
                <h2>Gallery</h2>
                <div id='profile-gallery-grid'>
                    <img src={ PhotoGallerieUn }/>
                    <img src={ PhotoGallerieDeux }/>
                    <img src={ PhotoGallerieTrois }/>
                    <img src={ PhotoGallerieQuatre }/>
                </div>
            </div>
            <div id='profile-video'>
                <h2>Video</h2>
                <div id='profile-video-item'>   
                    <iframe src="https://www.youtube.com/embed/K_EVuLegRZ0" title="The only tags you need when first learning HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div id='profile-music'>
                <h2>Music</h2>
                <div id='profile-music-flex'>
                    <div id='profile-music-first'>
                        <div id='profile-music-first-image' className='profile-music-image'>
                            <img/>
                        </div>
                        <div>
                            <p></p>
                            <div></div>
                        </div>
                    </div>
                    <div id='profile-music-second' className='profile-music-image'>
                        <div></div>
                        <div>
                            <p></p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
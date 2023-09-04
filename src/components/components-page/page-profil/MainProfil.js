import PhotoDeProfil from '../../../images/photo-de-profil.png'
import ProfileTitle from '../../ProfileTitle.js'
import Homer from '../../../images/homer 1.png'
import { useState, useEffect } from 'react'
import { storage } from '../../../api/firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


export default function MainProfil(){

    // Créer une fonction setImageUpload et une constante imageUpload
    const [imageUpload, setImageUpload] = useState(null);

    // Créer une fonction setImageList (Cette fonction comporte un tableau) et une constante imageList
    const [imageList, setImageList] = useState([]);

    // Récupère toutes les images uploadées dans le dossier images dans le storage de Firebase
    const imageListRef = ref(storage, "images/")

    // Constante permettant l'upload d'images
    const uploadImage = () => {

        // Si aucune image n'a été sélectionnée, on ne fait rien
        if(imageUpload == null) return;

        //Créer un dossier images dans lequel les images seront uploadées.
        // Lors de l'upload, on changera le nom du fichier par son nom original suivi d'une chaîne de caractère aléatoire puis '.png' 
        const imageRef = ref(storage, `images/${imageUpload.name + v4() + '.png'}`);

        // Donne la référence où doit être uploadée le fichier puis l'image à uploadée.
        uploadBytes(imageRef, imageUpload).then((snapshot) => {

            // Une fois la fonction ci-dessus complétée
            // Récupère l'URL du nouvel élément uploadé et permet de l'afficher sans avoir à recharger la page.
            getDownloadURL(snapshot.ref).then((url) => {

                // On ajoute chaque image via son URL à la liste.
                setImageList((prev) => [...prev, url])

            })

        });
    }

    // Dès le chargement de la page
    useEffect(() => {
        // On met dans une liste la référence du lien des images.
        listAll(imageListRef).then((response) => {
            // Après avoir complété la requête ci-dessus.
            // On passe sur chaque éléments.
            response.items.forEach((item) => {
                // On récupère chaque URL de chaque image uploadée.
                getDownloadURL(item).then((url) => {
                    // On ajoute chaque image via son URL à la liste.
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])


    return(
        <div id='main-profile'>
            <div id='profile-informations-container'>
                <div id='profile-informations'>
                    <div id='profile-image'>
                        <img src={PhotoDeProfil} alt='Photo de profil'/>
                    </div>
                    
                    <p id='profile-lastname'>Nom</p>
                    <p id='profile-firstname'>Prénom</p>
                </div>
            </div>
            <div id='profile-main-flex'>
                <ul id='profile-section-nav'>
                    <li>All</li>
                    <li>Wall</li>
                    <li>Gallery</li>
                    <li>Video</li>
                    <li>Music</li>
                </ul>
                <div id='profil-post-section'>
                    <div id='profile-wall'>
                        <ProfileTitle>My wall</ProfileTitle>
                        <div id='profile-wall-render'>
                            <div id='profile-wall-render-message1'>
                                <p>Le Rap US >>> Rap FR</p>
                            </div>
                            <div id='profile-wall-render-message2'>
                                <img src={Homer}/>
                                <p>J'aime le classique...</p>
                            </div>
                        </div>
                        <div id='profile-wall-sender'>
                            <input type='text' placeholder='Ecrivez un message...'/>
                            <button id='wall-file-upload'>📁</button>
                            <button id='wall-file-sender'>🏹</button>
                        </div>
                    </div>
                    <div id='profile-gallery'>
                        <ProfileTitle>Gallery</ProfileTitle>
                        <div id="image-uploader">
                            <input 
                            type='file' 
                            onChange={(event) => {
                                // Charge l'image sélectionnée par l'utilisateur
                                setImageUpload(event.target.files[0])
                            }}
                            className='browse-image'
                            />
                            <button onClick={uploadImage} className='add-image'>Ajouter une image à votre gallerie</button>
                        </div>
                        

                        <div id='profile-gallery-flex'>
                            {imageList.map((url) =>{
                                return <img src={url}/>
                            })}
                        </div>
                    </div>
                    <div id='profile-video'>
                        <ProfileTitle>Video</ProfileTitle>
                        <div id='profile-video-item'>   
                            <iframe src="https://www.youtube.com/embed/K_EVuLegRZ0" title="The only tags you need when first learning HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div id='profile-music'>
                        <ProfileTitle>Music</ProfileTitle>
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
                
            </div>
            
        </div>
            
    )
    
}
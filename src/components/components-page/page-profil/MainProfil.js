import PhotoDeProfil from '../../../images/photo-de-profil.png'
import ProfileTitle from '../../ProfileTitle.js'
import { useState, useEffect } from 'react'
import { storage, db, auth } from '../../../api/firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


export default function MainProfil(){

    // Créer une fonction setImageUpload et une constante imageUpload
    const [imageUpload, setImageUpload] = useState(null);
    // Créer une fonction setImageList (Cette fonction comporte un tableau) et une constante imageList
    const [imageList, setImageList] = useState([]);
    // Récupère toutes les images uploadées dans le dossier images dans le storage de Firebase
    const imageListRef = ref(storage, "images/")

    // Créer une fonction setImageUpload et une constante imageUpload
    const [videoUpload, setVideoUpload] = useState(null);
    // Créer une fonction setImageList (Cette fonction comporte un tableau) et une constante imageList
    const [videoList, setVideoList] = useState([]);
    // Récupère toutes les images uploadées dans le dossier images dans le storage de Firebase
    const videoListRef = ref(storage, "images/")

    // Créer une fonction setPostText permettant de modifier la constante postText
    const [postText, setPostText] = useState("");
    // On attribut à la constante postsCollectionRef le chemin vers la collection "messages" dans la db
    const postsCollectionRef = collection(db, "messages")
    // Fonction asynchrone permettant de créer un post dans la base de données
    const createPost = async () => {
        // On ajoute dans la base de données
        await addDoc(postsCollectionRef, {
            // Le message entré par l'utilisateur
            postText, 
            author: {
                // Le nom du posteur
                name: auth.currentUser.displayName, 
                // L'id du posteur
                id: auth.currentUser.uid 
            }
        });
    };


    const [postLists, setPostsList] = useState([]);
    
    useEffect (() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    })



    // Constante permettant l'upload d'images
    const uploadVideo = () => {

        // Si aucune image n'a été sélectionnée, on ne fait rien
        if(videoUpload == null) return;

        //Créer un dossier images dans lequel les images seront uploadées.
        // Lors de l'upload, on changera le nom du fichier par son nom original suivi d'une chaîne de caractère aléatoire puis '.png' 
        const videoRef = ref(storage, `videos/${videoUpload.name + v4() + '.mp4'}`);

        // Donne la référence où doit être uploadée le fichier puis l'image à uploadée.
        uploadBytes(videoRef, videoUpload).then((snapshot) => {

            // Une fois la fonction ci-dessus complétée
            // Récupère l'URL du nouvel élément uploadé et permet de l'afficher sans avoir à recharger la page.
            getDownloadURL(snapshot.ref).then((url) => {

                // On ajoute chaque image via son URL à la liste.
                setVideoList((prev) => [...prev, url])

            })

        });
    }


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

        listAll(videoListRef).then((response) => {
            // Après avoir complété la requête ci-dessus.
            // On passe sur chaque éléments.
            response.items.forEach((item) => {
                // On récupère chaque URL de chaque image uploadée.
                getDownloadURL(item).then((url) => {
                    // On ajoute chaque image via son URL à la liste.
                    setVideoList((prev) => [...prev, url])
                })
            })
        })
    }, [])

    // Partie Wall

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
                            {postLists.map((post) =>{
                                return <div className='profile-wall-post'>{post.postText}</div>
                            })}
                        </div>
                        <div id='profile-wall-sender'>
                            <input 
                                placeholder='Ecrivez un message'
                                type='text'
                                onChange={(event) => {
                                    setPostText(event.target.value);
                                }}
                            />
                            <label className='custom-wall-file-upload'>
                                📁
                                <input 
                                type='file'
                                />
                            </label>
                            <label className='custom-wall-file-sender'>
                                <button onClick={createPost}>🏹</button>
                            </label>
                        </div>
                    </div>
                    <div id='profile-gallery'>
                        <ProfileTitle>Gallery</ProfileTitle>
                        <div className="file-uploader">
                            <label className='custom-file-upload'>
                                Sélectionnez une image <br/>📁
                                <input 
                                type='file' 
                                onChange={(event) => {
                                    // Charge l'image sélectionnée par l'utilisateur
                                    setImageUpload(event.target.files[0])
                                }}
                                />
                            </label>
                            <button onClick={uploadImage} className='add-file'>Ajouter une image</button>
                        </div>
                        

                        <div className='profile-file-flex'>
                            {imageList.map((url) =>{
                                return <img src={url}/>
                            })}
                        </div>
                    </div>
                    <div id='profile-video'>
                        <ProfileTitle>Video</ProfileTitle>
                        <div className="file-uploader">
                            <label className='custom-file-upload'>
                                Sélectionnez une vidéo <br/>📁
                                <input 
                                    type='file' 
                                    onChange={(event) => {
                                        // Charge l'image sélectionnée par l'utilisateur
                                        setVideoUpload(event.target.files[0])
                                    }}
                                />
                            </label>
                            
                            <button onClick={uploadVideo} className='add-file'>Ajouter une vidéo</button>
                        </div>
                        <div className='profile-file-flex'>
                            {videoList.map((url) =>{
                                return <video 
                                            src={url} 
                                            onMouseOver={event => event.target.play()}
                                            onMouseOut={event => event.target.pause()}
                                            loop>
                                        </video>
                            })}
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
import PhotoDeProfil from '../../../images/photo-de-profil.png'
import ProfileTitle from '../../ProfileTitle.js'
import Homer from '../../../images/homer 1.png'
import { useState, useEffect } from 'react'
import { storage } from '../../../api/firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


export default function MainProfil(){

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if(imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
            
        });
    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
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
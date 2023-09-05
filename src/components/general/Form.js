import BoutonValider from "./BoutonValider"
import ImageContact from "../../images/image-contact.png"
import { useState } from 'react'

export default function Form(){

    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        // Permet de réinitialiser les messages d'erreurs
        setEmailError("");
        setSubjectError("");
        setMessageError("");
    
        // Permet de récupérer la valeur des différents champs du formulaire
        const email = e.target.email.value;
        const sujet = e.target.sujet.value;
        const message = e.target.message.value;
    
        // Oblige l'Email de l'utilisateur à avoir une suite de caractère suivi d'un "@" suivi d'une chaîne de caractère suivi d'un point puis une chaîne de 3 caractères
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        // isValid est true par défaut
        let isValid = true;
    
        // Si l'Email est incorrect
        if (!emailRegex.test(email)) {
            // On affiche le message suivant
            setEmailError("Le format de votre adresse Email est invalide");
            // On applique la valeur false à isValid
            isValid = false;
        }
        
        // Si le sujet est vide ou comporte moins de 3 caractères
        if (sujet.trim() === "" || sujet.length < 3) {
            // On affiche le message d'erreur suivant
            setSubjectError("Sujet vide ou trop court");
            // On applique la valeur false à isValid
            isValid = false;
        }

        // Si le message est vide ou comporte moins de 25 caractères
        if (message.trim() === "" || message.length < 25) {
            // On affiche le message d'erreur suivant
            setMessageError("Message vide ou trop court");
            // On applique la valeur false à isValid
            isValid = false;
        }

        if (isValid) {
            alert("Votre message à bien été envoyé");
            setMessageError("");
            setEmailError("");
            setSubjectError("");
          }
      };

    return(
        <div id='contact-container'>
            <div className='contact-background'>
                <img src={ImageContact} alt='Image Contact'/>
            </div>
            <div className='form-container'>
                <h3>Nous Contacter</h3>
                <form method='post' className='form' onSubmit={handleSubmit}>
                    <div>
                        <label>Email :</label>
                        <input type='text' name='email' id='email' placeholder="Entrez votre email..."/>
                        {emailError && <span className="error-message">{emailError}</span>}
                    </div>
                    
                    <div>
                        <label>Sujet :</label>
                        <input type='text' name='sujet' id='sujet' placeholder="Sujet de votre message..."/>
                        {subjectError && <span className="error-message">{subjectError}</span>}
                    </div>
                    <div>
                        <label>Message :</label>
                        <textarea type='text' name='message' id='message' placeholder="Ecrivez votre message"/>
                        {messageError && <span className="error-message">{messageError}</span>}
                    </div>
                    <BoutonValider/>
                </form>
            </div>
        </div>
        
    )
}
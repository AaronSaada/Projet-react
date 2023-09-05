import Bienvenu from './Bienvenu.js'
import Form from '../../general/Form.js'
import BoutonValider from '../../general/BoutonValider.js'
import { useState } from 'react'


export default function MainIndex(){

  const [emailError, setEmailError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        // Permet de réinitialiser les messages d'erreurs
        setEmailError("");
    
        // Permet de récupérer la valeur des différents champs du formulaire
        const email = e.target.email.value;
    
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

        if (isValid) {
            alert("Votre message à bien été envoyé");
            setEmailError("");
          }
      };

  return(
    <div className='home-page-container'>
      <Bienvenu/>
      <Form/>
      <div className='newsletter-container'>
        <div className='newsletter'>
          <h3>Newsletter</h3>
          <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
          <form className='form' id='newsletter-form' onSubmit={handleSubmit}>
            <input type='text' name='email' id='email' placeholder="Entrez votre email..."/>
            {emailError && <span className="error-message">{emailError}</span>}
            <BoutonValider/>
          </form>
          
        </div>
      </div>
    </div>
  )
}

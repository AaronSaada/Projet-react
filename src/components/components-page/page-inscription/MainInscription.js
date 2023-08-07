import { Link } from 'react-router-dom'

export default function MainConnexion(){
  return(
    <div className='sign-up-section-container'>
        <h2>Inscription</h2>
        <form method='POST' className='form' id='sign-up-form'>
            <div id='sign-up-form-container'>
                <div>
                    <label>Nom :</label>
                    <input type='text' id='name' placeholder='Entrez votre nom...' required/>
                </div>
                <div>
                    <label>Prénom :</label>
                    <input type='text' id='firstname' placeholder='Entrez votre prénom...' required/>
                </div>
                <div>
                    <label>Email :</label>
                    <input type='email' id='email' placeholder='Entrez votre email..' required/>
                </div>
                <div id='gender-container'>
                    <label>Genre :</label>
                    <div id='input-radio-flex'>
                        <div className="input-radio-gender">
                            <input type='radio' id='man'/>
                            <label>Homme</label>
                        </div>
                        <div className="input-radio-gender">
                            <input type='radio' id='woman' />
                            <label>Femme</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input type='password' id='password' placeholder='Entrez votre mot de passe...' required/>
                </div>
                <div>
                    <label>Vérification de mot de passe :</label>
                    <input type='password' id='password-verification' placeholder='Confirmez votre mot de passe..' required/>
                </div>
                <input type='submit' id='inscription' value='Valider'/>
            </div>
        </form>
        <p id='no-account'>Pas de compte ? <Link to='/Connexion' id='sign-in-link'>Inscrivez-vous</Link></p>
    </div>
  )
  
}
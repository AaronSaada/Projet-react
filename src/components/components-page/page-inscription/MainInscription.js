import { Link } from 'react-router-dom'

export default function MainConnexion(){
  return(
    <div className='sign-up-section-container'>
        <h2>Inscription</h2>
        <form method='POST' className='form' id='sign-up-form'>
            <div id='sign-up-form-container'>
                <div id='sign-up-name-flex'>
                    <div>
                        <label>Nom :</label>
                        <input type='text' id='name' placeholder='Entrez votre nom...' required/>
                    </div>
                    <div>
                        <label>Prénom :</label>
                        <input type='text' id='firstname' placeholder='Entrez votre prénom...' required/>
                    </div>
                </div>
                <div>
                    <label>Email :</label>
                    <input type='email' id='email' placeholder='Entrez votre email..' required/>
                </div>
                <div id='gender-container'>
                    <label>Genre :</label>
                    <div id='input-radio-flex'>
                        <div id='input-gender-flex-man'>
                            <div className="input-radio-gender">
                                <input type='radio' name='genre' id='homme'/>
                            </div>
                            <div>
                                <label name='man' id='homme'>Homme</label>
                            </div>
                        </div>
                        <div id='input-gender-flex-woman'>
                            <div className="input-radio-gender">
                                <input type='radio' name='genre' id='femme'/>
                            </div>
                            <div>
                                <label name='woman' id='femme'>Femme</label>
                            </div>
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
        <p id='no-account'>Déjà membre ? <Link to='/Connexion' id='sign-in-link'>Connectez-vous</Link></p>
    </div>
  )
  
}
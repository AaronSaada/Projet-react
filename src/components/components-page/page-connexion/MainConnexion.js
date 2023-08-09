import { Link } from 'react-router-dom'

export default function MainConnexion(){
    return(
        <div className='connection-section-container'>
            <h2>Connexion</h2>
            <form method='POST' className='form' id='connection-form'>
                <div id='connection-form-container'>
                    <div>
                        <label>Email :</label>
                        <input type='email' id='email' placeholder='Entrez votre email...'/>
                    </div>
                    <div>
                        <label>Mot de passe :</label>
                        <input type='password' id='password' placeholder='Entrez votre mot de passe...'/>
                    </div>
                    <Link to='../Profil'><input type='submit' id='connection' value='Se Connecter'/></Link>
                    
                </div>
            </form>
            <p id='no-account'>Pas de compte ? <Link to='/Inscription' id='sign-up-link'>Inscrivez-vous</Link></p>
        </div>
    )
}


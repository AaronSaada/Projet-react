import Header from '../general/Header'
import { Link } from 'react-router-dom'

export default function HeaderConnexion(){
  return(
    <div>
      <div className="connection-header-container">
        <Header/>
      </div>
      <div className='connection-section-container'>
        <h2>Connexion</h2>
        <form method='POST' className='form' id='connection-form'>
          <div>
            <label>Email :</label>
            <input type='email' id='email' placeholder='Entrez votre email...'/>
          </div>
          <div>
            <label>Mot de passe :</label>
            <input type='password' id='password' placeholder='Entrez votre mot de passe...'/>
          </div>
          
          <input type='submit' id='connection' value='Se Connecter'/>
        </form>
        <p>Pas de compte ? <Link to='/Inscription'>Inscrivez-vous</Link></p>
      </div>
      
    </div>
  )
  
}
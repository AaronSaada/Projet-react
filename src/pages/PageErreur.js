import { Link } from 'react-router-dom'

export default function PageErreur() {
  return (
    <div className="error-page-container">
        <p id='error-message'>ERREUR</p>
        <p id='error-redirection'>Tu t'es perdu?<br/><Link to='/'>Clique ici</Link></p>
    </div>
  )
}
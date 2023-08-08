import PageDAccueil from './pages/PageDAccueil'
import PageConnexion from './pages/PageConnexion'
import PageInscription from './pages/PageInscription'
import PageContact from './pages/PageContact'
import PageProfil from './pages/PageProfil'
import './styles/general.css'
import {Routes, Route} from 'react-router-dom'


export default function App() {
  return(
    <Routes>
      <Route path="/" element={<PageDAccueil/>}/>
      <Route path="/Connexion" element={<PageConnexion/>}/> 
      <Route path="/Inscription" element={<PageInscription/>}/>
      <Route path="/Contact" element={<PageContact/>}/>
      <Route path="/Profil" element={<PageProfil/>}/>
    </Routes>
  )
}

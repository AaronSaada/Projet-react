import PageDAccueil from './pages/PageDAccueil'
import PageConnexion from './pages/PageConnexion'
import PageInscription from './pages/PageInscription'
import PageContact from './pages/PageContact'
import PageContactProfil from './pages/PageContactProfil'
import PageProfil from './pages/PageProfil'
import ErrorPage from './pages/PageErreur'
import './styles/general.css'
import {Routes, Route} from 'react-router-dom'


export default function App() {
  return(
    <Routes>
      <Route path="/" element={<PageDAccueil/>} />
      <Route path="/Connexion" element={<PageConnexion/>}/> 
      <Route path="/Inscription" element={<PageInscription/>}/>
      <Route path="/Contact" element={<PageContact/>}/>
      <Route path="/ContactProfil" element={<PageContactProfil/>}/>
      <Route path="/Profil" element={<PageProfil/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

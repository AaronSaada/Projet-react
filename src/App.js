import PageDAccueil from './components/pages/PageDAccueil'
import PageConnexion from './components/pages/PageConnexion'
import PageInscription from './components/pages/PageInscription'
import './styles/general.css'
import {Routes, Route} from 'react-router-dom'


export default function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<PageDAccueil/>}/>
        <Route path="/Connexion" element={<PageConnexion/>}/> 
        <Route path="/Inscription" element={<PageInscription/>}/>
      </Routes>
      
    </>
  )
}

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Contact from './components/Form.js'
import './styles/general.css'
import videoHeader from './images/video-header.mp4'
import BoutonValider from './components/BoutonValider.js'
import Bienvenu from './components/Bienvenu.js'

function App() {
  return(
    <>
      <div className='home-page-container'>
        <div className='header-video'>
          <div className='background-video-container'>
            <video className="background-video" src={videoHeader} autoPlay loop muted playsInline></video>
          </div>
          <Header/>
          <div className='header-title'>
            <h1>Connectify</h1>
          </div>
        </div>
        <Bienvenu/>
        <Contact/>
        <div className='newsletter-container'>
          <div className='newsletter'>
            <h3>Newsletter</h3>
            <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
            <input type='text' name='email' id='email' placeholder="Entrez votre email..."/>
            <BoutonValider/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;

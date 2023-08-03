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
        <div className='section-bienvenue'>
          <div className='section-bienvenue-container'>
            <h2>Bienvenue</h2>
            <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
          </div>
        </div>
        <div className='section-informations'>
          <div className='section-actualite-container'>
            <div className='section-actualite'>
              <h2>Actualité</h2>
              <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres. Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify. Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
            </div>
            <img src={imageActualite} alt='Actualités'/>
          </div>
          <div className='section-qui-sommes-nous-container'>
            <div className='section-qui-sommes-nous'>
              <h2>Qui sommes nous ?</h2>
              <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
            </div>
            <img src={imageQSN} alt='Qui sommes-nous?'/>
          </div>
        </div>
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

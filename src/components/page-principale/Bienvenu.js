import React, {useState, useEffect} from 'react'
import imageActualite from '../../images/actualite.png'
import imageQSN from '../../images/qsn.png'

export default function Bienvenu(){
  const traductions = {
    fr: "Bienvenue",
    en: "Welcome",
    es: "Bienvenido",
    de: "Willkommen",
    gf: "ben vini",
    ht: "Byenvini",
    sen: "Akksil ak diam",
    ukr: "дякую",
    bgd: "স্বাগত",
    zh: "欢迎光临",
    dz:'مرحباً',
    he:"ברוך הבא",
    jp:"いらっしゃいませ",
    kb:"Anṣuf yis-wen",
    az:"ⴰⵏⵚⵓⴼ ⵢⵉⵙ ⵡⴻⵏ",
  
    // Ajoutez autant de langues que nécessaire
  };
  
    const [langueActuelle, setCurrentLanguage] = useState("fr");
  
    useEffect(() => {
      // Appel de la fonction toutes les 1 seconde
      const interval = setInterval(changerLaLangue, 1000);
  
      // Nettoyage du setInterval lorsque le composant est démonté
      return () => clearInterval(interval);
    }, [langueActuelle]);
  
    function changerLaLangue() {
      const langues = Object.keys(traductions);
      const indexSuivant = (langues.indexOf(langueActuelle) + 1) % langues.length;
      const langueSuivante = langues[indexSuivant];
      setCurrentLanguage(langueSuivante);
    }


  return(
    <div>
      <div className='section-bienvenue'>
        <div className='section-bienvenue-container'>
          <h2>{traductions[langueActuelle]}</h2>
          <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
      </div>
      <div className='section-informations'>
        <div className='section-actualite-container'>
          <div className='section-actualite'>
            <h2>Actualité</h2>
            <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres. Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify. Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
          </div>
          <img src={imageActualite} alt='Bonjour'/>
        </div>
        <div className='section-qui-sommes-nous-container'>
          <div className='section-qui-sommes-nous'>
            <h2>Qui sommes nous ?</h2>
            <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
          </div>
          <img src={imageQSN}/>
        </div>
      </div>
    </div>
    
  )
}


import Bienvenu from './Bienvenu.js'
import Form from '../../general/Form.js'
import BoutonValider from '../../general/BoutonValider.js'


export default function MainIndex(){
  return(
    <div className='home-page-container'>
      <Bienvenu/>
      <Form/>
      <div className='newsletter-container'>
        <div className='newsletter'>
          <h3>Newsletter</h3>
          <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
          <input type='text' name='email' id='email' placeholder="Entrez votre email..."/>
          <BoutonValider/>
        </div>
      </div>
    </div>
  )
}

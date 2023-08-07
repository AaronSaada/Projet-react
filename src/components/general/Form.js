import BoutonValider from "./BoutonValider"
import ImageContact from "../../images/image-contact.png"

export default function Form(){
    return(
        <div id='contact-container'>
            <div className='contact-background'>
                <img src={ImageContact} alt='Image Contact'/>
            </div>
            <div className='form-container'>
                <h3>Nous Contacter</h3>
                <form method='post' className='form'>
                    <div>
                        <label>Email :</label>
                        <input type='text' name='email' id='email' placeholder="Entrez votre email..."/>
                    </div>
                    <div>
                        <label>Sujet :</label>
                        <input type='text' name='sujet' id='sujet' placeholder="Sujet de votre message..."/>
                    </div>
                    <div>
                        <label>Message :</label>
                        <textarea type='text' name='message' id='message' placeholder="Ecrivez votre message"/>
                    </div>
                    <BoutonValider/>
                </form>
            </div>
        </div>
        
    )
}
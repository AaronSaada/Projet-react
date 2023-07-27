import BoutonValider from "./BoutonValider"

export default function Contact(){
    return(
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
    )
}
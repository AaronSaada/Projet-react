import { Link } from 'react-router-dom';
import { useRef, useState, useContext } from "react";
import { UserContext } from '../../../contexts/userContext'
import { useNavigate } from "react-router-dom"

export default function MainConnexion(){

    const {signIn} = useContext(UserContext);

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault()

        try{

            await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )

            setValidation("");
            navigate("/Profil");

        }catch{
            setValidation("Mot de passe ou Email incorrect")
        }
        
    }

    return(
        <div className='connection-section-container'>
            <h2>Connexion</h2>
            <form ref={formRef} onSubmit={handleForm} method='POST' className='form' id='connection-form'>
                <div id='connection-form-container'>
                    <div>
                        <label htmlFor="signInEmail">Email :</label>
                        <input ref={addInputs} type='email' id='email' placeholder='Entrez votre email...'/>
                    </div>
                    <div>
                        <label htmlFor='signInPwd'>Mot de passe :</label>
                        <input ref={addInputs} type='password' id='password' placeholder='Entrez votre mot de passe...'/>
                    </div>
                    <p className='six-characters'>{validation}</p>
                    <input type='submit' id='connection' value='Se Connecter'/>
                    
                </div>
            </form>
            <p id='no-account'>Pas de compte ? <Link to='/Inscription' id='sign-up-link'>Inscrivez-vous</Link></p>
        </div>
    )
}


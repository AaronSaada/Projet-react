import { Link } from 'react-router-dom';
import { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from '../../../contexts/userContext'
import { useNavigate } from "react-router-dom"
import { db } from '../../../api/firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export default function MainInscription(){

    const {signUp} = useContext(UserContext);

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([

    ])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault()

        if((inputs.current[5].value.length || inputs.current[6].value.length) < 6){
            setValidation("6 caractères minimum")
            return;
        }
        if(inputs.current[5].value !== inputs.current[6].value){
            setValidation("Mots de passe différents !")
            return;
        }

        try{

            await signUp(
                inputs.current[2].value,
                inputs.current[5].value
            )

            formRef.current.reset();
            setValidation("");
            navigate("/Profil");

        }catch(err){

            if(err.code === "auth/invalid-email"){
                
                setValidation("Le format de l'Email est incorrecte")

            }

            if(err.code === "auth/email-already-in-use"){

                setValidation("Cette adresse Email est déjà utilisée")

            }
        }
        
    }

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newGender, setNewGender] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersCollectionRef, { lastName: newLastName, firstName: newFirstName, email: newEmail, gender: newGender});
    }

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        };

        getUsers()

    }, [])
    
    
  return(
    <div className='sign-up-section-container'>
        <h2>Inscription</h2>
        <form ref={formRef} onSubmit={handleForm} method='POST' className='form' id='sign-up-form'>
            <div id='sign-up-form-container'>
                <div id='sign-up-name-flex'>
                    <div>
                        <label htmlFor="signUpEmail">Nom :</label>
                        <input 
                            ref={addInputs} 
                            onChange={(event) => {
                                setNewLastName(event.target.value);
                            }} 
                            type='text' 
                            id='name' 
                            placeholder='Entrez votre nom...' 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="signUpPwd">Prénom :</label>
                        <input 
                            ref={addInputs}
                            onChange={(event) => {
                                setNewFirstName(event.target.value);
                            }}  
                            type='text' 
                            id='firstname' 
                            placeholder='Entrez votre prénom...' 
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Email :</label>
                    <input 
                        ref={addInputs}
                        onChange={(event) => {
                            setNewEmail(event.target.value);
                        }}  
                        type='email' 
                        id='email' 
                        placeholder='Entrez votre email..' 
                        required
                    />
                </div>
                <div id='gender-container'>
                    <label>Genre :</label>
                    <div id='input-radio-flex'>
                        <div id='input-gender-flex-man'>
                            <div className="input-radio-gender">
                                <input 
                                    ref={addInputs} 
                                    onChange={(event) => {
                                        setNewGender(event.target.value);
                                    }} 
                                    type='radio' 
                                    name='genre' 
                                    id='homme'
                                    value='homme'
                                />
                            </div>
                            <div>
                                <label name='man' id='homme'>Homme</label>
                            </div>
                        </div>
                        <div id='input-gender-flex-woman'>
                            <div className="input-radio-gender">
                                <input 
                                    ref={addInputs}
                                    onChange={(event) => {
                                        setNewGender(event.target.value);
                                    }}  
                                    type='radio' 
                                    name='genre' 
                                    id='femme'
                                    value='femme'
                                />
                            </div>
                            <div>
                                <label name='woman' id='femme'>Femme</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input 
                        ref={addInputs}
                        type='password' 
                        id='password' 
                        placeholder='Entrez votre mot de passe...' 
                        required
                    />
                </div>
                <div>
                    <label>Vérification de mot de passe :</label>
                    <input 
                        ref={addInputs} 
                        type='password' 
                        id='password-verification' 
                        placeholder='Confirmez votre mot de passe..' 
                        required
                    />
                </div>
                <p className='six-characters'>{validation}</p>
                <input 
                    ref={addInputs} 
                    onClick={createUser} 
                    type='submit' 
                    id='inscription' 
                    value='Valider'
                />
            </div>
        </form>
        <p id='no-account'>Déjà membre ? <Link to='/Connexion' id='sign-in-link'>Connectez-vous</Link></p>
    </div>
  )
  
}
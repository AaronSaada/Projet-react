import HeaderContactProfil from '../components/components-page/page-contact/HeaderContactProfil'
import Form from '../components/general/Form'
import Footer from '../components/general/Footer'

export default function PageContact(){
    return(
        <div id='contact-page-container'>
            <HeaderContactProfil/>
            <div id='form-footer-link'>
                <Form/>
                <Footer/>
            </div>
            
        </div>
        
    )
}
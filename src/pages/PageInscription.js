import HeaderInscription from '../components/components-page/page-inscription/HeaderInscription'
import MainInscription from '../components/components-page/page-inscription/MainInscription'
import Footer from '../components/general/Footer'
export default function PageInscription(){
  return(
    <div>
      <div id='sign-up-flex-desktop'>
        <HeaderInscription/>
        <MainInscription/>
      </div>
      <Footer/>
    </div>
  ) 
}
import HeaderConnexion from '../components/components-page/page-connexion/HeaderConnexion'
import MainConnexion from '../components/components-page/page-connexion/MainConnexion'
import Footer from '../components/general/Footer'

export default function PageConnexion(){
  return(
    <div>
      <div id='connection-flex-desktop'>
        <HeaderConnexion/>
        <MainConnexion/>
      </div>
      
      <Footer/>
    </div>
  ) 
}
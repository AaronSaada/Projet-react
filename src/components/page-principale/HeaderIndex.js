import Header from '../general/Header'
import videoHeader from '../../images/video-header.mp4'

export default function MainHeader(){
  return(
  <div className='header-video'> 
    <div className='background-video-container'>
      <video className="background-video" src={videoHeader} autoPlay loop muted playsInline></video>
    </div>
    <Header/>
    <div className='header-title'>
      <h1>Connectify</h1>
    </div>
  </div>
  )
}

import HeaderIndex from './components/page-principale/HeaderIndex.js'
import MainIndex from './components/page-principale/MainIndex.js'
import Footer from './components/general/Footer.js'
import './styles/general.css'
import {Routes, Route} from 'react-router-dom'


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<HeaderIndex/>
          <MainIndex/>
          <Footer/>}/>
      </Routes>
      
    </>
  )
}

export default App;

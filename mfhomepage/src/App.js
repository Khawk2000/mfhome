import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';




function App() {
  const [play, setPlay] = useState(true)

  const handleDone = () => {
      console.log('vid done')
      setPlay(false)
  }

  return (
    <>
      <Router>
      {play && <div className="videoplay">
         <video src='MFLOGOANIMATEDofficial.mp4' autoPlay muted onEnded={handleDone}/>
      </div>}
      {!play && <Navbar/>}  
        {!play && <Routes>
          <Route path='/' exact Component={Home}/>

          </Routes> }
      
      </Router>
    </>
  );
}

export default App;

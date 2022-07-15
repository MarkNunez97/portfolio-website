import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Base from './components/Base';
import { fadeType } from './definitions/Fade';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [fade, setFade] = useState<fadeType>("Fade In");
  function fadeInRain(){
    setFade("Fade In")
  }
  
  function fadeOutRain(){
    setFade("Fade Out")
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base content={<Home onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade}/>} />
        <Route path="/menu" element={<Base content={<Menu onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade}/>} />
        <Route path="/about" element={<Base content={<About onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade} />} />
        <Route path="/experience" element={<Base content={<Experience onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade} />} />
        <Route path="/work" element={<Base content={<Work onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade} />} />
        <Route path="/contact" element={<Base content={<Contact onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade} />} />
        <Route path="/resume" element={<Base content={<Resume onFadeOut={fadeOutRain} onFadeIn={fadeInRain}/>} fade={fade} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

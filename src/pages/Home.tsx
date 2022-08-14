import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingText from '../components/LoadingText';
import './css/Home.css';
import Intro from '../components/Intro';
import Enter from '../components/Enter';
import Hello from '../components/Hello';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}

function Home(props: Props) {
  const [count, setCount] = useState(0);
  const [loadCount, setLoadCount] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [keysActivated, setKeysActivated] = useState(false);
  const [enterPressed, setEnterPressed] = useState(false);
  const [showloading, setShowLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>()
  
  
  // 5 second timer
  useEffect(() => {
    timerRef.current =  setInterval(() => setCount(prev => prev + 1), 1000);
    props.onFadeIn()
  }, [props]);

  // activate key pressed
  useEffect(() => {
    if (count === 4){
      if (timerRef.current){
        clearInterval(timerRef.current)
        setKeysActivated(true)
      }
    }
  }, [count]);
  
  // adding key listeners
  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) =>{
      if (e.key === "Enter"){
        setEnterPressed(true)
        props.onFadeOut()
      }
    }

    if (keysActivated){
      window.addEventListener("keydown", onKeyPressed);
    }
    
    return () => {
      window.removeEventListener("keydown", onKeyPressed);

    };
  }, [keysActivated, props]);

  // set loading
  useEffect(() => {
    if (enterPressed){
      timerRef.current =  setInterval(() => setLoadCount(prev => prev + 1), 1000);
    }
    
  }, [enterPressed]);

  // set loading
  useEffect(() => {
    if (loadCount === 3){
      setShowLoading(true)
    }
    
    if (loadCount === 7){
      if (timerRef.current){
        clearInterval(timerRef.current)
        setRedirect(true)
        setShowLoading(false)
      }
      
    }
    
  }, [loadCount]);

  return (
        <>
            {/* need to pass boolean to check to show or not */}
            <div className={enterPressed? 'home-top fade': 'home-top'}>
              <Hello/>     
              <Intro/>
            </div>
            <div className='home-bottom'>
              <Enter keysActivated={keysActivated} enterPressed={enterPressed} onClick={()=> setEnterPressed(true)} />
            </div>
            
            {showloading? <LoadingText/> : null}
            {redirect? <Navigate to="/menu" replace={true} /> : null}
            
        </>
  );
}

export default Home;

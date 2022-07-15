import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Content from '../components/Content';
import LoadingText from '../components/LoadingText';
import Title from '../components/Title';
import BackButton from '../components/BackButton';
import Map from '../components/Map';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
  title: string;
  content: JSX.Element;
}


function Page(props: Props) {
  const [count, setCount] = useState(0);
  const [loadCount, setLoadCount] = useState(0);
  const [redirectLocation, setRedirectLocation] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showloading, setShowLoading] = useState(false);
  const [keysActivated, setKeysActivated] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>()
  const navigate = useNavigate()

  // 5 second timer
  useEffect(() => {
    timerRef.current =  setInterval(() => setCount(prev => prev + 1), 1000);
    props.onFadeIn()
  }, [props]);

  // activate key pressed
  useEffect(() => {
    if (count === 5){
      if (timerRef.current){
        clearInterval(timerRef.current)
        setKeysActivated(true)
      }
    }
  }, [count]);
  
  // adding key listeners
  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) =>{
      if (e.key === "Escape"){
        setRedirectLocation("/menu")
        setRedirect(true)
        props.onFadeOut()
      }
    }

    window.addEventListener("keydown", onKeyPressed);

    return () => {
      window.removeEventListener("keydown", onKeyPressed);

    };
  }, [keysActivated, props]);

  // set loading
  useEffect(() => {
    if (redirect){
      timerRef.current =  setInterval(() => setLoadCount(prev => prev + 1), 1000);
    }
  }, [redirect]);

  // set loading
  useEffect(() => {
    if (loadCount === 3){
      setShowLoading(true)
    }
    
    if (loadCount === 7){
      if (timerRef.current){
        clearInterval(timerRef.current)
        setShowLoading(false)
        navigate(redirectLocation, { replace: true });
      }
      
    }
    
  }, [loadCount, redirectLocation, navigate]);

  const changePage = (location:string) =>{
    setRedirect(true)
    setRedirectLocation(location)
  }
  
  // something wrong happening here to rain drops
  return (
        <>
          <Map position={props.title.toLowerCase()} moveTo={redirect? "/menu": ""}/>
          <BackButton redirect={()=>changePage("/menu")} fade={redirect}/>    
          <Title text={props.title} fade={redirect}/>
          <Content children={props.content} fade={redirect}/>
          {showloading? <LoadingText/> : null}
        </>
  );
}

export default Page;

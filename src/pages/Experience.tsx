import React, { useEffect, useRef, useState } from 'react';
import fetusLoop from '../common/fetusLoop.gif'
import grownLoop from '../common/grownLoop.gif'
import './css/Experience.css';
import Page from '../components/Page';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}


function Experience(props: Props) {
  const imgList = [ fetusLoop, grownLoop]
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(imgList[index])
  const timerRef = useRef<NodeJS.Timeout>()

  // 5 second timer
  useEffect(() => {
    timerRef.current =  setInterval(() => setCount(prev => prev + 1), 1000);
  }, []);

  // activate key pressed
  useEffect(() => {
    if (count % 3 === 0){
      if (timerRef.current){
        const temp = 1 + index
        const imgLength = imgList.length
        const mod = temp % imgLength
        
        setImage(imgList[mod])
        setIndex(mod)
      }
    }
  }, [count]);

  
  const experience = (
    <div style={{display: 'grid', alignItems: 'center', paddingTop: 55, gridAutoFlow: 'column'}}>
      <div style={{width: '100%'}}>
        <div className='image-wrapper'>
          <img className='gif' src={image} alt={"Me, Mochi (pug), and Bean (cat)"}/>  
        </div>
      </div>
      <div style={{flexGrow: 1, lineHeight: 2, fontSize:12}}>
        <p>
          Currently I've had the privilege of working at an Aerospace
          company where I've had the opportunity to work in Web Development,
          Backend Development, and a Python Module for inhouse developers.
        </p>
        <p>
          My main focus is currently this Python Module used to organize time series data and adding useful metadata
          to be able to search and filter through Terabytes of Data.
        </p>
        <p>
          Some previous work includes, working on Android and IOS applications using java and swift, embedded software using C, and game development using Unity and Unreal Engine with C++ and C#.
        </p>
        <p style={{fontSize:14, fontWeight: 'bold'}}>
          Recent Technologies and Skills:
        </p>
        <div className='list-container'>
          <ul>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Python (3.8+)</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>PostgreSQL</li>
            <li>AWS S3</li>
          </ul>
          <ul>
            <li>Docker</li>
            <li>REST APIs</li>
            <li>SCRUM</li>
          </ul>     
        </div>
      </div>
    </div>
  )
  
  return (
        <>        
            <Page onFadeIn={props.onFadeIn} onFadeOut={props.onFadeOut} title="Experience" content={experience}/>
        </>
  );
}

export default Experience;

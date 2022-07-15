import React, { useEffect, useState } from 'react';
import colorToGrey from '../common/colorToGrey.gif'
import greyToColor from '../common/greyToColor.gif'
import base from '../common/base.png'
import './css/About.css';
import Page from '../components/Page';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}


function About(props: Props) {
  const [image, setImage] = useState(base)

  const about = (
    <div style={{display: 'flex', alignItems: 'center', paddingTop: 55}}>
      <div style={{width: '100%'}}>
        <div className='image-wrapper'>
          <img className='gif' src={image} alt={"Me, Mochi (pug), and Bean (cat)"} onMouseOver={()=> setImage(greyToColor)} onMouseOut={()=> setImage(colorToGrey)}/>  
        </div>
      </div>
      <div style={{flexGrow: 1, lineHeight: 2, fontSize:12}}>
        <p>
          Hello! Nice to meet you, my name is Mark Nunez.<br/>
          <br/>
          I am a Mexican American from El Paso, with a passion for creating software that people love to use on a day to day basis.<br/>
          <br/>
          I graduated with a Bachelor's of Science in Computer Science December 2020 from the University of Texas at El Paso.<br/>
          <br/>
          I have spent the past 3+ years developing software for other engineers to facilitate their work and productivity.<br/>
          <br/>
          I have worked with multiple different types of software ranging from embedded software to mobile applications <br/>
          <br/>
          As for my future, I would love to keep learning new technologies and be create applications or games <br/>
          <br/>
          Outside of work, you will most likely find me by my other computer (ironically). I will either be coding, gaming, or making music.<br/>
          <br/>
          At the moment I am only interested in remote opportunities.<br/>
        </p>
      </div>
    </div>
  )
  
  return (
        <>
          <Page onFadeIn={props.onFadeIn} 
                onFadeOut={props.onFadeOut} 
                title="About" 
                content={about}
          />
        </>
  );
}

export default About;

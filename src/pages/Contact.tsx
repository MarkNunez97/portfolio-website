import React, { useState } from 'react';
import colorToGrey from '../common/colorToGrey.gif'
import greyToColor from '../common/greyToColor.gif'
import base from '../common/base.png'
import './css/About.css';
import Page from '../components/Page';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}


function Contact(props: Props) {
  const [image, setImage] = useState(base)

  const content = (
    <div>
      <p className='paragraph'>
        Something
      </p>
      <div className='image-wrapper'>
      <img className='gif' src={image} alt={"Me, Mochi (pug), and Bean (cat)"} onMouseOver={()=> setImage(greyToColor)} onMouseOut={()=> setImage(colorToGrey)}/>  
      </div>
      
      <p className='paragraph'>
        Need to write something else here
      </p>
    </div>
  )
  
  return (
        <>        
            <Page onFadeIn={props.onFadeIn} onFadeOut={props.onFadeOut} title="Contact" content={content}/>
        </>
  );
}

export default Contact;

import React, { useEffect, useState } from 'react';
import { fadeType } from '../definitions/Fade';
import './css/Base.css';
import Rain from './Rain';

interface Content {
    content: React.ReactNode;
    fade: fadeType
  }

function Base(props: Content) {
  const [fade, setFade] = useState<fadeType>(props.fade);

  useEffect(() => {
    if (props.fade === "Fade In"){
      setFade("Fade In")
    }else{
      setFade("Fade Out")
    }
  }, [props.fade]);
  
  return (
    <div className='container'>
        <Rain fade={fade}/>
        <div className='content'>
          {props.content}
        </div>
    </div>
    
  );
}

export default Base;

import React, { useEffect, useState } from 'react';
import resume from './../common/Resume2021.pdf';
import './css/Options.css';

const options = ["About", "Experience", "Work", "Contact", "Resume"]

interface Props{
  fade: boolean
  redirect: (location:string) => void;
}

function Options(props: Props) {
  const [index, setIndex] = useState(0);
  

  
  // adding key listeners
  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) =>{
      if (e.key === "Enter"){
        // will redirect based on where cursor is pointing
        props.redirect(options[index].toLowerCase())
      }
      else if (e.key === "ArrowDown"){
        setIndex(prev => prev + 1)
      }
      else if (e.key === "ArrowUp"){
        setIndex(prev => prev - 1)
      }
    }

    window.addEventListener("keydown", onKeyPressed);

    return () => {
      window.removeEventListener("keydown", onKeyPressed);

    };
  }, [props, index]);
  
  const option = (o: string, i: number) =>(
    <h1 key={o} className={index ===i? "option-hover": "option"} onMouseOver={()=>setIndex(i)} onClick={()=>props.redirect(options[index].toLowerCase())}>{o}</h1>
  )
  return (
    <div className={props.fade ? "options-wrapper-fade": "options-wrapper"}>
      {options.map((o, i) => (
        o === 'Resume'? 
        <a href={resume} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}>
          <h1 key={o} className={index ===i ? "option-hover": "option"} onMouseOver={()=>setIndex(i)}>{o}</h1>
        </a>
        
        :
        option(o, i)
      ))}
    </div>
  );
}

export default Options;

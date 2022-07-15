import React, { useEffect, useState } from 'react';
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
  

  return (
    <div className={props.fade ? "options-wrapper-fade": "options-wrapper"}>
      {options.map((o, i) => <h1 key={o} className={index ===i? "option-hover": "option"} onMouseOver={()=>setIndex(i)} onClick={()=>props.redirect(options[index].toLowerCase())}>{o}</h1>)}
    </div>
  );
}

export default Options;

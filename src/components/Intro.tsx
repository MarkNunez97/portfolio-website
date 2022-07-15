import React from 'react';
import './css/Intro.css';

interface Props{
    fade: boolean
}

function Intro(props: Props) {
  return (
        <>
            
            <h4 className={props.fade ? "title-fade": "title"}>
                My name is
            </h4>
            <h2 className={props.fade ? "name-fade": "name"}>
                Mark Nunez.
            </h2>
            <h1 className={props.fade ? "job-fade": "job"}>
                I am a Full Stack Developer.
            </h1>
        </>
  );
}

export default Intro;

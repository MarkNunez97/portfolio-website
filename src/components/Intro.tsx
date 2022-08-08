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
            <h3 className={props.fade ? "name-fade": "name"}>
                Mark Nunez
            </h3>
            <h2 className={props.fade ? "job-fade": "job"}>
                I am a Full Stack
            </h2>
            <h1 className={props.fade ? "dev-fade": "dev"}>
                D E V E L O P E R
            </h1>
        </>
  );
}

export default Intro;

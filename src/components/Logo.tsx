import React from 'react';
import './css/Logo.css';

interface Props{
    fade: boolean
    image: string
    title: string
}

function Logo(props: Props) {
  return (
        <div className='logo-container'>
            <div className={props.fade ? "picture-fade": "picture-container"}>
                <img className="picture" src={props.image} alt={"Hello"}/>
            </div>
            <div className={props.fade ? "name-logo-fade": "name-logo-container"}>
                <div className="name-logo">{props.title}</div>
            </div>
        </div>
  );
}

export default Logo;

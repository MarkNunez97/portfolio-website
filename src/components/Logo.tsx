import React from 'react';
import './css/Logo.css';
import image from "./../common/MarkNunez.png";

interface Props{
    fade: boolean
}

function Logo(props: Props) {
  return (
        <div className='logo-container'>
            <div className={props.fade ? "picture-fade": "picture-container"}>
                <img className="picture" src={image} alt={"Hello"}/>
            </div>
            <div className={props.fade ? "name-logo-fade": "name-logo-container"}>
                <h1 className="name-logo">Mark Nunez</h1>
            </div>
        </div>
  );
}

export default Logo;

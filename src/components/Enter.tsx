import React from 'react';
import './css/Enter.css';

interface Props{
    keysActivated: boolean
    enterPressed: boolean
    onClick: () => void;
}

function Enter(props: Props) {
    const enterPressed = props.enterPressed ? "enter-activate": "enter"
    const enterClass = props.keysActivated ? enterPressed : "hide"
    const copyrightClass = props.enterPressed ? "copyright-activate": "copyright"
  return (
            <div className='menu-Item'>
                <h1 className={enterClass} onClick={props.onClick}>
                    Press Enter
                </h1>
                <h1 className={copyrightClass}>
                    © 1997, El Paso TX
                </h1>
            </div>
  );
}

export default Enter;

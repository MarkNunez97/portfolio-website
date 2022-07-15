import React from 'react';
import './css/Title.css';

interface Props{
    text: string
    fade: boolean
}

function Title(props: Props) {
  return (
    <> 
        <h1 className={props.fade ? "title-fade": "title"}>
            {props.text}
        </h1>
    </>
  );
}

export default Title;

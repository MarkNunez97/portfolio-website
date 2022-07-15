import React from 'react';
import './css/Content.css';

interface Props{
    children: JSX.Element
    fade: boolean
}

function Content(props: Props) {
  return (
    <> 
        <p className={props.fade ? "child-fade": "child"}>
            {props.children}
        </p>
    </>
  );
}

export default Content;

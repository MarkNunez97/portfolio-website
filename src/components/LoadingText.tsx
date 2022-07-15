import React from 'react';
import './css/LoadingText.css';

interface Props{
}

function LoadingText(props: Props) {
  return (
        <div className='loading-location'>
            <div className='loading-container'>
                <h1 className="loading">Loading . . .</h1>
            </div>
        </div>
            
    );
}

export default LoadingText;

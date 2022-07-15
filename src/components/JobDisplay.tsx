import React from 'react';
import { Job } from '../definitions/Job';
import './css/JobDisplay.css';

interface Props{
    job: Job
}


function jobDisplay(props: Props) {
  return (
    <div style={{display: 'grid', alignItems: 'center'}}>
        <div style={{width: '100%'}}>
        <div className='job-header'> 
            <p className='job-title'>
                <span className='button'>{"< "} </span>{props.job.title}					
            </p>
            <p className='job-date'>
                {props.job.date}<span className='button'>{" >"}</span>
            </p>
        </div>
        <div className='image-wrapper'>
            <img className='gif' src={props.job.image}/>  
        </div>
        </div>
        <div style={{flexGrow: 1, lineHeight: 2, fontSize:12}}>
        <div className='job'>
            <p className='job-description'>
                Summary:
                <br/>
                <br/>
                {props.job.summary}
                <br/>
                <br/>
                In Depth Description:
                <br/>
                <br/>
                {props.job.description}
            </p>
        </div>
        </div>
    </div>
  );
}

export default jobDisplay;

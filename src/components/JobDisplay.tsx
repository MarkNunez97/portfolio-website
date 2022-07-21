import React from 'react';
import { Job } from '../definitions/Job';
import './css/JobDisplay.css';

interface Props{
    job: Job
    previous: ()=> void;
    next: ()=> void;
}


function jobDisplay(props: Props) {
  return (
    <div style={{display: 'grid', alignItems: 'center'}}>
        <div style={{width: '100%'}}>
        <div className='job-header'> 
            <div className='job-title'>
                <span className='button' onClick={()=> props.previous()}>{"< "}</span>
                <p className='job-text-left'>{props.job.title}</p>
            </div>
            <div className='job-date'>
                <p className='job-text-right'>{props.job.date}</p>
                <span className='button' onClick={()=> props.next()}>{" >"}</span>
            </div>
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

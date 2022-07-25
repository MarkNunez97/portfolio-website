import React, { useEffect, useRef, useState } from 'react';
import { Job } from '../definitions/Job';
import './css/JobDisplay.css';

interface Props{
    job: Job
    previous: ()=> void;
    next: ()=> void;
}


function JobDisplay(props: Props) {
    const [disabled, setDisabled] = useState(false)
    const [currentJob, setCurrentJob] = useState(props.job)
    const [currentImg, setCurrentImg] = useState(props.job.image_start)
    
    
    useEffect(() => {
        if(props.job.title !== currentJob.title){
            setCurrentJob(props.job)
            setDisabled(false)
        }
        
    }, [props]);
    
    useEffect(() => {
        setCurrentImg(props.job.image_start)
    }, [currentJob]);
    
    function prevClicked(){
        if(!disabled){
            setDisabled(true)
            props.previous()
        }
    }
    
    function nextClicked(){
        if(!disabled){
            setDisabled(true)
            props.next()  
        }
        
    }

    return (
        <div style={{display: 'grid', alignItems: 'center'}}>
            <div style={{width: '100%'}}>
            <div className='job-header'> 
                <div className='job-title'>
                    <span className='button' onClick={()=> prevClicked()}>{"< "}</span>
                    <p className='job-text-left'>{props.job.title}</p>
                </div>
                <div className='job-date'>
                    <p className='job-text-right'>{props.job.date}</p>
                    <span className='button' onClick={()=> nextClicked()}>{" >"}</span>
                </div>
            </div>
            <div className='image-wrapper'>
                <img className='gif' src={currentImg}/>  
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

export default JobDisplay;

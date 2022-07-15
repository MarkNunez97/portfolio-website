import React, { useState } from 'react';
import colorToGrey from '../common/colorToGrey.gif'
import greyToColor from '../common/greyToColor.gif'
import base from '../common/base.png'
import Page from '../components/Page';
import JobDisplay from '../components/JobDisplay';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}

const job_1 = {
                'title': 'Lockheed Martin - Software Engineer',
                'date': '01/2020 - Present',
                'image': base,
                'summary': <>
                            Developing and Maintaining Python Interface that communicates to Backend
                            Agile Environment
                            Developed Front-end Interface and components for Web Application using ReactJS and Typescript.
                            Developed and Maintained Python RestAPI using Flask and Swagger 
                            Used Docker to create images of the applications services and launching containers locally or in OpenShift
                          </>,
                'description': <>
                                  Currently, I am working in an Agile Team that is in charge of a large-scale deployment that uses Amazon 
                                  S3 for Object Storage, PostgreSQL for querying data in Database, and a Python Client for an easy to use interface.
                                  <br/>
                                  My role as a developer consists of interacting with our users and providing them functions that they 
                                  need to facilitate and improve their workflow, reviewing and explaining software with team members, 
                                  creating documentation, managing and releasing packages and images for our software, and presenting 
                                  the teams work by the end of a 2 week Sprint. 
                                </>
              }

const job_2 = {
                'title': 'Lockheed Martin - Intern',
                'date': '05/2019 - 12/2019',
                'image': base,
                'summary': <>
                            Created a Device that can recognize objects or people by taking a couple of pictures
                            Used a Google Dev Board to load in program, analog buttons for input, LED screen for display, and a 3D printed harness to hold components
                          </>,
                'description': <>
                                  Researched Machine Learning and Tensorflow to to create a Machine Learning Model that identify objects 
                                  after taking pictures of an object. interfaced with multiple peripherals such as an LED display, camera, 
                                  and buttons to take in user input and display a GUI and program running. 
                                </>
                }


const jobs = [job_1, job_2]

function Work(props: Props) {
  const [pointer, setPointer] = useState(0)
  
  return (
        <>        
            <Page onFadeIn={props.onFadeIn} onFadeOut={props.onFadeOut} title="Work" content={<JobDisplay job={jobs[pointer]}/>}/>
        </>
  );
}

export default Work;

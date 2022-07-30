import React, { useEffect, useRef, useState } from 'react';

import currentjob_start from '../common/currentjob_start.gif'
import webdev_start from '../common/webdev_start.gif'
import internjob_start from '../common/internjob_start.gif'

import Page from '../components/Page';
import JobDisplay from '../components/JobDisplay';
import { Job } from '../definitions/Job';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}

const job_1 = {
                'title': 'Lockheed Martin - Big Data Developer',
                'date': '01/2020 - Present',
                'image_start': currentjob_start,
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
                'title': 'Lockheed Martin - Full Stack Web Developer',
                'date': '01/2018 - 05/2019',
                'image_start': webdev_start,
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

const job_3 = {
                'title': 'Lockheed Martin - Intern',
                'date': '05/2019 - 12/2019',
                'image_start': internjob_start,
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




const jobs: Job[] = [job_1, job_2, job_3]

function Work(props: Props) {
  const [pointer, setPointer] = useState<number>(0)
  const [job, setJob] = useState<Job>(jobs[0])
  
  function next(){
    let temp = pointer
    temp += 1
    const jobLength = jobs.length
    const mod = temp % jobLength
    
    setPointer(mod)
    setJob(jobs[mod])
  }

  function previous(){
    let temp = pointer
    temp -= 1
    if (temp < 0){
      temp = jobs.length -1
    }
    const jobLength = jobs.length
    const mod = temp % jobLength
    setPointer(mod)
    setJob(jobs[mod])
  }
  
  return (
        <>        
            <Page 
              onFadeIn={props.onFadeIn} 
              onFadeOut={props.onFadeOut} 
              title="Work" 
              content={<JobDisplay 
                          job={job} 
                          previous={()=>previous()} 
                          next={()=>next()}
                          length={jobs.length}
                          index={pointer}
                          />
                      }
            />
        </>
  );
}

export default Work;

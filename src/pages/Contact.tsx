import React, { useRef, useState } from 'react';
import mogi from '../common/mogi.gif'
import base from '../common/linkedIn/linkedIn-base.png'
import hover from '../common/linkedIn.gif'
import out from '../common/linkedIn-reverse.gif'
import './css/Contact.css';
import Page from '../components/Page';
import emailjs from '@emailjs/browser';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}


function Contact(props: Props) {
  const [image, setImage] = useState(base)
  const form = useRef<HTMLFormElement>(null)

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/mark-nunez-a7114b164/");
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form){
        if (form.current){
            emailjs.sendForm('mark_dev_email', 'template_1nj1ebv', form.current, 'Ke5LxGQGdBQfdaZlp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.current.reset()
        }
    }
  }

  const content = (
    <div className='child-contact'>
      <div className='contact-container'>
        <div className='top'>
          <div className={"img-container"}>
              <img className="img" src={mogi} alt={"Hi"}/>
          </div>
          <h1 className="title-logo">Contact Me</h1>
        </div>
        <form className='input-container' ref={form? form: null} onSubmit={sendEmail}>
             <div className={"text-input"}>
                <p className={"title-input"}>Name</p>
                <input type="text" id="name" name="name"/>
             </div>
             <div className={"text-input"}>
                <p className={"title-input"}>Email</p>
                <input type="email" id="email" name="email"/>
             </div>
              <div className={"msg-input"}>
                <p className={"title-input"}>Message</p>
                <textarea id="message" name="message" cols={30} rows={7}/>
              </div>
              <input type="submit" className={"email-button"} value="SEND"/>
         </form>
         <div className={"socials-container"}>
              <img className="social-img" src={image} onClick={handleClick} onMouseOver={()=>setImage(hover)} onMouseOut={()=>setImage(out)}/>
          </div>
        
      </div>
    </div>
    
  )

  return (
        <>        
            <Page 
              onFadeIn={props.onFadeIn} 
              onFadeOut={props.onFadeOut} 
              title="Contact" 
              hideTitle
              content={content}
            />
        </>
  );
}

export default Contact;

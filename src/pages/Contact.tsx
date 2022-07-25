import React, { useState } from 'react';
import mogi from '../common/mogi.gif'
import base from '../common/linkedIn/linkedIn-base.png'
import hover from '../common/linkedIn.gif'
import out from '../common/linkedIn-reverse.gif'
import './css/Contact.css';
import Page from '../components/Page';

interface Props{
  onFadeOut: () => void;
  onFadeIn: () => void;
}


function Contact(props: Props) {
  const [image, setImage] = useState(base)
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/mark-nunez-a7114b164/");
  };


  const content = (
    <div className='child-contact'>
      <div className='contact-container'>
        <div className='top'>
          <div className={"img-container"}>
              <img className="img" src={mogi} alt={"Hi"}/>
          </div>
          <h1 className="title-logo">Contact Me</h1>
        </div>
        <div className='input-container'>
             <div className={"text-input"}>
                <p className={"title-input"}>Name</p>
                <input type="text" id="email" name="email"/>
             </div>
             <div className={"text-input"}>
                <p className={"title-input"}>Email</p>
                <input type="text" id="email" name="email"/>
             </div>
              <div className={"msg-input"}>
                <p className={"title-input"}>Message</p>
                <textarea id="msg" name="msg" cols={30} rows={7}/>
              </div>
         </div>
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

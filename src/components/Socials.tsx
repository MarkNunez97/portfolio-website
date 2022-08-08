import './css/Socials.css';
import base from '../common/linkedIn/linkedIn-base.png'
import linkedInHover from '../common/linkedIn.gif'
import linkedInOut from '../common/linkedIn-reverse.gif'
import { useState } from 'react';


function Socials() {
    
    const [image, setImage] = useState(base)

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/mark-nunez-a7114b164/");
    };

    return (
        <div className={"socials-container"}>
            <img className="social-img" src={image} onClick={handleLinkedIn} onMouseOver={()=>setImage(linkedInHover)} onMouseOut={()=>setImage(linkedInOut)}/>
        </div>
    );
}

export default Socials;

import React, { useEffect, useRef, useState } from 'react';
import { fadeType } from '../definitions/Fade';

import './css/Rain.css';

interface Props{
    fade: fadeType
}

function Rain(props: Props) {
    const rain = document.getElementById(".rain");
    const [maxRain, setMaxRain] = useState(props.fade === "Fade In"? 0: 100)
    const [rainDrops, setRainDrops] = useState(maxRain);
    const [increment, setIncrement] = useState(0);
    const [drops, setDrops] = useState<JSX.Element[]>([]);
    const [backDrops, setBackDrops] = useState<JSX.Element[]>([]);
    const timerRef = useRef<NodeJS.Timeout>()
    const [resetTimer, setResetTimer] = useState(false)

    if (rain){
        rain.innerHTML = ""
    }

    useEffect(() => {
        setResetTimer(true)
        if (props.fade === "Fade In"){
          setMaxRain(0)
        }else{
            setMaxRain(100)
        }
      }, [props.fade]);


    useEffect(() => {
        if(resetTimer){
            timerRef.current =  setInterval(() => props.fade ==="Fade In"? setRainDrops(prev => prev + 20): setRainDrops(prev => prev - 20) , 500);    
        }
    }, [resetTimer, props]);

    useEffect(() => {
        if (props.fade ==="Fade In"){
            if (rainDrops === 100){
                if (timerRef.current){
                    clearInterval(timerRef.current)
                    setResetTimer(false)
                }
            }
        } else {
            if (rainDrops === 0){
                if (timerRef.current){
                    clearInterval(timerRef.current)
                    setResetTimer(false)
                }
            }
        }
    }, [rainDrops, props]);

    
    if (props.fade === "Fade In"){
        let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        if (increment < rainDrops) {
            // increment
            console.log("incrementing rain drops")
            console.log("increment: "+ increment)
            console.log("adding to increment: "+ randoFiver)
            
            setIncrement(prev => prev + randoFiver)

            //add in a new raindrop with various randomizations to certain CSS properties
            const newdrops = '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
            const divDrop = <div key={drops.length} dangerouslySetInnerHTML={{ __html: newdrops }}/>
            if (backDrops.length >= drops.length ){
                setDrops([...drops, divDrop])
                const newbackDrops = '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
                const divBackDrop = <div key={backDrops.length} dangerouslySetInnerHTML={{ __html: newbackDrops }}/>
                setBackDrops([...backDrops, divBackDrop])
            }
            
        }
    } else {
        //random number between 5 and 2
        let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        if (increment > rainDrops) {
            // decrease
            setIncrement(prev => prev - randoFiver)
            
            // remove from list
            const oldDrops = [...drops]; // make a separate copy of the array
            let index = oldDrops.length -1
            if (index !== -1) {
                oldDrops.splice(index, 1);
                setDrops(oldDrops)
            }
            console.log(drops)
        }
    }
    


    return (
        <>
            <div className="rain front" id='rain-front'>
                {drops.map((drop) => drop)}
            </div>
            <div className="rain back">
                {backDrops.map((backDrop) => backDrop)}
            </div>
        </>
    );
}

export default Rain;
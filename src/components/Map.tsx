import React from 'react';
import './css/Map.css';
import map from "./../common/Minimap.png";
import player from "./../common/Moug.png";

interface Props{
    position: string
    moveTo: string
}

function Map(props: Props) {
  let playerClass = 'player-location '+props.position

  console.log("outside: " + props.moveTo)
  if (props.moveTo.length > 0) {
    playerClass = playerClass+" to-"+props.moveTo.substring(1)
    console.log("inside: " + props.moveTo)
    console.log(playerClass)
  }

  return (
      <>
        <div className='map-container'>
            <img className='map' src={map} alt={"map"}/>
            <div className={playerClass}>
                <img className='player' src={player} alt={"map"}/>
            </div>
        </div>
      </>
    );
}

export default Map;

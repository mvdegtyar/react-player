import React, { useState, useRef } from 'react';
import '../style.css';

const Player = ({src, onTimeUpdate}) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  const handleClick = e => {
    const newPlaying = !playing
    if (newPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
   
    setPlaying(newPlaying);
  }

  const handleTimeUpdate = e => {
    setCurrentTime(Math.floor(e.target.currentTime));
    onTimeUpdate(e.target.currentTime);
  }

  return (
    <div className='player-controls'>
      <audio src={src} ref={audioRef} type='audio/mpeg' onTimeUpdate={handleTimeUpdate}></audio>
      <button className={`play-button ${playing ? 'pause' : 'play'}`} onClick={handleClick}></button>
      <div>{currentTime}</div>
    </div>
  );
};

export default Player;
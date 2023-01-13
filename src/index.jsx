import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import lines from './lyrics-lines.js'

import Player from './Player';
import Lyrics from './Lyrics';

const App = () => {
  const music = 'fools-garden-lemon-tree.mp3';
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleTimeUpdate = tm => {
    const newCurrentIndex = lines.findIndex(l => l.time > tm) - 1;
    if (newCurrentIndex != currentIndex) {
      setCurrentIndex(newCurrentIndex);
    }
  }

  return (
    <div className="container">
      <Player src={music} onTimeUpdate={handleTimeUpdate}></Player>
      <Lyrics lines={lines} currentIndex={currentIndex}></Lyrics>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

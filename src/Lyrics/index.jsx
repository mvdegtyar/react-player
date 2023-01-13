import React, { useRef, useEffect } from 'react';
import '../style.css';

const Lyrics = ({ lines, currentIndex }) => {
  const currentLineRef = useRef();

  useEffect(() => {
    if (!currentLineRef.current) {
      return;
    }
  
    currentLineRef.current.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }, [currentIndex]);

  return (
    <div className='lyrics'>
      {
        lines.map((l, index) =>
          <p key={index}
            className={currentIndex == index ? 'current-line' : null}
            ref={currentIndex == index ? currentLineRef : null}
          >
            {l.text}
          </p>)
      }
    </div>
  );
};

export default Lyrics;
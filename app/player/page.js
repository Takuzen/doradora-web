'use client';
import { useRef } from 'react';
export default function Player() {
  const audioRef = useRef(null);
  const playSound = () => {
	  audioRef.current.play();
  };
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <img
	src="/play-btn-image.png"
	alt="Play Button"
        style={{ cursor: 'pointer', width: '200px', height: '200px' }}
	onClick={playSound}
      />
      <audio ref={audioRef} src="/TeaDoraSample.m4a" preload="auto" />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';
import { getImageUrl } from '../../utils';

const frames = [
    getImageUrl("loading/frame0.jpg"), 
    getImageUrl("loading/frame1.jpg"), 
    getImageUrl("loading/frame2.jpg"), 
    getImageUrl("loading/frame3.jpg"), 
    getImageUrl("loading/frame4.jpg"), 
    getImageUrl("loading/frame5.jpg"), 
    getImageUrl("loading/frame6.jpg"), 
];

const LoadingScreen = ({ onLoaded }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 160); // Change frame every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(onLoaded, 3700); // Hide loading screen after 3 seconds
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={styles.loadingScreen}>
      <img src={frames[frameIndex]} alt="Pixel Character" className={styles.pixelCharacter} />
    </div>
  );
};

export default LoadingScreen;

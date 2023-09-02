import React, { useEffect, useState } from 'react'
import styles from './InteractiveCGModel.module.css'

function InteractiveCGModel({delayed=false}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (delayed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 6500);
  
      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsVisible(true);
    }
  }, []);

  return (
    isVisible ? (
      <div className={styles.HomeGlCanvasContainer}>
        <canvas id="glcanvas" className={`${styles.HomeGlCanvas} ${delayed ? styles.DelayedAnim : ''}`}></canvas>
      </div>
    ) : <></>
  )
}

export default InteractiveCGModel
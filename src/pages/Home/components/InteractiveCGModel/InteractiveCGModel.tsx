import React, { useEffect, useState } from 'react'
import styles from './InteractiveCGModel.module.css'

function InteractiveCGModel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    isVisible && (
      <div className={styles.HomeGlCanvasContainer}>
        <canvas id="glcanvas" className={styles.HomeGlCanvas}></canvas>
      </div>
    )
  )
}

export default InteractiveCGModel
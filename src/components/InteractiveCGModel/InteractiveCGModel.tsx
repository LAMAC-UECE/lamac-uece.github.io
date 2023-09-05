import React, { useEffect, useRef, useState } from 'react'
import styles from './InteractiveCGModel.module.css'
import { helloWorldGL } from '../../static/ts/cg/webglHw';

function InteractiveCGModel({delayed=false}) {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      helloWorldGL(canvasRef.current);
    }
  }, [isVisible]);

  return (
    isVisible ? (
      <div className={styles.HomeGlCanvasContainer}>
        <canvas ref={canvasRef} className={`${styles.HomeGlCanvas} ${delayed ? styles.DelayedAnim : ''}`}></canvas>
      </div>
    ) : <></>
  )
}

export default InteractiveCGModel
import React, { useEffect, useRef, useState } from 'react';
import styles from './InteractiveCGModel.module.css';
import { LamacLogoCG } from '../../static/ts/cg/LamacLogo';

function InteractiveCGModel({ delayed = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const threeJsContainerRef = useRef(null);

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
    if (threeJsContainerRef.current) {
      LamacLogoCG(threeJsContainerRef.current);
    }
  }, [isVisible]);

  return (
    isVisible ? (
      <div className={styles.HomeGlCanvasContainer} ref={threeJsContainerRef}></div>
    ) : <></>
  );
}

export default InteractiveCGModel;
import React, { useEffect, useState } from 'react';
import styles from './AnimatedLogoIntro.module.css';

const AnimatedLogoIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    isVisible && (
      <section className={styles.AnimatedLogoIntro}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                src="/gifs/animated-logo-white.gif"
                alt="Animated GIF"
                className={styles.gifImage}
              />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default AnimatedLogoIntro;

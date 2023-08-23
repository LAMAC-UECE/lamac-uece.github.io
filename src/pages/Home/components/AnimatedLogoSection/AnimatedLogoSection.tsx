import React from 'react';
import styles from './AnimatedLogoSection.module.css';

const AnimatedLogoSection = () => {
  return (
    <section className={styles.AnimatedLogoSection}>
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
  );
};

export default AnimatedLogoSection;

import React from 'react'
import styles from './Home.module.css';
import LamacNavbar from '../../components/LamacNavbar/LamacNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedLogoIntro from './components/AnimatedLogoIntro/AnimatedLogoIntro';

function Home() {
  return (
    <div className={styles.Home}>
      <LamacNavbar brandDelayed={true} />
      <AnimatedLogoIntro />
    </div>
  )
}

export default Home
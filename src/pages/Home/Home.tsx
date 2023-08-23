import React from 'react'
import styles from './Home.module.css';
import LamacNavbar from '../../components/LamacNavbar/LamacNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedLogoSection from './components/AnimatedLogoSection/AnimatedLogoSection';

function Home() {
  return (
    <div className={styles.Home}>
      <LamacNavbar brandDelayed={true} />
      <AnimatedLogoSection />
    </div>
  )
}

export default Home
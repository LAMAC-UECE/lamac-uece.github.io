import React, { useState } from 'react'
import styles from './Home.module.css';
import LamacNavbar from '../../components/LamacNavbar/LamacNavbar';
import AnimatedLogoIntro from './components/AnimatedLogoIntro/AnimatedLogoIntro';
import InteractiveCGModel from './components/InteractiveCGModel/InteractiveCGModel';
import ConfigsGear from '../../components/ConfigsGear/ConfigsGear';
import ConfigsModal from '../../components/ConfigsModal/ConfigsModal';

function Home() {
  const [isConfigsModalVisible, setConfigsModalVisible] = useState(false)

  return (
    <div>
      <LamacNavbar brandDelayed={true} />
      <div className={styles.HomeContent}>
        <AnimatedLogoIntro />
        <InteractiveCGModel />
      </div>
      <ConfigsGear
        delayed={true}
        toggleConfigsModalVisibility={setConfigsModalVisible}
      />
      <ConfigsModal
        show={isConfigsModalVisible}
        setShow={setConfigsModalVisible}
      />
    </div>
  )
}

export default Home
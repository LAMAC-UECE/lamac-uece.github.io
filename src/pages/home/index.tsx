import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import LamacNavbar from '../../components/LamacNavbar/LamacNavbar';
import AnimatedLogoIntro from './components/AnimatedLogoIntro/AnimatedLogoIntro';
import InteractiveCGModel from './components/InteractiveCGModel/InteractiveCGModel';
import ConfigsGear from '../../components/ConfigsGear/ConfigsGear';
import ConfigsModal from '../../components/ConfigsModal/ConfigsModal';
import { getCookie } from '../../static/ts/cookiesAPI';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function Home() {
  const [isConfigsModalVisible, setConfigsModalVisible] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (getCookie("disableIntro")) {
      setShowIntro(false);
    }
    setLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <LamacNavbar brandDelayed={showIntro} />
      <div className={styles.HomeContent}>
        {showIntro && <AnimatedLogoIntro />}
        <InteractiveCGModel delayed={showIntro} />
      </div>
      <ConfigsGear
        delayed={showIntro}
        toggleConfigsModalVisibility={setConfigsModalVisible}
      />
      <ConfigsModal
        show={isConfigsModalVisible}
        setShow={setConfigsModalVisible}
      />
    </div>
  );
}

export default Home;
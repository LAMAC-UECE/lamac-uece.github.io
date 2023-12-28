"use client"

import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { getCookie } from '../static/ts/cookiesAPI';
import styles from './home.module.css';
import InteractiveCGModel from '../components/InteractiveCGModel/InteractiveCGModel';
import ConfigsGear from '../components/ConfigsGear/ConfigsGear';
import ConfigsModal from '../components/ConfigsModal/ConfigsModal';
import CircuitFooter from '../components/CircuitFooter/CircuitFooter';


export default function IndexPage() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isConfigsModalVisible, setConfigsModalVisible] = useState(false);

  useEffect(() => {
    if (getCookie("disableIntro") || sessionStorage.getItem("introPlayed")) {
      setShowIntro(false);
    } else {
      window.setTimeout(() => {
        sessionStorage.setItem("introPlayed", "true");
      }, 0);
    }

    setMounted(true);
  }, []);

  if (!mounted) return <LoadingSpinner />;

  return (
      <div>
        <div className={styles.HomeContent}>
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
        <CircuitFooter delayed={showIntro} relative={false} />
      </div>
  );
}

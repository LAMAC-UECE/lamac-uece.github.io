import React, { useEffect, useState } from 'react'
import styles from './ConfigsGear.module.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function ConfigsGear(props: {
    delayed: boolean,
    toggleConfigsModalVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.delayed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5500);

      return () => {
        clearTimeout(timer);
      };
    }
    else {
      setIsVisible(true);
    }
  }, []);

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props} >
      Configurações
    </Tooltip>
  );

  return (
    isVisible ?
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 250 }}
      overlay={renderTooltip}
    >
      <img
        src="/images/gear.png"
        className={`${styles.ConfigsGear} ${styles.BottomRight} ${props.delayed ? styles.Delayed : ''}`} 
        alt="Configurations Gear" 
        onClick={() => props.toggleConfigsModalVisibility(true)}
      />
    </OverlayTrigger> : <></>
  )
}

export default ConfigsGear
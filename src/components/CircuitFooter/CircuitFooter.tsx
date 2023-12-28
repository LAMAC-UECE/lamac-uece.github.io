import React, { useEffect, useState } from "react";
import styles from "./CircuitFooter.module.css";

function CircuitFooter(props: { delayed: boolean; relative: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.delayed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 0);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isVisible ? (
    <>
      <div
        className={`${styles.CircuitFooter} ${
          props.relative ? "position-relative" : ""
        } ${props.delayed ? styles.Delayed : ""}`}
      ></div>
    </>
  ) : (
    <></>
  );
}

export default CircuitFooter;

import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.SpinnerContainer}>
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default LoadingSpinner;

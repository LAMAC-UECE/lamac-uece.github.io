import React from 'react';
import Image from 'next/image';
import logo from '../../static/images/logo.svg';
import styles from './App.module.css';
import LamacNavbar from '../LamacNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.App}>
      <LamacNavbar />
      <header className={styles.AppHeader}>
        <Image src={logo} className={styles.AppLogo} alt="logo" priority />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
      </header>
    </div>
  );
}

export default App;

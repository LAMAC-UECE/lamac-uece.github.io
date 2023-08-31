"use client"

import { Container } from 'react-bootstrap';
import styles from './not-found.module.css';

export default function Custom404() {
  return (
    <>
      <Container className={styles.NotFoundContainer}>
        <div className='text-center'>
          <h1>Ops...</h1>
          <h3>Esta página não existe.</h3>
          <a href="/">
            Voltar à página inicial
          </a>
        </div>
      </Container>
    </>
  );
}

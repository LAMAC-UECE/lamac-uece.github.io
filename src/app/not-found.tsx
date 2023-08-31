"use client"

import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styles from './not-found.module.css';

export default function Custom404() {
  return (
    <>
      <Container className={styles.NotFoundContainer}>
        <div className='text-center'>
          <h1>Ops...</h1>
          <h3>Esta página não existe.</h3>
          <Link href="/">
            Voltar à página inicial
          </Link>
        </div>
      </Container>
    </>
  );
}

import Link from 'next/link';
import LamacNavbar from '../components/LamacNavbar/LamacNavbar';
import { Container } from 'react-bootstrap';
import styles from './404.module.css';

export default function FourOhFour() {
  return (
    <>
      <LamacNavbar />
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

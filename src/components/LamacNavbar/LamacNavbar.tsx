import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import brand from '../../static/images/lamac-text-transparent.svg';
import styles from './LamacNavbar.module.css';

function LamacNavbar({ brandDelayed = false }) {
  return (
    <Navbar className={styles.Navbar} expand="lg">
      <Container>
        <Navbar.Brand href='/' className={brandDelayed ? styles.DelayedNavBrand : ''}>
          <Image src={brand} width={250} alt="LaMaC Logo White" priority />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Sobre</Nav.Link>
            <NavDropdown
              title="Linhas de Pesquisa"
              id="research-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/research/computer-graphics">Computação Gráfica</NavDropdown.Item>
              <NavDropdown.Item href="/research/image-processing">Processamento de Imagens</NavDropdown.Item>
              <NavDropdown.Item href="/research/machine-learning">Aprendizado de Máquina</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Tutoriais"
              id="tutorials-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/tutorials/math">Matemática</NavDropdown.Item>
              <NavDropdown.Item href="/tutorials/">Programação</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact-us">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LamacNavbar;
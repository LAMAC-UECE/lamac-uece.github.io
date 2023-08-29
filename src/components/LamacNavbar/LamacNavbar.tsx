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
            {/* Home */}
            <Nav.Link href="/">Home</Nav.Link>

            {/* About */}
            <Nav.Link href="/about" className='d-lg-none'>Sobre o LaMaC</Nav.Link>
            <NavDropdown
              title="Informações"
              id="research-nav-dropdown"
              renderMenuOnMount={true}
              onToggle={() => window.location.href='/about'}
              className='d-none d-lg-block'
            >
              <NavDropdown.Item href="/about#lamac">Sobre o LaMaC</NavDropdown.Item>
              <NavDropdown.Item href="/about#computational-math">O que é Matemática Computacional</NavDropdown.Item>
              <NavDropdown.Item href="/about#infrastructure">Infraestrutura do laboratório</NavDropdown.Item>
              <NavDropdown.Item href="/about#research-areas">Linhas de pesquisa</NavDropdown.Item>
              <NavDropdown.Item href="/about#team">Nossa equipe</NavDropdown.Item>
            </NavDropdown>

            {/* Tutorials */}
            <Nav.Link href="/about" className='d-lg-none'>Tutoriais</Nav.Link>
            <NavDropdown
              id="tutorials-nav-dropdown"
              title="Tutoriais"
              renderMenuOnMount={true}
              onToggle={() => window.location.href='/tutorials'}
              className='d-none d-lg-block'
            >
              <NavDropdown.Header>Matemática</NavDropdown.Header>
              <NavDropdown.Item href="/tutorials/linear-algebra">Álgebra Linear</NavDropdown.Item>
              <NavDropdown.Item href="/tutorials/numerical-calculus">Cálculo Numérico</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Header>Programação</NavDropdown.Header>
              <NavDropdown.Item href="/tutorials/data-visualization">Visualização de Dados (Matplotlib)</NavDropdown.Item>
              <NavDropdown.Item href="/tutorials/image-processing">Processamento de Imagens (OpenCV)</NavDropdown.Item>
              <NavDropdown.Item href="/tutorials/computer-graphics">Computação Gráfica (WebGL)</NavDropdown.Item>
              <NavDropdown.Item href="/tutorials/machine-learning">Machine Learning (PyTorch)</NavDropdown.Item>
            </NavDropdown>

            {/* Productions */}
            <Nav.Link href="/productions">Produções</Nav.Link>

            {/* Contact */}
            <Nav.Link href="#contact-us">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LamacNavbar;
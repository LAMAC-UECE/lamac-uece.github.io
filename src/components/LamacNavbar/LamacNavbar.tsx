"use client";

import React, { useEffect, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import brand from '../../static/images/lamac-text-transparent.svg';
import styles from './LamacNavbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';
import { RiArticleLine } from 'react-icons/ri';
import { BsChatDots, BsInfoCircle } from 'react-icons/bs';
import { getCookie } from '../../static/ts/cookiesAPI';

function LamacNavbar() {
  const [brandDelayed, setBrandDelayed] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      if (!(getCookie("disableIntro") || sessionStorage.getItem("introPlayed"))) {
        setBrandDelayed(true);
      }
    }
  }, [])

  const HomeTitle = (<span><AiOutlineHome /> Home</span>);
  const AboutTitle = (<span><BsInfoCircle /> Informações</span>);
  const TutorialsTitle = (<span><VscBook /> Tutoriais</span>);
  const ProductionsTitle = (<span><RiArticleLine /> Produções</span>);
  const ContactTitle = (<span><BsChatDots /> Contato</span>);

  return (
    <Navbar className={styles.Navbar} expand="lg">
      <Container>
        <Navbar.Brand href='/' className={brandDelayed ? styles.DelayedNavBrand : ''}>
          <Image src={brand} width={250} alt="LaMaC Logo White" priority />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className={brandDelayed ? styles.NavbarToggleDelayed : ''} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${styles.NavbarNav} ${styles.NavbarCollapse} ${brandDelayed ? styles.NavbarNavDelayed : ''}`}
        >
          <Nav className={"ms-auto"}>
            {/* Home */}
            <Nav.Link href="/">{HomeTitle}</Nav.Link>

            {/* About */}
            <Nav.Link href="/about" className='d-lg-none'>{AboutTitle}</Nav.Link>
            <NavDropdown
              title={AboutTitle}
              id="research-nav-dropdown"
              renderMenuOnMount={true}
              onToggle={() => window.location.href = '/about'}
              className='d-none d-lg-block'
            >
              <NavDropdown.Header>Informações Gerais</NavDropdown.Header>
              <NavDropdown.Item href="/about#lamac">Sobre o LaMaC</NavDropdown.Item>
              <NavDropdown.Item href="/about#computational-math">O que é Matemática Computacional</NavDropdown.Item>
              <NavDropdown.Item href="/about#team">Nossa equipe</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Header>Linhas de Pesquisa</NavDropdown.Header>
              <NavDropdown.Item href="/about#research-areas-ai">Inteligência Artificial</NavDropdown.Item>
              <NavDropdown.Item href="/about#research-areas-ip">Processamento de Imagens</NavDropdown.Item>
              <NavDropdown.Item href="/about#research-areas-cg">Computação Gráfica</NavDropdown.Item>
            </NavDropdown>

            {/* Tutorials */}
            <Nav.Link href="/tutorials" className='d-lg-none'>{TutorialsTitle}</Nav.Link>
            <NavDropdown
              id="tutorials-nav-dropdown"
              title={TutorialsTitle}
              renderMenuOnMount={true}
              onToggle={() => window.location.href = '/tutorials'}
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
            <Nav.Link href="/productions">{ProductionsTitle}</Nav.Link>

            {/* Contact */}
            <Nav.Link href="/contact">{ContactTitle}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LamacNavbar;
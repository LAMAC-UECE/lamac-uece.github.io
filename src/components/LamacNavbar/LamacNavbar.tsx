"use client";

import React, { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Image from "next/image";
import brand from "/public/images/logo-blue.svg";
import styles from "./LamacNavbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { RiArticleLine } from "react-icons/ri";
import { BsChatDots, BsInfoCircle } from "react-icons/bs";
import { getCookie } from "../../static/ts/cookiesAPI";
import { applyDarkTheme } from "../ConfigsModal/ConfigsModal";

function LamacNavbar() {
  const [brandDelayed, setBrandDelayed] = useState(false);

  useEffect(() => {
    if (getCookie("darkTheme")) applyDarkTheme();

    if (window.location.pathname === "/") {
      if (
        !(getCookie("disableIntro") || sessionStorage.getItem("introPlayed"))
      ) {
        setBrandDelayed(true);
      }
    }
  }, []);

  const HomeTitle = (
    <span>
      <AiOutlineHome /> Home
    </span>
  );
  const AboutTitle = (
    <span>
      <BsInfoCircle /> Informações
    </span>
  );
  const TutorialsTitle = (
    <span>
      <VscBook /> Tutoriais
    </span>
  );
  const ProductionsTitle = (
    <span>
      <RiArticleLine /> Produções
    </span>
  );
  const ContactTitle = (
    <span>
      <BsChatDots /> Contato
    </span>
  );

  return (
    <Navbar className={styles.Navbar} expand="lg">
      <Container>
        <Navbar.Brand
          href="/"
          className={`${styles.SmallNavBrand} ${
            brandDelayed ? styles.DelayedNavBrand : ""
          }`}
        >
          <Image
            id="lamac-navbrand"
            src={brand}
            className={`d-lg-none ${styles.SmallNavBrandImg}`}
            alt="LaMaC Logo White"
            priority
          />
          <Image
            id="lamac-navbrand-sm"
            src={brand}
            className="d-none d-lg-block"
            width={350}
            alt="LaMaC Logo White"
            priority
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={brandDelayed ? styles.NavbarToggleDelayed : ""}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${styles.NavbarNav} ${styles.NavbarCollapse} ${
            brandDelayed ? styles.NavbarNavDelayed : ""
          }`}
        >
          <Nav className={"ms-auto"}>
            {/* Home */}
            <Nav.Link href="/">{HomeTitle}</Nav.Link>

            {/* About */}
            <Nav.Link href="/about" className="d-lg-none">
              {AboutTitle}
            </Nav.Link>
            <NavDropdown
              title={AboutTitle}
              id="research-nav-dropdown"
              renderMenuOnMount={true}
              onToggle={() => (window.location.href = "/about")}
              className="d-none d-lg-block"
            >
              <NavDropdown.Item href="/about#lamac">
                Sobre o LaMaC
              </NavDropdown.Item>
              <NavDropdown.Item href="/about#computational-math">
                O que é Matemática Computacional
              </NavDropdown.Item>
              <NavDropdown.Item href="/about#research-areas">
                Linhas de Pesquisa
              </NavDropdown.Item>
              <NavDropdown.Item href="/about#team">
                Nossa equipe
              </NavDropdown.Item>
            </NavDropdown>

            {/* Tutorials */}
            <Nav.Link
              href="https://github.com/lamac-uece/tutoriais-lamac"
              target="_blank"
              className="d-lg-none"
            >
              {TutorialsTitle}
            </Nav.Link>
            <NavDropdown
              id="tutorials-nav-dropdown"
              title={TutorialsTitle}
              renderMenuOnMount={true}
              onToggle={() =>
                (window.location.href =
                  "https://github.com/lamac-uece/tutoriais-lamac")
              }
              className="d-none d-lg-block"
            >
              <NavDropdown.Header>Matemática</NavDropdown.Header>
              <NavDropdown.Item href="https://github.com/LAMAC-UECE/tutoriais-lamac/tree/main/algebra_linear">
                Álgebra Linear
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/lamac-uece/tutoriais-lamac/tree/main/calculo_numerico">
                Cálculo Numérico
              </NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Header>Computação</NavDropdown.Header>
              <NavDropdown.Item href="https://github.com/lamac-uece/tutoriais-lamac/tree/main/python">
                Programação em Python
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/lamac-uece/tutoriais-lamac/tree/main/processamento_de_imagens">
                Processamento de Imagens
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/lamac-uece/tutoriais-lamac/tree/main/redes_neurais_artificiais">
                Redes Neurais Artificiais
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/lamac-uece/tutoriais-lamac/tree/main/computacao_grafica">
                Computação Gráfica
              </NavDropdown.Item>
            </NavDropdown>

            {/* Productions */}
            {/* <Nav.Link href="/productions">{ProductionsTitle}</Nav.Link> */}

            {/* Contact */}
            <Nav.Link href="/contact">{ContactTitle}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LamacNavbar;

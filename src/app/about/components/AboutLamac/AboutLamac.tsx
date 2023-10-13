import React from "react";
import styles from "./AboutLamac.module.css";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";

function AboutLamac() {
  return (
    <InfoContainer>
      <InfoContainer.Title>Sobre o LaMaC</InfoContainer.Title>
      <InfoContainer.Body>
        <div id="lamac" className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p>
              O Laboratório de Matemática Computacional (LaMaC), vinculado ao
              curso de Ciência da Computação do Centro de Ciências e Tecnologia
              (CCT) da{" "}
              <a href="https://www.uece.br/" target="_blank">
                Universidade Estadual do Ceará (UECE)
              </a>
              , foi fundado em 2008 pelo Professor associado{" "}
              <a
                href="https://www.escavador.com/sobre/2736522/thelmo-pontes-de-araujo"
                target="_blank"
              >
                Thelmo Pontes de Araújo, PhD
              </a>
              , do curso de Matemática. O laboratório concentra suas principais
              atividades no desenvolvimento de software e de pesquisas
              científicas nas áreas de Inteligência Computacional (com
              aprendizado de máquina profundo) para reconhecimento e
              classificação de imagens e voz, bem como em Processamento Digital
              de Imagens e Computação Gráfica aplicadas em imagens médicas.
            </p>
          </div>

          <div className={styles.imageContent}>
            <img src="/images/lamac-uece.png" alt="LaMaC" />
          </div>
        </div>
      </InfoContainer.Body>
    </InfoContainer>
  );
}

export default AboutLamac;

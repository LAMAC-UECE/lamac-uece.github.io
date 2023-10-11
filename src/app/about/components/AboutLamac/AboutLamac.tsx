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
              , foi fundado pelo Professor associado{" "}
              <a
                href="https://www.escavador.com/sobre/2736522/thelmo-pontes-de-araujo"
                target="_blank"
              >
                Thelmo Pontes de Araújo, PhD
              </a>
              , do curso de Matemática. O laboratório se
              concentra em atividades de pesquisa científica e desenvolvimento
              de software nas áreas de Inteligência Computacional com
              aprendizado profundo de máquina, Processamento Digital de Imagens
              e Computação Gráfica.
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

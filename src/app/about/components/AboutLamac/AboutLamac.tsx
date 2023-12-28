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
              <a href="https://www.uece.br/" target="_blank" rel="noreferrer">
                Universidade Estadual do Ceará (UECE)
              </a>
              , foi fundado em 2008 pelo Professor associado{" "}
              <a
                href="https://www.escavador.com/sobre/2736522/thelmo-pontes-de-araujo"
                target="_blank"
                rel="noreferrer"
              >
                Thelmo Pontes de Araújo, PhD
              </a>
              , do curso de Matemática.<br></br>
              <br></br> O laboratório concentra suas principais atividades no
              desenvolvimento de <i>software</i> científico e pesquisas nas
              áreas de Inteligência Computacional (aprendizado profundo),
              Processamento de Imagens e Computação Gráfica. Para a condução
              efetiva das atividades de pesquisa, empregamos diversas
              disciplinas da matemática e suas implementações computacionais,
              tais como Álgebra Linear, Cálculo, Métodos Numéricos, Geometria
              Analítica, Matemática Discreta, entre outras.
            </p>
          </div>

          <div className={styles.imageContent}>
            <img src="/images/logo-white-uece.svg" alt="LaMaC" />
          </div>
        </div>
      </InfoContainer.Body>
    </InfoContainer>
  );
}

export default AboutLamac;

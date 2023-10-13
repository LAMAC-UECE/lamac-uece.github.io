import React from "react";
import styles from "./ComputationalMathematics.module.css";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";

function ComputationalMathematics() {
  return (
    <InfoContainer>
      <InfoContainer.Title>
        O que é Matemática Computacional?
      </InfoContainer.Title>
      <InfoContainer.Body>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <p>
              A Matemática Computacional é uma área que busca resolver problemas
              complexos utilizando ferramentas e métodos computacionais e
              matemáticos. Seu objetivo principal é implementar técnicas
              matemáticas em forma de algoritmos eficientes que solucionem
              problemas reais, abrangendo áreas diversas, tanto das ciências
              exatas quanto de outros domínios do conhecimento. Isso envolve a
              criação de modelos matemáticos, a implementação de métodos
              numéricos e o desenvolvimento de software para realizar cálculos,
              simulações, análises numéricas e visualizações.
            </p>
            <p>
              A Matemática Computacional desempenha um papel essencial em uma
              ampla variedade de campos, incluindo física, engenharia, ciências
              sociais, saúde, finanças, ciência de dados e muitas outras
              disciplinas que exigem análises quantitativas. Além disso, a
              disciplina desempenha um papel fundamental na área de segurança da
              informação, em especial na criptografia, onde algoritmos
              matemáticos são usados para proteger informações, controlar o
              acesso e garantir a integridade dos dados.
            </p>
            <p>
              Profissionais da Matemática Computacional possuem uma visão
              combinada da matemática e da computação, o que lhes permite
              abordar problemas que demandam conhecimento em ambas as
              disciplinas. Suas oportunidades de carreira são diversas e incluem
              instituições de pesquisa, empresas financeiras e empresas de
              tecnologia, bem como a possibilidade de colaboração com outras
              áreas do conhecimento.
            </p>
          </div>
        </div>
      </InfoContainer.Body>
    </InfoContainer>
  );
}

export default ComputationalMathematics;

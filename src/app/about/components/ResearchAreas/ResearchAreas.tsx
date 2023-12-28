import React from "react";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import style from "./ResearchAreas.module.css";

function ResearchAreas() {
  return (
    <InfoContainer>
      <InfoContainer.Title>Linhas de Pesquisa</InfoContainer.Title>
      <InfoContainer.Body>
        <div className={style.ContentWrapper}>
          <div className={`${style.TextWrapper} text-center text-lg-start`}>
            <h3>Inteligência Artificial</h3>
            <div style={{ textAlign: "justify" }}>
              <p>
                A Inteligência Artificial (IA) é um campo da ciência da
                computação que busca desenvolver sistemas capazes de realizar
                tarefas que normalmente exigiriam inteligência humana. Entre as
                técnicas mais utilizadas na IA, destacam-se as Redes Neurais
                Artificiais (RNAs), inspiradas no funcionamento do cérebro
                humano.
              </p>
              <p>
                As RNAs são modelos computacionais compostos por neurônios
                artificiais interconectados em camadas. Cada neurônio processa
                informações e transmite sinais para os neurônios da camada
                seguinte, permitindo a aprendizagem e a tomada de decisões
                baseadas nos dados de entrada.
              </p>
              <p>
                As pesquisas do LaMaC, baseadas em RNAs, têm foco em diversas
                aplicações, incluindo reconhecimento de imagens e voz, onde
                algoritmos são treinados para identificar padrões e
                características em imagens e áudios; localização e classificação
                de objetos, usando técnicas para identificar e categorizar
                elementos em ambientes diversos; e processamento de linguagem
                natural, permitindo que máquinas compreendam, analisem e gerem
                linguagem humana.
              </p>
            </div>
          </div>
          <div className={style.ImageContent}>
            <img src="/gifs/ai_detection.gif" alt="AI Example" />
          </div>
        </div>

        <div className={style.ContentWrapper}>
          <div className={`${style.ImageContent} d-none d-lg-flex`}>
            <img
              src="/gifs/tc-ip.gif"
              alt="Img Processing Example"
              style={{borderRadius: 9999, maxWidth: "85%"}}
            />
          </div>
          <div className={`${style.TextWrapper} text-center text-lg-end`}>
            <h3>Processamento de Imagens</h3>
            <div className={style.TextContent} style={{ textAlign: "justify" }}>
              <p>
                O processamento de imagens consiste em transformar uma imagem em
                forma digital e realizar operações específicas para obter
                informações úteis. Geralmente, os sistemas de processamento de
                imagens tratam todas as imagens como sinais bidimensionais,
                aplicando métodos pré-determinados de processamento de sinal.
                Entre suas principais categorias estão a visualização para
                identificar objetos não visíveis na imagem, o reconhecimento
                para detectar objetos nela, o aprimoramento/restauração para
                criar uma imagem aprimorada a partir da original, e o
                reconhecimento de padrões para medir diferentes padrões ao redor
                dos objetos na imagem.
              </p>
              <p>
                O Laboratório de Matemática Computacional (LaMaC) aplica
                técnicas avançadas de processamento de imagens no contexto da
                saúde. Especializa-se na segmentação de elementos, na
                identificação de regiões de interesse e na extração de
                características de imagens médicas. Essas aplicações têm o
                potencial de auxiliar diagnósticos ao permitir análises
                precisas, contribuindo para abordagens de tratamento mais
                personalizadas e eficazes.
              </p>
            </div>
          </div>

          <div className={`${style.ImageContent} d-flex d-lg-none`}>
            <img src="/gifs/tc-ip.gif" alt="Img Processing Example" />
          </div>
        </div>

        <div className={style.ContentWrapper}>
          <div className={`${style.TextWrapper} text-center text-lg-start`}>
            <h3>Computação Gráfica</h3>
            <div className={style.TextContent} style={{ textAlign: "justify" }}>
              <p>
                Computação Gráfica (CG) refere-se à geração, manipulação e
                exibição de imagens ou animações digitais. Ela envolve a criação
                de representações visuais de dados usando algoritmos e
                processamento de computador. A CG trata desde gráficos simples
                até simulações complexas de ambientes tridimensionais,
                permitindo a criação de mundos virtuais, efeitos visuais em
                filmes, jogos, entre outros.
              </p>
              <p>
                O Laboratório de Matemática Computacional (LaMaC) aplica a
                Computação Gráfica em diversas pesquisas, especialmente na área
                da saúde. Concentra-se na criação e manipulação de modelos
                tridimensionais, utilizando técnicas avançadas para gerar e
                aprimorar elementos visuais em imagens médicas. Essas aplicações
                contribuem para a análise detalhada de estruturas anatômicas,
                auxiliando em diagnósticos.
              </p>
            </div>
          </div>
          <div className={style.ImageContent}>
            <img src="/gifs/cg-skeleton.gif" alt="CG Example" />
          </div>
        </div>
      </InfoContainer.Body>
    </InfoContainer>
  );
}

export default ResearchAreas;

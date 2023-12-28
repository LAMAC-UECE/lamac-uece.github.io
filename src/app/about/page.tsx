"use client";

import React, { useState } from "react";
import AboutLamac from "./components/AboutLamac/AboutLamac";
import styles from "./About.module.css";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import ConfigsModal from "../../components/ConfigsModal/ConfigsModal";
import ConfigsGear from "../../components/ConfigsGear/ConfigsGear";
import ComputationalMathematics from "./components/ComputationalMathematics/ComputationalMathematics";
import OurTeam from "./components/OurTeam/OurTeam";
import ResearchAreas from "./components/ResearchAreas/ResearchAreas";

function About() {
  const [isConfigsModalVisible, setConfigsModalVisible] = useState(false);

  return (
    <div className={styles.AboutPage}>
      <InfoContainer>
        <div className={styles.Warning}>
          <h2>Aviso</h2>
          <InfoContainer.Body>
            Este site <b>não</b> é um veículo oficial da UECE, mas sim um
            projeto com fins puramente didáticos desenvolvido por, e para, a
            equipe do laboratório.
          </InfoContainer.Body>
        </div>
      </InfoContainer>

      <div id="lamac">
        <AboutLamac />
      </div>

      <div id="computational-math">
        <ComputationalMathematics />
      </div>

      <div id="research-areas">
        <ResearchAreas />
      </div>

      <div id="team">
        <OurTeam />
      </div>

      <ConfigsGear
        delayed={false}
        toggleConfigsModalVisibility={setConfigsModalVisible}
      />
      <ConfigsModal
        show={isConfigsModalVisible}
        setShow={setConfigsModalVisible}
      />
    </div>
  );
}

export default About;

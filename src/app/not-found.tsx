"use client";

import { Container } from "react-bootstrap";
import styles from "./not-found.module.css";
import { useState } from "react";
import ConfigsGear from "../components/ConfigsGear/ConfigsGear";
import ConfigsModal from "../components/ConfigsModal/ConfigsModal";

export default function Custom404() {
  const [isConfigsModalVisible, setConfigsModalVisible] = useState(false);

  return (
    <div className={styles.NotFoundPageContainer}>
      <Container className={styles.NotFoundContainer}>
        <div className="text-center">
          <h1>Ops...</h1>
          <h3>Esta página não existe.</h3>
          <a href="/">Voltar à página inicial</a>
        </div>
      </Container>
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

import React, { useEffect, useState } from 'react';
import styles from './ConfigsModal.module.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { deleteCookie, getCookie, setCookie } from '../../static/ts/cookiesAPI';

function ConfigsModal(props: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>; }) {
  const [allowCookies, setAllowCookies] = useState(false);
  const [disableIntro, setDisableIntro] = useState(false);

  useEffect(() => {
    if (getCookie("allowCookies")) {
      setAllowCookies(true);

      if (getCookie("disableIntro"))
        setDisableIntro(true);
    }
  }, []);

  const toggleCookiesAcceptance = () => {
    let newCookiesState = !allowCookies;
    setAllowCookies(newCookiesState);

    if (newCookiesState === true) {
      setCookie("allowCookies", "true", 365);
    } else {
      setDisableIntro(false);
      deleteCookie("allowCookies");
      deleteCookie("disableIntro");
    }
  };

  const toggleDisableIntro = () => {
    let newDisIntroState = !disableIntro;
    setDisableIntro(newDisIntroState);

    if (newDisIntroState === true) {
      setCookie("disableIntro", "true", 365);
    } else {
      deleteCookie("disableIntro");
    }
  };

  const CookiesSwitchLabel = (
    <span>
      Aceitar Cookies (<a href='/cookies-policy' target='_blank'>Política de Cookies</a>)
    </span>
  );

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      contentClassName={styles.ConfigsModal}
      centered
    >
      <Modal.Header>
        <Modal.Title>Configurações</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="allow-cookies-switch"
            label={CookiesSwitchLabel}
            checked={allowCookies}
            onChange={toggleCookiesAcceptance}
          />
          <Form.Check // prettier-ignore
            disabled={allowCookies ? false : true}
            type="switch"
            label="Desabilitar animação de introdução da página inicial (precisa dos cookies)"
            id="disable-intro-switch"
            checked={disableIntro}
            onChange={toggleDisableIntro}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          onClick={() => props.setShow(false)}
          variant="primary"
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfigsModal;
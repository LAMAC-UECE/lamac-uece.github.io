"use client";

import React, { useState } from "react";
import styles from "./cookies.module.css";
import ConfigsModal from "../../components/ConfigsModal/ConfigsModal";
import ConfigsGear from "../../components/ConfigsGear/ConfigsGear";

function CookiesPolicy() {
  const [isConfigsModalVisible, setConfigsModalVisible] = useState(false);

  return (
    <div className={styles.CookiesPageContainer}>
      <div className={styles.CookiesPageText}>
        <div className="text-center mb-4 mt-0">
          <h2>Política de Cookies</h2>
        </div>
        <div>
          <h4>O que são Cookies?</h4>
          <p>
            Este site utiliza cookies para oferecer uma experiência
            personalizada e mais eficiente. Os cookies são pequenos arquivos de
            texto armazenados em seu dispositivo para lembrar suas preferências
            e otimizar o funcionamento do site.
          </p>
        </div>
        <div>
          <h4>Propósito dos Cookies</h4>
          <p>
            Os cookies neste site são exclusivamente utilizados para reter as
            configurações de preferências dos usuários. Eles nos ajudam a
            oferecer um serviço mais adaptado às suas necessidades, lembrando
            suas escolhas e permitindo uma navegação mais fluida.
          </p>
        </div>
        <div>
          <h4>Tipos de Cookies Utilizados:</h4>
          <p>
            <b>Cookies de Preferências:</b> Esses cookies são essenciais para
            lembrar as preferências do usuário, como idioma e região, garantindo
            uma experiência personalizada.
          </p>
        </div>
        <div>
          <h4>Gerenciamento de Cookies:</h4>
          <p>
            É possível controlar e/ou excluir os cookies a qualquer momento. A
            maioria dos navegadores permite que você recuse ou aceite cookies.
            No entanto, ao desabilitar os cookies, algumas funcionalidades do
            site podem ser limitadas. Você pode habilitar ou desabilitar os
            Cookies neste site clicando no ícone de engrenagem no canto direito
            inferior da tela.
          </p>
        </div>
        <div>
          <h4>Consentimento:</h4>
          <p>
            Ao utilizar nosso site, ativando os Cookies nas configurações, você
            concorda com o uso de cookies de acordo com esta política. Seu
            consentimento é essencial para o funcionamento dos cookies neste
            site.
          </p>
        </div>
        <div>
          <h4>Atualizações na Política de Cookies:</h4>
          <p>
            Esta política de cookies pode passar por atualizações periodicamente
            para refletir mudanças em nossas práticas. Recomendamos revisar esta
            página regularmente para estar atualizado sobre nossas políticas
            mais recentes.
          </p>
        </div>
        <div>
          <h4>Contato:</h4>
          <p>
            Se tiver dúvidas ou preocupações sobre nossa política de cookies,
            entre em contato conosco através dos dados fornecidos na{" "}
            <a href="/contact">página de contato</a>. Obrigado por escolher
            nosso site e confiar em nós para fornecer uma experiência online
            personalizada e eficiente.
          </p>
        </div>
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

export default CookiesPolicy;

import React from "react";
import styles from "./OurTeam.module.css";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import ProfileCard from "../ProfileCard/ProfileCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OurTeam() {
  const cardsPerRow = 3;
  const teamMembers = [
    {
      name: "Thelmo Pontes de Araujo",
      description: "Professor Associado. Doutor.",
      links: [
        {
          name: "Lattes",
          url: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=E497539",
        },
        {
          name: "Escavador",
          url: "https://www.escavador.com/sobre/2736522/thelmo-pontes-de-araujo",
        },
      ],
    },
    {
      name: "Gabriel Furtado Lins Melo",
      description: "Discente de Mestrado. Bacharel.",
      links: [
        {
          name: "Lattes",
          url: "http://lattes.cnpq.br/0989380563059737",
        },
        {
          name: "GitHub",
          url: "https://github.com/GabrielLins64",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/gabrielfurtadolinsmelo/",
        },
      ],
    },
    {
      name: "Domingos Bruno Sousa Santos",
      description: "Discente de Doutorado. Mestre.",
      links: [],
    },
    {
      name: "Alberto Luian",
      description: "Discente de Graduação.",
      links: [],
    },
    {
      name: "Diogo",
      description: "Discente de Graduação.",
      links: [],
    },
    {
      name: "Victor Wilker",
      description: "Discente de Graduação.",
      links: [],
    },
    {
      name: "Carlos Estelita",
      description: "Discente de Graduação.",
      links: [],
    },
  ];

  const renderProfileCards = () => {
    return teamMembers.map((member, index) => (
      <Col key={index} md={12 / cardsPerRow}>
        <ProfileCard
          name={member.name}
          description={member.description}
          links={member.links}
        />
      </Col>
    ));
  };
  
  return (
    <InfoContainer>
      <InfoContainer.Title>Nossa Equipe</InfoContainer.Title>
      <InfoContainer.Body>
        <Row>{renderProfileCards()}</Row>
      </InfoContainer.Body>
    </InfoContainer>
  );
}

export default OurTeam;

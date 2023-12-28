import React from "react";
import styles from "./OurTeam.module.css";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import ProfileCard from "../ProfileCard/ProfileCard";
import Row from "react-bootstrap/Row";

function OurTeam() {
  const cardsPerRow = 3;
  const teamMembers = [
    {
      name: "Thelmo Pontes de Araujo",
      imgSrc: "/images/profiles/thelmo.jpg",
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
      name: "Gabriel Lins",
      imgSrc: "/images/profiles/gabriel.jpg",
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
    // {
    //   name: "Domingos Bruno",
    //   imgSrc: undefined,
    //   description: "Discente de Doutorado. Mestre.",
    //   links: [],
    // },
    // {
    //   name: "Victor Wilker",
    //   imgSrc: undefined,
    //   description: "Discente de Graduação.",
    //   links: [],
    // },
    {
      name: "Alberto Luian",
      imgSrc: "/images/profiles/alberto.jpg",
      description: "Discente de Graduação.",
      links: [
        {
          name: "Lattes",
          url: "http://lattes.cnpq.br/9709130130037571"
        }
      ],
    },
    // {
    //   name: "Diogo Nascimento",
    //   imgSrc: undefined,
    //   description: "Discente de Graduação.",
    //   links: [],
    // },
    // {
    //   name: "Carlos Estelita",
    //   imgSrc: undefined,
    //   description: "Discente de Graduação.",
    //   links: [],
    // },
    // {
    //   name: "Guilherme Artur",
    //   imgSrc: undefined,
    //   description: "Discente de Graduação.",
    //   links: [],
    // },
  ];

  const renderProfileCards = () => {
    return teamMembers.map((member, index) => (
      <ProfileCard
        key={index}
        name={member.name}
        imgSrc={member.imgSrc}
        description={member.description}
        links={member.links}
      />
    ));
  };

  return (
    <InfoContainer>
      <InfoContainer.Title>Nossa Equipe</InfoContainer.Title>
      <InfoContainer.Body>
        <Row>
          {renderProfileCards()}
        </Row>
      </InfoContainer.Body>
    </InfoContainer>
  );
}

export default OurTeam;

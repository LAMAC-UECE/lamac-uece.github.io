import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./ProfileCard.module.css";

function ProfileCard({
  imgSrc,
  name,
  description,
  links,
}: {
  imgSrc?: string;
  name: string;
  description?: string;
  links?: { name: string; url: string }[];
}) {
  const imageSource = imgSrc || "/images/no-profile.svg";

  return (
    <Card className={styles.ProfileCard}>
      <div>
        <Card.Img
          className={styles.ProfileCardImg}
          variant="top"
          src={imageSource}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {description && <Card.Text>{description}</Card.Text>}
          {links && links.length > 0 && <hr />}
          {links &&
            links.length > 0 &&
            links.map((link, index) => (
              <div key={index}>
                <Card.Link href={link.url} target="_blank">
                  {link.name}
                </Card.Link>
              </div>
            ))}
        </Card.Body>
      </div>
    </Card>
  );
}

export default ProfileCard;

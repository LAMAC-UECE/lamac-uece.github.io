import React from "react";
import styles from "./InfoContainer.module.css";

type Props = {
  children: JSX.Element|JSX.Element[];
  style?: React.CSSProperties;
};

function InfoContainer({ children, style }: Props) {
  return <div style={style} className={styles.InfoContainer}>{children}</div>;
}

InfoContainer.Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className={styles.InfoContainerTitle}>{children}</h2>
);

InfoContainer.Body = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.InfoContainerBody}>{children}</div>
);

export default InfoContainer;

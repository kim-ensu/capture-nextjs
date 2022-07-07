import React, { FC } from "react";
import styles from "styles/Hero.module.css";

type Props = {
  heading: string;
  message: string;
};

const Hero: FC<Props> = ({ heading, message }) => {
  return (
    <div className={styles.container}>
      {/* Overlay */}
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.text}>{message}</p>
        <button className={styles.button}>Book</button>
      </div>
    </div>
  );
};

export default Hero;

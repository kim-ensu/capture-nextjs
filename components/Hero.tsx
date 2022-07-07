import React, { FC } from "react";
import styles from "styles/Hero.module.css";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {/* Overlay */}
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Heading</h1>
        <p className={styles.text}>Message</p>
        <button className={styles.button}>Book</button>
      </div>
    </div>
  );
};

export default Hero;

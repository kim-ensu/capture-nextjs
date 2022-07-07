import React, { FC } from "react";
import styles from "styles/Hero.module.css";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {/* Overlay */}
      <div className={styles.overlay} />
      <div>
        <h1>Heading</h1>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Hero;

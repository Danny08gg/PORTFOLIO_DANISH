import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Danish</h1>
        <p className={styles.description}>
        I’m a recent IT Diploma graduate with hands-on experience 
        developing a web application. Skilled in web-app development, 
        problem-solving, and teamwork.
        </p>
        <a href="mailto:ahmaddanish0802@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Danish.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

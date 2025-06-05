import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ahmaddanish0802@gmail.com">ahmaddanish0802@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/Phone.png")}
            alt="Phone icon"
          />
          <a href="https://api.whatsapp.com/send?phone=601111912794&text=Hi%20Danish!Im%20interested%20to%20working%20with%20you!">+601111912794</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Danny08gg">github.com/Danny08gg</a>
        </li>
      </ul>
    </footer>
  );
};

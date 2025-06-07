import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const sites = [
    /*{ name: "facebook-f", url: "https://www.facebook.com/yourprofile", platform: "facebook" },*/
    /*{ name: "twitter", url: "https://www.twitter.com/yourprofile", platform: "twitter" },*/
    { name: "linkedin-in", url: "https://www.linkedin.com/in/ahmad-danish-0188a7366/", platform: "linkedin" },
    { name: "google", url: "mailto:ahmaddanish0802@gmail.com", platform: "email" },
    { name: "github", url: "https://www.github.com/Danny08gg", platform: "github" },
    { name: "whatsapp", url: "https://api.whatsapp.com/send?phone=601111912794&text=Hi%20Danish!Im%20interested%20to%20working%20with%20you!", platform: "whatsapp" },
  ];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.socialList}>
        {sites.map((site) => (
          <li key={site.name} className={styles.socialItem}>
            <a
              href={site.url}
              className={`${styles.socialLink} ${styles[site.platform]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${site.name} ${styles.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
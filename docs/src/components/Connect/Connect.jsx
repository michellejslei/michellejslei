import React from 'react'
import styles from "./Connect.module.css";

const Connect = () => {
  return <section className={styles.container} id="connect">
  <h2 className={styles.title}>let's connect!</h2>
  <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/michellejslei/"><i class='bx bxl-linkedin-square' ></i></a>
        <a href="https://github.com/michellejslei"><i class='bx bxl-github' ></i></a>
        <a href="mailto:michellejslei@gmail.com"><i class='bx bx-envelope' ></i></a>
    </div>
  </section>
};

export default Connect
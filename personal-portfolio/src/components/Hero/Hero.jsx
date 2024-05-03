import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Michelle! </h1>
        <h3 className={styles.description}>
            I'm a <span></span>
        </h3>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/michellejslei/"><i class='bx bxl-linkedin-square' ></i></a>
          <a href="https://github.com/michellejslei"><i class='bx bxl-github' ></i></a>
          <a href="mailto:michellejslei@gmail.com"><i class='bx bx-envelope' ></i></a>
        </div>
    </div>
    <img src={getImageUrl("hero/headshot.png")} alt="picture of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
};

export default Hero
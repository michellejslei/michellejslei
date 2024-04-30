import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Michelle</h1>
        <p className={styles.description}>
            I'm a computer science student at the University of British Columbia
        </p>
        <a href="mailto:michellejslei@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/headshot.png")} alt="picture of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
};

export default Hero
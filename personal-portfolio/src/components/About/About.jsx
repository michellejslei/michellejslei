import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>
        <img 
        src={getImageUrl("hero/headshot.png")}
        alt="michelle sitting"
        className={styles.aboutImage}
        />
        <h2 className={styles.aboutItem}>
            Hi there!
        </h2>
        <p className={styles.aboutItem}>
            I'm Michelle, and welcome to my website! I'm a third year student @ UBC studying Computer Science, and a BSc. Neuroscience & Physiology graduate from UBC.
        </p>
    </div>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
};

export default About
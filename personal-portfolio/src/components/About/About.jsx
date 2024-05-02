import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>
        <img 
        src={getImageUrl("hero/gradphoto.png")}
        alt="michelle sitting"
        className={styles.aboutImage}
        />
        <div className={styles.textGroup}> 
          <p className={styles.aboutItem}>
              Hi there!
              <br/><br/>
              I'm Michelle, and welcome to my website! I'm a third year student @ UBC studying Computer Science, and a BSc. Neuroscience & Physiology graduate from UBC.
              <br/><br/>
              I've worked in both healthcare and finance before discovering my love for tech!
              <br/><br/>
              I love meeting new people, so please feel free to reach out! Let's chat! 
          </p>
        </div>
    </div>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
};

export default About
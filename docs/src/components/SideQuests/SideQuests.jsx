import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./SideQuests.module.css";

const SideQuests = () => {
  return (
    <section className={styles.container} id="sidequests">
      <h2 className={styles.title}># side quests</h2>
      <div className={styles.content}>
        {/* <img 
          src={getImageUrl("hero/gradphoto.png")}
          alt="michelle sitting"
          className={styles.aboutImage}
        /> */}
        <div className={styles.textGroup}> 
          <p className={styles.aboutItem}>
              Hi there!
              <br/><br/>
              I'm Michelle, and welcome to my website! I'm a third year student @ UBC studying Computer Science, and a BSc. Neuroscience & Physiology graduate from UBC.
              <br/><br/>
              I worked in both healthcare and finance before discovering my love for tech. In my free time, I enjoy working on new projects and exploring the outdoors!
              <br/><br/>
              I love meeting new people, so please feel free to reach out! Let's chat! 
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideQuests
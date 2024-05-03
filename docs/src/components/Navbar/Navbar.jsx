import React, { useState } from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
    const [ menuOpen, setMenuOpen ] = useState(false)

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
            Michelle Lei
        </a>
        <div className={styles.menu}>
            {/* <img 
                className={styles.menuBtn} 
                src={menuOpen 
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")} 
                alt="menu-button" 
                onClick={() => setMenuOpen(!menuOpen)}
            /> */}
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="/#about">about</a>
                </li>
                <li>
                    <a href="/#experiences">experiences</a>
                </li>
                <li>
                    <a href="/#projects">projects</a>
                </li>
                {/* <li>
                    <a href="/#sidequests">side quests</a>
                </li> */}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
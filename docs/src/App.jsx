import { useState } from 'react';

import styles from './App.module.css'
import About from './components/About/About'
import Connect from './components/Connect/Connect'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import SideQuests from './components/SideQuests/SideQuests'

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <div className={styles.App}>
      {/* {loading ? (
        <LoadingScreen onLoaded={handleLoaded} />
      ) : ( */}
        <>
          <Navbar />
          <div className={styles.main}>
            <Hero />
            <About />
            <Experience />
            <Projects />
            {/* <SideQuests /> */}
            <Connect />
          </div>
          <Footer />
        </>
      {/* )} */}
    </div>
  );
}

export default App

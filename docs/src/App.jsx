import styles from './App.module.css'
import About from './components/About/About'
import Connect from './components/Connect/Connect'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Connect />
      </div>
      <Footer />
    </div>
  )
}

export default App

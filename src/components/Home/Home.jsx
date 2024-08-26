import React from 'react'
import hero from '../../images/landimg.png';
import './Home.css'; 
import Skills from '../Experience/Skills';

const Home = () => {
  return (
    <div className="home">

      <header className="header-section">
        <div className="header-text">
          <h1>Hi, I'm Muni Kiran</h1>
  
          <h3>Frontend Web Developer</h3>
          <br /><br />
          <a target="_blank" href="https://drive.google.com/file/d/1dLqeoBFxnPRrk1oUF7HU93v1-Rlc9n8-/view?usp=sharing" className="cta"> Download Resume </a>
        </div>

        <div className="header-image">
          <img src={hero} alt="Hero background" />
        </div>

      </header>
      <h1 style={{color:'pink', textAlign:'center'}} >TECH IAM GOOD AT</h1>
      <Skills/>

    </div>
  )
}

export default Home
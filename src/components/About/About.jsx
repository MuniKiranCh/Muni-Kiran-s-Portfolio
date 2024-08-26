import React from 'react';
import profile from '../../images/hero.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-image-container">
        <img src={profile} alt="Muni Kiran" className="profile-image" />
      </div>
      <div className="about-content">
        <h1>Hello, I am Muni Kiran</h1>
        <p>
          I'm currently studying 3rd year at the National Institute of Technology Karnataka (NITK).
          I am a passionate and aspiring software developer with a strong background in computer science.
          I am excited to contribute to a dynamic and innovative team where I can learn and grow.
          I have proficiency in C, C++, and JavaScript and expertise in frameworks like React and Node.js.
          I am currently learning Full Stack Development. Let's work together to bring your ideas to life!
        </p>
        <a style={{marginRight:'300px'}} href="https://drive.google.com/file/d/1dLqeoBFxnPRrk1oUF7HU93v1-Rlc9n8-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta">Download Resume</a>
      </div>
    </div>
  );
}

export default About;

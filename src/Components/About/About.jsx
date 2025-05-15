import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile_img.png'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
       <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm a frontend developer with a passion for building clean, responsive, and intuitive web applications. I enjoy crafting user-focused designs using HTML, CSS, JavaScript, and React, and I’m always eager to enhance user experience through thoughtful design and performance optimization. I continuously seek out new challenges and projects to improve my skills and stay updated with the latest in frontend development</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p>HTML & CSS</p> <hr  style={{width:"max(40vw,25px)"}}/></div>
                <div className="about-skill"><p>React JS</p> <hr  style={{width:"max(45vw,30px)"}}/></div>
                <div className="about-skill"><p>Javascript</p> <hr  style={{width:"max(35vw,20px)"}}/></div>
                <div className="about-skill"><p>DBMS</p> <hr  style={{width:"max(50vw,35px)"}}/></div>
                <div className="about-skill"><p>C++</p> <hr  style={{width:"max(50vw,35px)"}}/></div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About

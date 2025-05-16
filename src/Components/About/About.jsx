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
                    <div className="about-tech-stack">
                        <h2>Tech Stack</h2>
                        <div className="tech-icons">
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                                <p>HTML</p>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                                <p>CSS</p>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                <p>JavaScript</p>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <p>React</p>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="DBMS" />
                                <p>DBMS</p>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                                <p>C++</p>
                            </div>
                                <div className="tech-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                                    <p>C</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            )
}

            export default About

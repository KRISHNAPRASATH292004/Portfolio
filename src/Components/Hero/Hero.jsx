import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import {Link as Anchorlink} from 'react-scroll'
const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Krishnaprasath T,</span>Frontend developer</h1>
        <p>Frontend developer focused on building responsive and user-friendly web interfaces</p>
        <div className="hero-action">
            <div className="hero-connect"> <Anchorlink to='contact'smooth={true} duration={500}>Connect with me</Anchorlink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/10s2PNoe6tAI30FlLJ8tby4gxW1kSJAp7/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">My resume</a></div>
        </div>
    </div>
  )
}

export default Hero

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import {Link as Anchorlink} from 'react-scroll'
const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <img src={profile_img} alt="" />
        <h1> <span> Hey, I'm Krishnaprasath, </span>Frontend developer</h1>
        <p>Frontend developer focused on building responsive and user-friendly web interfaces</p>
        <div className="hero-action">
            <div className="hero-connect"> <Anchorlink to='contact'smooth={true} duration={500}>Connect with me</Anchorlink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1DEfYFaGBvtztKrUsXzOJ9FwTaRlc-dnd/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">My resume</a></div>
        </div>
    </div>
  )
}

export default Hero

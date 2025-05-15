import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-left-title">
                                    <h1>Krishnaprasath</h1>
                                    <img src={theme_pattern} alt="" />
                        </div>
                <p>Frontend developer focused on building responsive and user-friendly web interfaces</p>
            </div>
        </div>
        <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Krishnaprasath. All rights are reserved</p>
        <div className="footer-bottom-right">
            <p>Terms of services</p>
            <p>Privacy Policy</p>
            <p>Contact with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

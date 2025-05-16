import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linked_icon from '../../assets/icons8-linkedin.gif'
import github_icon from '../../assets/github.png'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "74c8c4cd-846e-42e4-bd69-0081b18a504a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset();
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm always open to discussing new opportunities, collaborations, or just having a tech chat. Feel free to reach out through any of the following channels</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>
                 <a href="mailto:krishnaprasth292004@gmail.com" target="_blank" rel="noopener noreferrer">krishnaprasth292004@gmail.com</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p><a href="tel:9344860310">9344860310</a></p>
            </div>
            <div className="contact-detail">
              <img src={linked_icon} alt="" />
              <p><a href="https://www.linkedin.com/in/krishna-prasath-t-839862227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
            </div>
              <div className="contact-detail">
              <img src={github_icon} alt="" />
              <p><a href="https://github.com/KRISHNAPRASATH292004" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button className='submit' type='submit'>Submit now</button>
        </form>
      </div>

    </div>
  )
}

export default Contact

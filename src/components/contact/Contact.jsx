import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_io57udj', 'template_wea55di', form.current, 'kb7OoE_Mco4UGeWX0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>umpacan0902@gmail.com</h5>
            <a href="mailto:umpacan0902@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Michael Umpacan</h5>
            <a href="https://m.me/katuray25" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+63928 576 0231</h5>
            <a href="https://api.whatsapp.com/send?phone=09285760231" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
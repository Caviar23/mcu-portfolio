import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../../assets/MULator.png";



const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer_logo'><img src={logo} alt="logo" /></a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; MikeU 2023. All rights reserved</small>
      </div>
    </footer>
    
  )
}

export default Footer


{/* <div className="footer_socials">
<a href="https://facebook.com"><FaFacebook /></a>
<a href="https://instagram.com"><FaInstagramSquare /></a>
<a href="https://twitter.com"><FaTwitter /></a>
</div> */}

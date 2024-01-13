import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
     <div className='header_socials'>
      <a href="https://www.linkedin.com/in/michael-umpacan-54a680145/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/Caviar23" target='_blank'><FaGithub /></a>
      <a href="https://dribbble.com" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials
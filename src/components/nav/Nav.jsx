import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav> 
      <a href="#" title='Home' onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" title='About' onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" title='Skills' onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
      <a href="#services" title='Services' onClick={() => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#projects" title='Projects' onClick={() => setActiveNav('#projects')} className={ activeNav === '#projects' ? 'active' : ''}><GoProjectSymlink  /></a>
      <a href="#contact" title='Contact' onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav
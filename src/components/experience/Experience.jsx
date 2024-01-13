import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";






const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaHtml5 className='experience_details-icon' />
              <h4>HTML</h4>
            </article>
            <article className="experience_details">
              <FaCss3Alt className='experience_details-icon' />
              <h4>CSS</h4>
            </article>
            <article className="experience_details">
              <TbBrandJavascript className='experience_details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <FaReact className='experience_details-icon' />
              <h4>React</h4>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className='experience_details-icon' />
                <h4>Node JS</h4>
            </article>
            <article className="experience_details">
              <SiMongodb className='experience_details-icon' />
                <h4>MongoDB</h4>
            </article>
            <article className="experience_details">
              <GrMysql className='experience_details-icon' />
                <h4>MySQL</h4>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
                <h4>APIs</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
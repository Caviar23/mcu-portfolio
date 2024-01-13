import React from 'react'
import './about.css'
import AboutMe from '../../assets/ABOUTME.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={AboutMe} alt="About Me Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">

              <h5><FaAward className='about_icon' />Independent Learning Journey</h5>
            </article>

            <p>
              My journey into front-end development started with a personal commitment to learning and creating. Through self-directed learning, I have gained proficiency in HTML, CSS, and JavaScript, and I continue to deepen my knowledge through continuous exploration of emerging technologies.
            </p>

            <article className="about_card">
              <h5><FiUsers className='about_icon' />Portfolio of Personal Projects</h5>
            </article>

            <p>
              I have a diverse portfolio of personal projects that showcases my ability to design and implement responsive and visually appealing websites. These projects, ranging from interactive web pages to small-scale applications, highlight my dedication to mastering the craft and applying it in practical scenarios.
            </p>

            <article className="about_card">
              <h5><VscFolderLibrary className='about_icon' />Problem-Solving Acumen</h5>
            </article>

            <p>
              Being self-taught has instilled in me a robust problem-solving mindset. I am accustomed to navigating challenges independently, which has not only strengthened my technical skills but also fostered adaptability and resilience in the face of evolving project requirements.
            </p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
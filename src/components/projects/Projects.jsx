import React from 'react'
import './projects.css'
import Img1 from '../../assets/keeper.png'
import Img2 from '../../assets/simon.png'
import Img3 from '../../assets/e-commerce.png'
import Img4 from '../../assets/tictactoe.png'
import Img5 from '../../assets/quote.png'
import Img6 from '../../assets/weather.png'
import Img7 from '../../assets/drumkit.png'
import Img8 from '../../assets/tindog.png'
import Img9 from '../../assets/dice.png'
import Img10 from '../../assets/zoom.png'
import Img11 from '../../assets/nba2k.png'
import Img12 from '../../assets/udemy.png'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";

const fe_data = [
  {
    id: 1,
    image: Img1,
    title: 'Keeper App',
    github: 'https://github.com/Caviar23/keeper-app',
    demo: 'https://mikeumpacan-keeper-app.vercel.app/',
    react: <FaReact />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  },
  {
    id: 2,
    image: Img2,
    title: 'Simon Game',
    github: 'https://github.com/Caviar23/simon_game',
    demo: 'https://caviar23.github.io/simon_game/',
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  }, ,
  {
    id: 3,
    image: Img3,
    title: 'E-Commerce Website',
    github: 'https://github.com/Caviar23/e-commerce',
    demo: 'https://mikeumpacan-ecommerce.vercel.app/',
    react: <FaReact />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  },
  {
    id: 4,
    image: Img4,
    title: 'Tic-Tac-Toe Game',
    github: 'https://github.com/Caviar23/tic-tac-toe',
    demo: 'https://mikeumpacan-tic-tac-toe.vercel.app/',
    react: <FaReact />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  },
  {
    id: 5,
    image: Img5,
    title: 'Random Quote Generator',
    github: 'https://github.com/Caviar23/random-quote',
    demo: 'https://mikeumpacan-random-quote.vercel.app/',
    react: <FaReact />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  },
  {
    id: 6,
    image: Img6,
    title: 'Weather App',
    github: 'https://github.com/Caviar23/weather-app',
    demo: 'https://mikeumpacan-weather-app.vercel.app/',
    react: <FaReact />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  },
  {
    id: 7,
    image: Img7,
    title: 'Drum Kit',
    github: 'https://github.com/Caviar23/drum',
    demo: 'https://caviar23.github.io/drum/',
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  },
  {
    id: 8,
    image: Img8,
    title: 'TinDog (Tinder for Dogs)',
    github: 'https://github.com/Caviar23/tindog',
    demo: 'https://caviar23.github.io/tindog/',
    bootsrap: <FaBootstrap />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
  },
  {
    id: 9,
    image: Img9,
    title: 'Dice Game',
    github: 'https://github.com/Caviar23/dice-game',
    demo: 'https://caviar23.github.io/dice-game/',
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <IoLogoJavascript />
  }
]

const email_data = [
  {
    id: 1,
    image: Img10,
    title: 'Zoom Newsletter',
    github: 'https://github.com/Caviar23/zoom_newsletter',
    demo: 'https://caviar23.github.io/zoom_newsletter/'
  },
  {
    id: 2,
    image: Img11,
    title: 'NBA 2K23 Promotional',
    github: 'https://github.com/Caviar23/nba2k23',
    demo: 'https://caviar23.github.io/nba2k23/'
  },
  {
    id: 3,
    image: Img12,
    title: 'Udemy Receipt',
    github: 'https://github.com/Caviar23/udemy-receipt',
    demo: 'https://caviar23.github.io/udemy-receipt/'
  }

]

const Portfolio = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {
          fe_data.map(({ id, image, title, github, demo, react, html, css, javascript, bootsrap }) => {
            return (
              <article key={id} className="project_item">
                <div className="project_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>

                <div className="tools">
                  {html} {css} {javascript} {react} {bootsrap}
                </div>

                <div className="project_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

      <h2 className='html-email-title'>HTML Email</h2>

      <div className="container project_container">
        {
          email_data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="project_item">
                <div className="project_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="project_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


// ,
//     tools: [
//       {
//         react: <FaReact />,
//         html: <FaHtml5 />,
//         css: <FaCss3Alt />,
//         javascript: <IoLogoJavascript />
//       }
//     ]
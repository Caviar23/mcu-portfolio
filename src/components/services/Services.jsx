import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development </h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>Website Development</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Web Application Development</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Mobile Responsiveness</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Performance Optimization</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Code Maintenance and Refactoring</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Version Control</p>
            </li>
          </ul>
        </article>

        {/* END OF WEBDEV*/}

        <article className="service">
          <div className="service_head">
            <h3>HTML Email Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>Custom Email Template Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Cross-Platform Compatibility</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Responsive Email Development</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Integration with Email Service Providers (ESPs)</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Accessibility and Compliance</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Email Template Maintenance</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Dynamic Content Integration</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}

      </div>


    </section>
  )
}

export default Services
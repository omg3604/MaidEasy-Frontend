import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './About.css'

export class About extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='container'>
        <h2 className='text-center m-2'>About Us</h2>
        <div className='container my-5'>
          <p className=' text-center'>At MaidEasy, we understand that finding reliable and trustworthy domestic help can be a challenging task. Whether you're a busy professional, a dedicated homemaker, or someone who needs an extra pair of hands to manage household chores, we're here to make your life easier.</p>
          <h4 className='text-center my-2'>Our Vision</h4>
          <p className='text-center'>
            Our vision is to revolutionize the way people find and hire domestic help. We aim to create a seamless platform that connects households with qualified, experienced, and background-verified helpers who can assist with a wide range of tasks, making everyday life more comfortable and stress-free.          </p>
          <h4 className='text-center my-2'>Our Mision</h4>
          <p className='text - center'>
            At HomeHelpers, our mission is to provide a safe and efficient platform that simplifies the process of hiring domestic help. We strive to bridge the gap between households in need of assistance and skilled helpers looking for opportunities. Our platform ensures that both parties can connect with each other securely, ensuring mutual satisfaction and long-term partnerships.
          </p>
          <h4 className='text-center my-2'>Whats Sets Us Apart?</h4>
          <div className='d-flex justify-content-center'>
            <ul >
              <li><strong>Rigorous Screening Process</strong>: We take the safety and security of our users seriously. Every domestic helper registered on our platform undergoes a thorough background check, verification of references, and assessment of skills. Only those who meet our strict criteria become part of our trusted network.</li>
              <li><strong>Wide Range of Services</strong>: Whether you need a full-time housekeeper, a part-time nanny, a skilled cook, a gardener, or any other domestic help, HomeHelpers has you covered. Our diverse database of helpers allows you to find the perfect match for your specific needs.</li>
              <li><strong>User-Friendly Platform</strong>: We've designed our platform with user experience in mind. Finding the right domestic help is now a hassle-free process. Our intuitive interface, advanced search filters, and user-friendly dashboard make the hiring process simple and efficient.</li>
              <li><strong>Dedicated Support</strong>: Our team at HomeHelpers is committed to assisting you at every step of the way. From helping you find the ideal helper to addressing any concerns or queries you may have, our customer support is just a message or call away.</li>
              <li><strong>Trust and Transparency</strong>: Transparency is at the core of our values. We believe in open communication and ensure that both households and helpers have access to all relevant information about each other before making any decisions.</li>
            </ul>
          </div>

          <p className='text-center'>
            Join MaidEasy today and experience the convenience of hiring domestic help at your fingertips. Let us handle the stress of finding the right helper, so you can focus on what truly matters – creating wonderful memories with your loved ones and enjoying a well-managed, happy home.</p>

          <p className='text-center'>Thank you for choosing HomeHelpers, where trust meets efficiency. We look forward to being your partner in maintaining a harmonious and comfortable living environment.</p>

          For any inquiries or assistance, please don't hesitate to contact our team.
          <br></br>
          <strong>The MaidEasy Team</strong>
        </div>
      </div>
    )
  }
}

export default About
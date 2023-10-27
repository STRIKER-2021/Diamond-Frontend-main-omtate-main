import React from 'react'
import './About.css';
import about_us_diamond from '../images/about_us_diamond.jpg'

export const About = () => {
  return (
    <div className='about'>
        <div className="container">
      <img
        src={about_us_diamond}
        alt="Your Image"
        className="image"
      />
      <div className="text">
        Your text goes here.
      </div>
      
    </div>
    <div className="container">
      
      <div className="text">
        Your text goes here.
      </div>
      <img
        src={about_us_diamond}
        alt="Your Image"
        className="image"
      />
      
    </div>
    <div className="container">
    <img
        src={about_us_diamond}
        alt="Your Image"
        className="image"
      />
      <div className="text">
        Your text goes here.
      </div>
      
      
    </div>
    
      
      
    </div>
  )
}

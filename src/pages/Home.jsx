import React from 'react'
import './Home.css';

export const Home = () => {
  return (
    <div className='home'>
      <div className='landing-section'>
        {/* <div className="tagline">Our Quality, <br/> Your Trust</div> */}
        <div className='tagline'>Shine Brighter <br/> With Our <br/> Diamonds</div>
      </div>
      <div className='comment-section'>
        <div className='comment-heading'>
          Our Promise
        </div>
        <div className='comment-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
          quod? Nesciunt inventore placeat voluptas ipsa laudantium molestiae 
          ipsam voluptatem error, deserunt esse fugiat aperiam totam officiis 
          delectus ab cum? Deserunt.
        </div>
      </div>
    </div>
  )
}

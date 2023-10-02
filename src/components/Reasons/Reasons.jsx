import React from 'react'
import './Reasons.css'
import { images } from '../../constant'
const Resons = () => {
  return (
    <div className='reasons' id="reasons">
      <div className='left-reasons'>
        <img src={images.OIP}alt="" />
        <img src={images.OIP2}alt="" />
        <img src={images.R} alt="" />
        <img src={images.C} alt="" />

      </div>
      <div className="right-reasons">
        <span>Some Reasons</span>
        <div>
          <span className='stroke-text'>why </span>
          <span>choose us?</span>
        </div>
        <div className='right-details'>
          <div>
            <img src={images.tick} alt=""/>
            <span> OVER 140+ EXPRT COACHS</span>
          </div>
          <div>
            <img src={images.tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={images.tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={images.tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>

        </div>
        <span style=
          {
          {
            color: "#9c9c9c",
            fontWeight: "normal", 
          }
          }>
          OUR PARTNERS
        </span>
        <div className='partners'>
          <img src={images.nb} alt="" />
          <img src={images.adidas} alt="" />
          <img src={images.nike} alt="" />
        </div>

      </div>
      
    </div>
  )
}

export default Resons;

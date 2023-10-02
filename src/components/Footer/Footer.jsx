import React from 'react'
import './Footer.css'
import images from '../../constant/images'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
            <div className="social-footer">
                 <img src={images.gitHub} alt="" />
                 <img src={images.linkedIn} alt="" />
                 <img src={images.instagram} alt="" />
            </div>
            <div className="logo-footer">
                 <img src={images.logo} alt="" />
            </div>
         </div>
    </div>
  )
}

export default Footer

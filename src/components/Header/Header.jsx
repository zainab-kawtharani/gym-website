import React, { useState } from 'react';
import './Header.css';
import {images} from '../../constant';
import   {Link} from 'react-scroll'

const Header = () => {
  const mobile =window.innerWidth<=768? true :false
  const [menuOpen,setMenuOpen]=useState(false);
  return (
     <div className="header">
      <img className='logo' src={images.logo} alt="logo_image" />
      {
        (
        menuOpen===false && mobile===true)? (
        <div style={
          {backgroundColor:'var(--color-appColor)',
           padding:"0.5rem",
           borderRadius:'5px'
        
        }
        }onClick={()=>{setMenuOpen(true)}}
        >
          <img src={images.bar} alt='' style={{width:'1.5rem',height:'1.5rem'}}/>

        </div>
         ) :
        <ul className='header-menu'>
           <li> 
           <Link
           onClick={()=>{setMenuOpen(false)}}
           to="home"
           span={true}
           smooth={true}>
            Home </Link></li>
           <li>
           <Link
           onClick={()=>{setMenuOpen(false)}}
           to="programs"
           span={true}
           smooth={true}>
            Programs </Link></li>
           <li>
           <Link
           onClick={()=>{setMenuOpen(false)}}
           to="reasons"
           span={true}
           smooth={true}>
            Why Us
            </Link></li>
           <li>
           <Link
           onClick={()=>{setMenuOpen(false)}}
           to="plans"
           span={true}
           smooth={true}>

            Plans</Link></li>
           <li>
           <Link
           onClick={()=>{setMenuOpen(false)}}
           to="testimonails"
           span={true}
           smooth={true}>
           Testimonials
           </Link>
           </li>
         </ul>
      }
      


     </div>      
  )
}

export default Header;

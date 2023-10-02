import React from 'react';
import './Hero.css';
import {Header} from '../../components'
import {images} from '../../constant';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const mobile =window.innerWidth<=768? true :false
  const transition = {type: 'spring', duration:3}
  return (
    <div className='hero' id="home">
        <div className='blur hero-blur'></div>
        <div className="hero-left">
             <Header/>
             <div className='the-best-ad'>
                 <motion.div
                 initial={{left: mobile? '165px':'238px'}}
                 whileInView={{left:'8px'}}
                 transition={{...transition,type:'tween'}}
                 >

                 </motion.div>
                 
                 <span>The best fitness club in the world</span>
              </div>
             <div className='hero-text'>
                 <div className='hero-span-one'>
                     <span className='stroke-text'>Shape </span>
                     <span>Your</span>

                  </div>
                  <div>
                       <span>Ideal Body</span>
                  </div>
                  <div>
                      <span>Here we help you shape and build your ideal body</span>
                  </div>
              </div>
              <div className='figures'>
                <div>
                  <span><NumberCounter end={140} start={100}
                  delay='4' preFix="+"/></span>
                  <span>experts coaches</span>
                </div>
                <div>
                   <span><NumberCounter end={978} start={800}
                  delay='4' preFix="+"/></span>
                   <span>members joined</span>
                </div>
                <div>
                  <span><NumberCounter end={50} start={0}
                  delay='4' preFix="+"/></span>
                  <span>fitness programs</span>
                </div>

              </div>
              <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
              </div>
            </div>
        
        <div className="hero-right">
          <button className='btn'>Join Now</button>
          <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
            <img src={images.heart} alt='heart'/>
            <span>Heart Rate</span>
            <span> 116 bpm</span>
            
          </motion.div>
          <img src={images.r} className='hero-image'/>
          <motion.div 
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className='calories'>
            <img src={images.calories} alt=''/>
            <div>
               <span>Calories Burned</span>
               <span>220 kcal</span>
            </div>

          </motion.div>

        </div>
      
    </div>
  )
}

export default Hero;


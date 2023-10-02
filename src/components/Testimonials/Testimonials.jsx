import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import { images } from '../../constant'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const transition={type:'spring', duration:3}
    const[selected,setSelected]=useState(0)
    const tLength = testimonialsData.length
  return (
    <div className='testimonials' id="testimonails">
      <div className="testimonials-left">
        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>Say about us</span>
        <motion.span
         key={selected}
         animate={{opacity: 1, x:0}}
         initial={{opacity:0,x:-100}}
         exit={{opacity:0, x:+100}}
         transition={transition}
           
             
        >{testimonialsData[selected].review}</motion.span>
        <span>
            <span style={{color:'var(--color-blueberry)'}}>
                {testimonialsData[selected].name}

            </span>{" "}
            -{testimonialsData[selected].status}
        </span>

      </div>
      <div className="testimonials-right">
        <motion.div
        initial={{opacity: 0,x:-100}}
        whileInView={{opacity: 1, x:0}}
        transition={{...transition,duration:2}}
        >

        </motion.div>
        <motion.div
          initial={{opacity: 0,x:100}}
          whileInView={{opacity: 1, x:0}}
          transition={{...transition,duration:2}}
        >
        </motion.div>

        <motion.img 
        key={selected}
        animate={{opacity: 1, x:0}}
        initial={{opacity:0,x:100}}
        exit={{opacity:0, x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt=''/>
        <div className="arrows">
            <img onClick={()=>{
                selected===0  
                ?setSelected(tLength-1)
                :setSelected((prev)=>prev-1)
            }} src={images.leftArrow}alt="" />
            <img  onClick={
                ()=>{
                    selected===tLength-1
                    ?setSelected(0)
                    :setSelected((prev)=>prev+1)
                }
            } src={images.RightArrows} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Testimonials

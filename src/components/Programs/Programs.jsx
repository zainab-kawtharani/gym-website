import React from 'react';
import './Programs.css';
import { images } from '../../constant';
import {programsData} from '../../data/programsData';
const Programs = () => {
  return (
    <div className='programs' id="programs">
        {/* programs header */}
        <div className='programs-header'>
            <span className='stroke-text'> Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'> to Shape you</span>

        </div>
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-bttn'>
                        <span>Join Now </span>
                        <img src={images.RightArrows}/>
                    </div>

                    

                </div>

            ))}
        </div>

      
    </div>
  )
}

export default Programs

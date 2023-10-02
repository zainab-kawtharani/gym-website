import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import { images } from '../../constant'

const Plans = () => {
  return (
    <div className='plans-container' id="plans">
      <div className='programs-header' style={{gap:"2rem"}}>
        <span className='stroke-text'>READY TO START</span>
        <span >YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>
      <div className='plans'>
        {plansData.map((plan,i)=>(
          <div className='plan' key={i}>
             {plan.icon}
             <span>{plan.name}</span>
             <span>${plan.price}</span>
             <div className='features'>
              {plan.features.map((feature,i)=>(
                <div className="feature"key={i}>
                  <img src={images.whiteTick}alt=''/>
                  <span key={i}>{feature}</span>
                </div>
              ))}
             </div>
             <div>
              <span>See More Benefits -Tap here-</span>
             </div>
             <div>
              <button className='bttn'> Join Now</button>
             </div>



          </div>
            
         

        ))}

      </div>
      
    </div>
  )
}

export default Plans

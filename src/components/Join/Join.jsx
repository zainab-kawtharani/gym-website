import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
  const form =useRef()
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_7vpq17k', 'template_whex6r5', form.current, 'Yzbs_fmryL7Vx_xusQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='join'>
     
      <div className="join-left">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'> WITH US?</span>
        </div>
      </div>

      <div className="join-right">
        <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
          <input name='email-input' type='email' placeholder='Enter your email address'/>
          <button className='btn btn-join'>Join Now</button>
        </form>
      </div>
      
    </div>
  )
}

export default Join

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import Popup from './Popup';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [popupMessasge, setPopupMessage] = useState('')
  const [barColor, setBarColor] = useState('')
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const form = useRef();

  const animationDuration = '5s'

  const sendEmail = (e) => {
    e.preventDefault();

    // Promise.reject('reject')
    emailjs.sendForm('service_cyqold1', 'template_zdudn46', form.current, '5TS5ZsTJyHSI7Cynf')
      .then(() => {
        setPopupMessage('Thank you for your email!')
        setBarColor('rgb(0, 255, 0)')
        setEmail('')
        setMessage('')
        setShow(true)
        setSubmittedSuccessfully(true);
        setTimeout(() => {
          setShow(false);
        }, 5000);
      }, (err) => {
        setPopupMessage('Oh no! Something went wrong :(')
        setBarColor('rgb(255, 0, 0)')
        setShow(true)
        setTimeout(() => {
          setShow(false);
        }, 5000);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {show ? (<Popup
        message={popupMessasge}
        animationDuration={animationDuration}
        barColor={barColor}
        show={show}
        setShow={setShow}
      />) : null}
      <div className='container'>
        <form className='contact-form' onSubmit={sendEmail} ref={form}>
          <div className='contact-form__textarea-wraper'>
            <textarea required name="message" id="contact-text" cols="30" rows="10" className='contact-form__textarea' onChange={handleMessageChange} value={message}></textarea>
            {message.length == 0 ? (<label htmlFor="contact-text">Drop me a message :)</label>) : null}
          </div>
          <div className='contact-form__email-wraper'>
            <input required className='contact-form__email' id='contact-email' type="email" name='user_email' onChange={handleEmailChange} value={email} />
            {email.length == 0 ? (<label htmlFor="contact-email" >Your email</label>) : null}
          </div>
          <button className='contact-form__submit' type='sumbit' disabled={submittedSuccessfully}>SUBMIT</button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
import React from 'react'

const ContactForm = () => {
  return (
    <form className='contact-form'>
      <div className='contact-form__textarea-wraper'>
        <textarea required name="contact-text" id="contact-text" cols="30" rows="10" className='contact-form__textarea'></textarea>
        <label htmlFor="contact-text">Drop me a small message :)</label>
      </div>
      <div className='contact-form__email-wraper'>
        <input  required className='contact-form__email' id='contact-email' type="email" />
        <label htmlFor="contact-email" >Your email</label>
      </div>
      <button className='contact-form__submit' type='sumbit'>SUBMIT</button>
    </form>
  )
}

export default ContactForm
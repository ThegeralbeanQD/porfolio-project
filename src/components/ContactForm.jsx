import React, {useState} from 'react'

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
  };


  return (
    <form className='contact-form' action="mailto:test@outlook.com">
      <div className='contact-form__textarea-wraper'>
        <textarea required name="contact-text" id="contact-text" cols="30" rows="10" className='contact-form__textarea' onChange={handleMessageChange} value={message}></textarea>
        {message.length == 0 ? (<label htmlFor="contact-text">Drop me a small message :)</label>) : null}
      </div>
      <div className='contact-form__email-wraper'>
        <input  required className='contact-form__email' id='contact-email' type="email" onChange={handleEmailChange} value={email}/>
        {email.length == 0 ? (<label htmlFor="contact-email" >Your email</label>) : null}
      </div>
      <button className='contact-form__submit' type='sumbit'>SUBMIT</button>
    </form>
  )
}

export default ContactForm
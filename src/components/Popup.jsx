import React from 'react'

const Popup = ({message, animationDuration, barColor, show, setShow}) => {
  const handleClose = () =>{
    setShow(!show)
  }
  
  return (
    <div className='popup'>
      <p className='popup__message'>{message}</p>
      <i className='fa fa-close popup__close' onClick={handleClose}></i>
      <div className='popup__timer'  style={{ animationDuration: animationDuration, backgroundColor: barColor }}></div>
    </div>
  )
}

export default Popup
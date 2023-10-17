import React, { useEffect, useState, useRef } from 'react'

const FanCard = () => {
  const [cardWrapperInView, setCardWrapperInView] = useState(false);
  const cardRef = useRef(null)

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setCardWrapperInView(true);
            }, 500)
          } else {
            setCardWrapperInView(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (cardRef.current) {
      cardObserver.observe(cardRef.current);
    }
  }, [])

  return (
    <div className='fan-card-wrapper' ref={cardRef}>
      <div className={cardWrapperInView ? "fan-card fan-card--small active" : 'fan-card fan-card--small'}>
        <img className='fan-card__arrow left' src="/images/white-arrow.png" alt="arrow" />
        <img className='fan-card__image-small' src="/tech-images/sass.png" alt="sass logo" />
      </div>
      <div className={cardWrapperInView ? "fan-card fan-card--small active" : 'fan-card fan-card--small'}>
        <img className='fan-card__arrow right' src="/images/white-arrow.png" alt="arrow" />
        <img className='fan-card__image-small' src="/tech-images/react.png" alt="react logo" />
      </div>
      <div className={cardWrapperInView ? "fan-card fan-card--big active" : 'fan-card fan-card--big'}>
        <a><img className='fan-card__image' src="/tech-images/linkedin.png" alt="linkedin logo link" /></a>
      </div>
      <div className={cardWrapperInView ? "fan-card fan-card--big active" : 'fan-card fan-card--big'}>
        <a><img className='fan-card__image' src="/tech-images/github.png" alt="github logo link" /></a>
      </div>
      <div className={cardWrapperInView ? "fan-card fan-card--big active" : 'fan-card fan-card--big'}>
        <img className='fan-card__image-portfolio-pic' src="/images/portfolioPic.png" alt="headshot" />
      </div>
    </div>
  )
}

export default FanCard
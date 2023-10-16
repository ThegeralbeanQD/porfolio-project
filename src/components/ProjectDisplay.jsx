import React, { useState } from 'react';
import techList from '../helpers/techList.json';

const ProjectDisplay = ({ title, role, tech, children, github }) => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const techToRender = Array.isArray(tech)
    ? tech.map((techName, index) => techList[techName] && (
      <img key={index} src={techList[techName].imageURL} alt={`${index} image`} className='project__tech-stack-img' />
    ))
    : techList[tech] && (
      <img src={techList[tech].imageURL} alt={`image`} className='project__tech-stack-img' />
    );

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  const imageReveal = () => setShowImage(!showImage)

  return (
    <div className="project">
      <h3 className="project__title">{title} - <span className='project__title-role'>{role}</span></h3>
      <div className="project__tech-stack">
        {techToRender}
      </div>
      <div className='project__body'>
        <div className='project__content'>
          <p className={ isContentVisible ? 'project__content-paragraph animate' :  'project__content-paragraph' }>
            {isContentVisible ? children : `${children.slice(0, 180)}...`}
            {children.length > 180 && (
              <button onClick={toggleContentVisibility} className='project__content-btn'>
                {isContentVisible ? 'Show Less' : 'Show More'}
              </button>
            )}
          </p>
          <img src="/web-previews/ichai-preview.jpg" alt="" className={ showImage ? 'project__content-image animate' :  'project__content-image' } />
        </div>
        <div className={showImage || isContentVisible ? 'project__action-wrapper animate' : 'project__action-wrapper'}>
          <button className='project__btn view'>VIEW HERE</button>
          <a href={github} className='project__btn git'>
            <img className='project__btn-image' src="/tech-images/git.png" alt="git image" />
          </a>
          <i onClick={imageReveal} className='project__btn-image fa-regular fa-images'>
          </i>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay
import React, { useState } from 'react';
import techList from '../helpers/techList.json';

const ProjectDisplay = ({ title, role, tech, children, github, imgPreview }) => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const techToRender = Array.isArray(tech)
    ? tech.map((techName, index) => techList[techName] && (
      <div  key={index} className='project__tech-stack-img-wrapper' data-tech-name={techName}> <img src={techList[techName].imageURL} alt={`${index} image`} className='project__tech-stack-img'/> </div>
    ))
    : techList[tech] && (
      <div data-tool-tip={techList[tech].name} data-tech-name={techList[tech].name} className='project__tech-stack-img-wrapper' ><img src={techList[tech].imageURL} alt={`${techList[tech].name} image`} className='project__tech-stack-img' /></div>
    );

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  const imageReveal = () => setShowImage(!showImage)

  return (
    <div className="project">
      <h4 className="project__title">{title} - <span className='project__title-role'>{role}</span></h4>
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
          <img src={imgPreview} alt="" className={ showImage ? 'project__content-image animate' :  'project__content-image' } />
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
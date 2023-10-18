import React, { useState, useEffect } from 'react';
import techList from '../helpers/techList.json';

const ProjectDisplay = ({ title, role, tech, content, gitLink, imgPreview, freeDeploy, websiteLink, gitShow, websiteShow }) => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showSiteWarning, setShowSiteWarning] = useState(false);

  useEffect(() => {
    if (freeDeploy == true) {
      setShowSiteWarning(true)
    }

  }, [])


  const techToRender = Array.isArray(tech)
    ? tech.map((techName, index) => techList[techName] && (
      <div key={index} className='project__tech-stack-img-wrapper' data-tech-name={techName}> <img src={techList[techName].imageURL} alt={`${index} image`} className='project__tech-stack-img' /> </div>
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
      {showSiteWarning ? (
        <div className='project__site-warning-wrapper'>
          <i className='fa fa-close project__site-warning-wrapper-close' onClick={() => setShowSiteWarning(false)}></i>
          <p className='project__site-warning'>Hosted on free service, some aspects may take longer to load. Thank you!</p>
        </div>
      ) : null}
      <div className={isContentVisible || showImage ? 'project__body animate' : 'project__body'}>
        <div className='project__content'>
          <div className={isContentVisible ? 'project__content-paragraph animate' : 'project__content-paragraph'}>
            <div dangerouslySetInnerHTML={{ __html: isContentVisible ? content : `${content.slice(0, 180)}...` }} />
            {content.length > 180 && (
              <button onClick={toggleContentVisibility} className='project__content-btn'>
                {isContentVisible ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
          <img src={imgPreview} alt="" className={showImage ? 'project__content-image animate' : 'project__content-image'} />
        </div>
        <div className={showImage || isContentVisible ? 'project__action-wrapper animate' : 'project__action-wrapper'}>
          {websiteShow ? (<a target="_blank" rel='noreferrer' href={websiteLink} className='project__btn view'>VIEW HERE</a>) : null}
          {gitShow ?
            (<a target="_blank" rel='noreferrer' href={gitLink} className='project__btn git'>
              <img className='project__btn-image' src="/tech-images/git.png" alt="git image" />
            </a>)
            : null
          }
          <i onClick={imageReveal} className='project__btn-image fa-regular fa-images'>
          </i>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay
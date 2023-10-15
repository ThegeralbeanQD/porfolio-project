import React, {useState} from 'react';
import techList from '../helpers/techList.json';

const ProjectDisplay = ({ title, role, tech, children, github }) => {
  const [isContentVisible, setContentVisible] = useState(false);

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


  return (
    <div className="project">
      <h3 className="project__title">{title} - <br /> {role}</h3>
      <div className="project__tech-stack">
        <div className='project__tech-stack'>{techToRender}</div>
      </div>
      <div className='project__content'>
        <p className='project__content-paragraph'>
          {isContentVisible ? children : `${children.slice(0, 100)}...`}
          {children.length > 100 && (
            <button onClick={toggleContentVisibility} className='project__content-btn'>
              {isContentVisible ? 'Show Less' : 'Show More'}
            </button>
          )}
        </p>
      </div>
      <div className='project__action-wrapper'>
        <button className='project__btn view'>VIEW HERE</button>
        <a href={github} className='project__btn git'>
          <img className='project__btn-image' src="/tech-images/git.png" alt="git image" />
        </a>
        <i className='project__btn-image fa-regular fa-images'>
        </i>
      </div>
    </div>
  )
}

export default ProjectDisplay
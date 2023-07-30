import React from 'react';

const Project = ({ title }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>
    </div>
  );
};

export default Project;

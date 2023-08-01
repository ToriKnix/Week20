import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Random Password Generator',
      deployedLink: 'https://toriknix.github.io/Week3hw/',
      githubLink: 'https://github.com/ToriKnix/Week3hw/tree/master',
    },
    {
      title: 'Super Friends API',
      deployedLink: 'https://cbigham25.github.io/super-friends-api/',
      githubLink: 'https://github.com/cbigham25/super-friends-api',
    },
  ];

  return (
    <section>
      {projects.map((projects, index) => (
        <Project
          key={index}
          title={projects.title}
          deployedLink={projects.deployedLink}
          githubLink={projects.githubLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;

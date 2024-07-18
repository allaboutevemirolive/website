import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Finance',
      category: 'Web development',
      imgSrc: './assets/images/project-1.jpg',
      alt: 'finance'
    },
    {
      title: 'Orizon',
      category: 'Web development',
      imgSrc: './assets/images/project-2.png',
      alt: 'orizon'
    },
    {
      title: 'Fundo',
      category: 'Web design',
      imgSrc: './assets/images/project-3.jpg',
      alt: 'fundo'
    },
    {
      title: 'Brawlhalla',
      category: 'Applications',
      imgSrc: './assets/images/project-4.png',
      alt: 'brawlhalla'
    },
    {
      title: 'DSM.',
      category: 'Web design',
      imgSrc: './assets/images/project-5.png',
      alt: 'dsm.'
    },
    {
      title: 'MetaSpark',
      category: 'Web design',
      imgSrc: './assets/images/project-6.png',
      alt: 'metaspark'
    },
    {
      title: 'Summary',
      category: 'Web development',
      imgSrc: './assets/images/project-7.png',
      alt: 'summary'
    },
    {
      title: 'Task Manager',
      category: 'Applications',
      imgSrc: './assets/images/project-8.jpg',
      alt: 'task manager'
    },
    {
      title: 'Arrival',
      category: 'Web development',
      imgSrc: './assets/images/project-9.png',
      alt: 'arrival'
    }
  ];

  const filters = ['All', 'Web design', 'Applications', 'Web development'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {filters.map(filter => (
            <li className="filter-item" key={filter}>
              <button
                className={filter === selectedFilter ? 'active' : ''}
                onClick={() => setSelectedFilter(filter)}
                data-filter-btn=""
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select="">
            <div className="select-value" data-selecct-value="">
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          <ul className="select-list">
            {filters.map(filter => (
              <li className="select-item" key={filter}>
                <button
                  data-select-item=""
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              data-filter-item=""
              data-category={project.category.toLowerCase()}
              key={index}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img
                    src={project.imgSrc}
                    alt={project.alt}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;

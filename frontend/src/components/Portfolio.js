// Portfolio.js
import React, { useState } from 'react';
import '../assets/css/style.css'; // Ensure this is the correct path

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Web design', 'Applications', 'Web development'];
    const projects = [
        {
            category: 'Web development',
            title: 'Finance',
            imgSrc: '../assets/images/project-1.jpg',
            imgAlt: 'finance'
        },
        {
            category: 'Web development',
            title: 'Orizon',
            imgSrc: '../assets/images/project-2.png',
            imgAlt: 'orizon'
        },
        {
            category: 'Web design',
            title: 'Fundo',
            imgSrc: '../assets/images/project-3.jpg',
            imgAlt: 'fundo'
        },
        {
            category: 'Applications',
            title: 'Brawlhalla',
            imgSrc: '../assets/images/project-4.png',
            imgAlt: 'brawlhalla'
        },
        {
            category: 'Web design',
            title: 'DSM.',
            imgSrc: '../assets/images/project-5.png',
            imgAlt: 'dsm'
        },
        {
            category: 'Web design',
            title: 'MetaSpark',
            imgSrc: '../assets/images/project-6.png',
            imgAlt: 'metaspark'
        },
        {
            category: 'Web development',
            title: 'Summary',
            imgSrc: '../assets/images/project-7.png',
            imgAlt: 'summary'
        },
        {
            category: 'Applications',
            title: 'Task Manager',
            imgSrc: '../assets/images/project-8.jpg',
            imgAlt: 'task manager'
        },
        {
            category: 'Web development',
            title: 'Arrival',
            imgSrc: '../assets/images/project-9.png',
            imgAlt: 'arrival'
        }
    ];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProjects = projects.filter(
        (project) => activeFilter === 'All' || project.category === activeFilter
    );

    return (
        <article className="portfolio" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
                <ul className="filter-list">
                    {filters.map((filter, index) => (
                        <li key={index} className="filter-item">
                            <button
                                data-filter-btn
                                className={activeFilter === filter ? 'active' : ''}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="filter-select-box">
                    <button className="filter-select" data-select>
                        <div className="select-value" data-selecct-value>
                            Select category
                        </div>
                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>
                    </button>
                    <ul className="select-list">
                        {filters.map((filter, index) => (
                            <li key={index} className="select-item">
                                <button data-select-item onClick={() => handleFilterClick(filter)}>
                                    {filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="project-list">
                    {filteredProjects.map((project, index) => (
                        <li
                            key={index}
                            className="project-item active"
                            data-filter-item
                            data-category={project.category.toLowerCase()}
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                    <img
                                        src={project.imgSrc}
                                        alt={project.imgAlt}
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

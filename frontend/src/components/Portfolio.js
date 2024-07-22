import React, { useState } from 'react';
import '../assets/css/style.css';

import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.jpg';

import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';

import project7 from '../assets/images/project-7.png';
import project8 from '../assets/images/project-8.jpg';
import project9 from '../assets/images/project-9.png';

const projects = [
    {
        active: true,
        category: 'web development',
        link: '#',
        image: project1,
        title: 'Finance',
    },
    {
        active: true,
        category: 'web development',
        link: '#',
        image: project2,
        title: 'Orizon',
    },
    {
        active: true,
        category: 'web design',
        link: '#',
        image: project3,
        title: 'Fundo',
    },
    {
        active: true,
        category: 'applications',
        link: '#',
        image: project4,
        title: 'Brawlhalla',
    },
    {
        active: true,
        category: 'web design',
        link: '#',
        image: project5,
        title: 'DSM.',
    },
    {
        active: true,
        category: 'web design',
        link: '#',
        image: project6,
        title: 'MetaSpark',
    },
    {
        active: true,
        category: 'web development',
        link: '#',
        image: project7,
        title: 'Summary',
    },
    {
        active: true,
        category: 'applications',
        link: '#',
        image: project8,
        title: 'Task Manager',
    },
    {
        active: true,
        category: 'web development',
        link: '#',
        image: project9,
        title: 'Arrival',
    },
];

const Portfolio = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory.toLowerCase());

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
                <ul className="filter-list">
                    {['All', 'Web design', 'Applications', 'Web development'].map((category) => (
                        <li className="filter-item" key={category}>
                            <button
                                className={selectedCategory === category ? 'active' : ''}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
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
                        {['All', 'Web design', 'Applications', 'Web development'].map((category) => (
                            <li className="select-item" key={category}>
                                <button onClick={() => handleCategoryClick(category)} data-select-item>
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="project-list">
                    {filteredProjects.map((project, index) => (
                        <li
                            className="project-item active"
                            data-filter-item
                            data-category={project.category}
                            key={index}
                        >
                            <a href={project.link}>
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        onError={() => console.log('Image failed to load:', project.image)}
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

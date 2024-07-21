import React, { useState } from 'react';
import './assets/css/style.css';
import {
    FaChevronDown,
    FaMailBulk,
    FaPhone,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';

import myAvatar from './assets/images/my-avatar.png';
import designIcon from './assets/images/icon-design.svg';
import devIcon from './assets/images/icon-dev.svg';
import appIcon from './assets/images/icon-app.svg';
import photoIcon from './assets/images/icon-photo.svg';

import avatar1 from './assets/images/avatar-1.png';
import avatar2 from './assets/images/avatar-2.png';
import avatar3 from './assets/images/avatar-3.png';
import avatar4 from './assets/images/avatar-4.png';

import logo1 from './assets/images/logo-1-color.png';
import logo2 from './assets/images/logo-2-color.png';
import logo3 from './assets/images/logo-3-color.png';
import logo4 from './assets/images/logo-4-color.png';
import logo5 from './assets/images/logo-5-color.png';
import logo6 from './assets/images/logo-6-color.png';

import project1 from './assets/images/project-1.jpg';
import project2 from './assets/images/project-2.png';
import project3 from './assets/images/project-3.jpg';

import project4 from './assets/images/project-4.png';
import project5 from './assets/images/project-5.png';
import project6 from './assets/images/project-6.png';

import project7 from './assets/images/project-7.png';
import project8 from './assets/images/project-8.jpg';
import project9 from './assets/images/project-9.png';

import blog1 from './assets/images/blog-1.jpg';
import blog2 from './assets/images/blog-2.jpg';
import blog3 from './assets/images/blog-3.jpg';

import blog4 from './assets/images/blog-4.jpg';
import blog5 from './assets/images/blog-5.jpg';
import blog6 from './assets/images/blog-6.jpg';

import useScript from './useScript';

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

const blogPosts = [
    {
        id: 1,
        image: blog1,
        alt: 'Design conferences in 2022',
        category: 'Design',
        date: '2022-02-23',
        title: 'Design conferences in 2022',
        text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
        id: 2,
        image: blog2,
        alt: 'Best fonts every designer',
        category: 'Design',
        date: '2022-02-23',
        title: 'Best fonts every designer',
        text: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
        id: 3,
        image: blog3,
        alt: 'Design digest #80',
        category: 'Design',
        date: '2022-02-23',
        title: 'Design digest #80',
        text: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
        id: 4,
        image: blog4,
        alt: 'UI interactions of the week',
        category: 'Design',
        date: '2022-02-23',
        title: 'UI interactions of the week',
        text: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
        id: 5,
        image: blog5,
        alt: 'The forgotten art of spacing',
        category: 'Design',
        date: '2022-02-23',
        title: 'The forgotten art of spacing',
        text: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 6,
        image: blog6,
        alt: 'Design digest #79',
        category: 'Design',
        date: '2022-02-23',
        title: 'Design digest #79',
        text: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    },
];

const App = () => {
    useScript();

    const [showContacts, setShowContacts] = useState(false);
    const [activePage, setActivePage] = useState('about');

    const handleSidebarToggle = () => {
        setShowContacts(!showContacts);
    };

    const handleNavClick = (page) => {
        setActivePage(page);
    };


    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory.toLowerCase());



    return (
        <div>
            <aside className={`sidebar ${showContacts ? 'active' : ''}`}>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src={myAvatar} alt="Richard Hanrick" width="80" />
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Richard Hanrick">Richard Hanrick</h1>
                        <p className="title">Web Developer</p>
                    </div>
                    <button className="info_more-btn" onClick={handleSidebarToggle}>
                        <span>Show Contacts</span>
                        <FaChevronDown />
                    </button>
                </div>
                <div className="sidebar-info_more">
                    <div className="separator" />
                    <ul className="contacts-list">


                        <li className="contact-item">
                            <div className="icon-box">
                                <FaMailBulk />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a className="contact-link" href="mailto:richard@example.com">richard@example.com</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <FaPhone />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a className="contact-link" href="tel:+12133522795">+1 (213) 352-2795</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <FaCalendarAlt />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="1982-06-23">June 23, 1982</time>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Sacramento, California, USA</address>
                            </div>
                        </li>


                    </ul>
                    <div className="separator" />
                    <ul className="social-list">
                        <li className="social-item"><a className="social-link" href="#"><FaFacebook /></a></li>
                        <li className="social-item"><a className="social-link" href="#"><FaTwitter /></a></li>
                        <li className="social-item"><a className="social-link" href="#"><FaInstagram /></a></li>
                    </ul>
                </div>
            </aside>

            <div className="main-content">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item"><button className={`navbar-link ${activePage === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>About</button></li>
                        <li className="navbar-item"><button className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`} onClick={() => handleNavClick('resume')}>Resume</button></li>
                        <li className="navbar-item"><button className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`} onClick={() => handleNavClick('portfolio')}>Portfolio</button></li>
                        <li className="navbar-item"><button className={`navbar-link ${activePage === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')}>Blog</button></li>
                        <li className="navbar-item"><button className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>Contact</button></li>
                    </ul>
                </nav>

                {activePage === 'about' && (
                    <article className="about active" data-page="about">
                        <header>
                            <h2 className="h2 article-title">About me</h2>
                        </header>
                        <section className="about-text">
                            <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
                            <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                        </section>
                        <section className="service">
                            <h3 className="h3 service-title">What I'm doing</h3>
                            <ul className="service-list">
                                <li className="service-item">
                                    <div className="service-icon-box">
                                        <img src={designIcon} alt="design icon" width="40" />
                                    </div>
                                    <div className="service-content-box">
                                        <h4 className="h4 service-item-title">Web design</h4>
                                        <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-icon-box">
                                        <img src={devIcon} alt="Web development icon" width="40" />
                                    </div>
                                    <div className="service-content-box">
                                        <h4 className="h4 service-item-title">Web development</h4>
                                        <p className="service-item-text">High-quality development of sites at the professional level.</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-icon-box">
                                        <img src={appIcon} alt="mobile app icon" width="40" />
                                    </div>
                                    <div className="service-content-box">
                                        <h4 className="h4 service-item-title">Mobile apps</h4>
                                        <p className="service-item-text">Professional development of applications for iOS and Android.</p>
                                    </div>
                                </li>
                                <li className="service-item">
                                    <div className="service-icon-box">
                                        <img src={photoIcon} alt="camera icon" width="40" />
                                    </div>
                                    <div className="service-content-box">
                                        <h4 className="h4 service-item-title">Photography</h4>
                                        <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section className="testimonials">
                            <h3 className="h3 testimonials-title">Testimonials</h3>
                            <ul className="testimonials-list has-scrollbar">
                                <li className="testimonials-item">
                                    <div className="content-card" data-testimonials-item>
                                        <figure className="testimonials-avatar-box">
                                            <img src={avatar1} alt="Daniel Lewis" data-testimonials-avatar width="60" />
                                        </figure>
                                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel Lewis</h4>
                                        <p className="testimonials-item-text" data-testimonials-text>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.</p>
                                    </div>
                                </li>
                                <li className="testimonials-item">
                                    <div className="content-card" data-testimonials-item>
                                        <figure className="testimonials-avatar-box">
                                            <img src={avatar2} alt="Jessica Miller" data-testimonials-avatar width="60" />
                                        </figure>
                                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica Miller</h4>
                                        <p className="testimonials-item-text" data-testimonials-text>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.</p>
                                    </div>
                                </li>
                                <li className="testimonials-item">
                                    <div className="content-card" data-testimonials-item>
                                        <figure className="testimonials-avatar-box">
                                            <img src={avatar3} alt="Alex Martinez" data-testimonials-avatar width="60" />
                                        </figure>
                                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Alex Martinez</h4>
                                        <p className="testimonials-item-text" data-testimonials-text>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.</p>
                                    </div>
                                </li>
                                <li className="testimonials-item">
                                    <div className="content-card" data-testimonials-item>
                                        <figure className="testimonials-avatar-box">
                                            <img src={avatar4} alt="Chris Thomas" data-testimonials-avatar width="60" />
                                        </figure>
                                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Chris Thomas</h4>
                                        <p className="testimonials-item-text" data-testimonials-text>Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section className="clients">
                            <h3 className="h3 clients-title">Clients</h3>
                            <ul className="clients-list has-scrollbar">
                                <li className="clients-item">
                                    <a href="#">
                                        <img src={logo1} alt="client logo" />
                                    </a>
                                </li>
                                <li className="clients-item">
                                    <a href="#">
                                        <img src={logo2} alt="client logo" />
                                    </a>
                                </li>
                                <li className="clients-item">
                                    <a href="#">
                                        <img src={logo3} alt="client logo" />
                                    </a>
                                </li>
                                <li className="clients-item">
                                    <a href="#">
                                        <img src={logo4} alt="client logo" />
                                    </a>
                                </li>
                                <li className="clients-item">
                                    <a href="#">
                                        <img src={logo5} alt="client logo" />
                                    </a>
                                </li>
                                <li className="clients-item">
                                    <a href="#">
                                        <img src={logo6} alt="client logo" />
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </article>
                )}

                {activePage === 'resume' && (
                    <article className="resume active" data-page="resume">
                        <header>
                            <h2 className="h2 article-title">Resume</h2>
                        </header>

                        <section className="timeline">

                            <div class="title-wrapper">
                                <div class="icon-box">
                                    <ion-icon name="book-outline"></ion-icon>
                                </div>
                                <h3 class="h3">Education</h3>
                            </div>

                            <ul className="timeline-list">

                                <li class="timeline-item">
                                    <h4 class="h4 timeline-item-title">University school of the arts</h4>
                                    <span>2007 — 2008</span>
                                    <p class="timeline-text"> Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                                        delenit atque corrupti, quos dolores et quas molestias exceptur. </p>
                                </li>

                                <li class="timeline-item">
                                    <h4 class="h4 timeline-item-title">New york academy of art</h4>
                                    <span>2006 — 2007</span>
                                    <p class="timeline-text"> Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                                        ossimus, omnis voluptas assumenda est omnis.. </p>
                                </li>

                                <li class="timeline-item">
                                    <h4 class="h4 timeline-item-title">High school of art and design</h4>
                                    <span>2002 — 2004</span>
                                    <p class="timeline-text"> Duis aute irure dolor in reprehenderit in voluptate, quila
                                        voluptas mag odit aut fugit, sed consequuntur magni dolores eos. </p>
                                </li>

                            </ul>
                        </section>

                        <section className="timeline">
                            <div class="title-wrapper">
                                <div class="icon-box">
                                    <ion-icon name="book-outline"></ion-icon>
                                </div>
                                <h3 class="h3">Experience</h3>
                            </div>


                            <ul className="timeline-list">


                                <li class="timeline-item">
                                    <h4 class="h4 timeline-item-title">Creative director</h4>
                                    <span>2015 — Present</span>
                                    <p class="timeline-text"> Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
                                        atque corrupti, quos dolores et qvuas molestias exceptur. </p>
                                </li>

                                <li class="timeline-item">
                                    <h4 class="h4 timeline-item-title">Art director</h4>
                                    <span>2013 — 2015</span>
                                    <p class="timeline-text"> Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                                        delenit atque corrupti, quos dolores et quas molestias exceptur. </p>
                                </li>

                                <li class="timeline-item">
                                    <h4 class="h4 timeline-item-title">Web designer</h4>
                                    <span>2010 — 2013</span>
                                    <p class="timeline-text"> Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                                        delenit atque corrupti, quos dolores et quas molestias exceptur. </p>
                                </li>


                            </ul>
                        </section>

                        <section className="skill">
                            <h3 className="h3 skills-title">My skills</h3>
                            <ul className="skills-list content-card">
                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">Web design</h5>
                                        <data value="80">80%</data>
                                    </div>
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                                    </div>
                                </li>
                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">Graphic design</h5>
                                        <data value="70">70%</data>
                                    </div>
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '70%' }}></div>
                                    </div>
                                </li>
                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">Branding</h5>
                                        <data value="90">90%</data>
                                    </div>
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '90%' }}></div>
                                    </div>
                                </li>
                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">WordPress</h5>
                                        <data value="50">50%</data>
                                    </div>
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '50%' }}></div>
                                    </div>
                                </li>
                            </ul>
                        </section>

                    </article>
                )}

                {activePage === 'portfolio' && (
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
                )}

                {activePage === 'blog' && (
                    <article className="blog active" data-page="blog">
                        <header>
                            <h2 className="h2 article-title">Blog</h2>
                        </header>
                        <section className="blog-posts">
                            <ul className="blog-posts-list">
                                {blogPosts.map((post) => (
                                    <li className="blog-post-item" key={post.id}>
                                        <a href="#">
                                            <figure className="blog-banner-box">
                                                <img
                                                    src={post.image}
                                                    alt={post.alt}
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="blog-content">
                                                <div className="blog-meta">
                                                    <p className="blog-category">{post.category}</p>
                                                    <span className="dot"></span>
                                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                                                </div>
                                                <h3 className="h3 blog-item-title">{post.title}</h3>
                                                <p className="blog-text">{post.text}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </article>
                )}

                {activePage === 'contact' && (
                    <article className="contact active" data-page="contact">
                        <header>
                            <h2 className="h2 article-title">Contact</h2>
                        </header>
                        <section className="mapbox" data-mapbox>
                            <figure>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                    title="Google Map"
                                ></iframe>
                            </figure>
                        </section>
                        <section className="contact-form">
                            <h3 className="h3 form-title">Contact Form</h3>
                            <form action="#" className="form" data-form>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="fullname"
                                        className="form-input"
                                        placeholder="Full name"
                                        required
                                        data-form-input
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="Email address"
                                        required
                                        data-form-input
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    className="form-input"
                                    placeholder="Your Message"
                                    required
                                    data-form-input
                                ></textarea>
                                <button className="form-btn" type="submit" disabled data-form-btn>
                                    <ion-icon name="paper-plane"></ion-icon>
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </section>
                    </article>
                )}
            </div>
        </div>
    );
};

export default App;


import React from 'react';

import blog1 from '../assets/images/blog-1.jpg';
import blog2 from '../assets/images/blog-2.jpg';
import blog3 from '../assets/images/blog-3.jpg';

import blog4 from '../assets/images/blog-4.jpg';
import blog5 from '../assets/images/blog-5.jpg';
import blog6 from '../assets/images/blog-6.jpg';

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

const Blog = () => {
    return (
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
    );
};

export default Blog;

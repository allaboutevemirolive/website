import React from 'react';
import '../styles/style.css';

function About() {
  return (
    <article className="about active" data-page="about"> 
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm a Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          a personal touch to your product and make sure that it is eye-catching
          and easy to use. My aim is to bring across your message and identity
          in the most creative way. I've created web designs for many famous brand
          companies. 
        </p>
      </section>
    </article>
  );
}

export default About;


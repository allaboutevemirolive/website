import React from 'react';
import '../assets/css/style.css';
import {
    designIcon,
    devIcon,
    appIcon,
    photoIcon,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6
} from '../utils/images';
import ServiceItem from './ServiceItem';
import TestimonialItem from './TestimonialItem';
import ClientItem from './ClientItem';

const services = [
    { icon: designIcon, title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
    { icon: devIcon, title: 'Web development', text: 'High-quality development of sites at the professional level.' },
    { icon: appIcon, title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
    { icon: photoIcon, title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' }
];

const testimonials = [
    { avatar: avatar1, name: 'Daniel Lewis', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.' },
    { avatar: avatar2, name: 'Jessica Miller', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.' },
    { avatar: avatar3, name: 'Alex Martinez', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.' },
    { avatar: avatar4, name: 'Chris Thomas', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo odio eget libero tincidunt pretium. Duis hendrerit ligula eget metus tincidunt, quis tincidunt lorem iaculis.' }
];

const clients = [logo1, logo2, logo3, logo4, logo5, logo6];

const About = () => {
    return (
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
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </ul>
            </section>
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem key={index} {...testimonial} />
                    ))}
                </ul>
            </section>
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    {clients.map((logo, index) => (
                        <ClientItem key={index} logo={logo} />
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default About;


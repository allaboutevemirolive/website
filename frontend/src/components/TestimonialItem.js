import React from 'react';

const TestimonialItem = ({ avatar, name, text }) => (
    <li className="testimonials-item">
        <div className="content-card" data-testimonials-item>
            <figure className="testimonials-avatar-box">
                <img src={avatar} alt={name} data-testimonials-avatar width="60" />
            </figure>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>{name}</h4>
            <p className="testimonials-item-text" data-testimonials-text>{text}</p>
        </div>
    </li>
);

export default TestimonialItem;

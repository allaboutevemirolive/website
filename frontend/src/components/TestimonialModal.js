import React from 'react';

function TestimonialModal({ testimonial, onClose }) {
  if (!testimonial) return null; // Don't render if no testimonial is selected

  return (
    <div className="modal-container active" data-modal-container>
      <div className="overlay active" data-overlay onClick={onClose}></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={testimonial.avatar} alt={testimonial.name} width="80" data-modal-img />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>{testimonial.name}</h4>
          <time dateTime={testimonial.date}>{testimonial.date}</time>
          <div data-modal-text>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialModal;

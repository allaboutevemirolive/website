import React from 'react';
import { IonIcon } from '@ionic/react';
import { paperPlane } from 'ionicons/icons';

const MapSection = () => (
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
);

const ContactForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(event.target);
        const data = {
            fullname: formData.get('fullname'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        // Basic validation
        if (!data.fullname || !data.email || !data.message) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            // Submit the form data
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Check for successful response
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);

            // Optional: Clear the form or show a success message
            event.target.reset();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        }
    };


    return (
        <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form action="#" className="form" data-form onSubmit={handleSubmit}>
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
                <button className="form-btn" type="submit" data-form-btn>
                    <IonIcon icon={paperPlane} />
                    <span>Send Message</span>
                </button>
            </form>
        </section>
    );
};

const Contact = () => (
    <article className="contact active" data-page="contact">
        <header>
            <h2 className="h2 article-title">Contact</h2>
        </header>
        <MapSection />
        <ContactForm />
    </article>
);

export default Contact;

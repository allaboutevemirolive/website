import React from 'react';
import { IonIcon } from '@ionic/react';
import { paperPlane } from 'ionicons/icons';

const MapSection = () => (
    <section className="mapbox" data-mapbox>
        <figure>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127261.15239887951!2d101.0092057898287!3d4.609948302988023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec79f34033e3%3A0x8fdc9f466952e859!2sIpoh%2C%20Perak%2C%20Malaysia!5e0!3m2!1sen!2seg!4v1721608253138!5m2!1sen!2seg"
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

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('fullname'),
            email: formData.get('email'),
            comment: formData.get('message'),
        };

        if (!data.name || !data.email || !data.comment) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
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

import React from 'react';
import { FaChevronDown, FaMailBulk, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import myAvatar from '../assets/images/my-avatar.png';

const SidebarInfo = ({ showContacts, handleSidebarToggle }) => {
    return (
        <>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={myAvatar} alt="Richard Hanrick" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Akmal Firdaus">Akmal Firdaus</h1>
                    <p className="title">Software Engineer</p>
                </div>
                <button className="info_more-btn" onClick={handleSidebarToggle}>
                    <span>Show Contacts</span>
                    <FaChevronDown />
                </button>
            </div>
            <div className={`sidebar-info_more ${showContacts ? 'active' : ''}`}>
                <div className="separator" />
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <FaMailBulk />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a className="contact-link" href="mailto:akmal.fir010@gmail.com">akmal.fir010@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <FaPhone />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a className="contact-link" href="tel:+201508236489">+20 15-0823-6489</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <FaCalendarAlt />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="1999-08-06">August 06, 1999</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <a className="contact-link" href="https://maps.app.goo.gl/pEU53KNbvu7qiGKP6">Ipoh, Perak, Malaysia</a>
                        </div>
                    </li>
                </ul>
                <div className="separator" />
                <ul className="social-list">
                    <li className="social-item"><a className="social-link" href="https://www.facebook.com/akmal.firdaus.336?mibextid=ZbWKwL"><FaFacebook /></a></li>
                    <li className="social-item"><a className="social-link" href="https://twitter.com/akmalfirdxus"><FaTwitter /></a></li>
                    <li className="social-item"><a className="social-link" href="https://www.instagram.com/akmxlfirdaus"><FaInstagram /></a></li>
                    <li className="social-item"><a className="social-link" href="https://www.linkedin.com/in/akmal-firdaus-372ba4113/"><FaLinkedin /></a></li>
                    <li className="social-item"><a className="social-link" href="https://github.com/allaboutevemirolive"><FaGithub /></a></li>
                    <li className="social-item"><a className="social-link" href="https://discord.com/users/689639184914317381"><FaDiscord /></a></li>
                </ul>
            </div>
        </>
    );
}

export default SidebarInfo;

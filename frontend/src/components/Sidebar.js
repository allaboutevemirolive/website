import React from 'react';

function Sidebar({ activePage, handlePageChange, sidebarOpen, setSidebarOpen }) {
    return (
        <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`} data-sidebar="">
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src="./assets/images/my-avatar.png" alt="Richard hanrick" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Richard hanrick</h1>
                    <p className="title">Web developer</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn="" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <span>Show Contacts</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a className="contact-link" href="mailto:richard@example.com">
                                richard@example.com
                            </a>
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div class="contact-info">
                            <p class="contact-title">Phone</p>
                            <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>
                        <div class="contact-info">
                            <p class="contact-title">Birthday</p>
                            <time datetime="1982-06-23">June 23, 1982</time>
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>
                        <div class="contact-info">
                            <p class="contact-title">Location</p>
                            <address>Sacramento, California, USA</address>
                        </div>
                    </li>
                </ul>
                <div className="separator"></div>
                <ul className="social-list">
                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;


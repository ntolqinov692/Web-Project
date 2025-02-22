import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiLinkedinFill } from 'react-icons/ri';
import './footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            {/* Wave Animation */}
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            {/* Footer Content */}
            <div className="container footer__container">
                <div className="footer__section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: info@eduamaan.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 123 Edu Street, Knowledge City</li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h4>Follow Us</h4>
                    <div className="footer__social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <RiFacebookFill />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <RiInstagramFill />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <RiTwitterFill />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <RiLinkedinFill />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Edu Amaan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
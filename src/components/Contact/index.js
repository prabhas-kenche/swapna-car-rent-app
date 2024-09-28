import Header from '../Header';
import { useEffect } from 'react';
import './index.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly
    }, []);

    const whatsappNumber = "8309772580"; // Your WhatsApp number without spaces or special characters

    return (
        <>
            <Header />
            <div className="our-cars text-center">
                <h1>CONTACT</h1>
                <p>HOME/<span>CONTACT</span></p>
            </div>

            <section className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                            <span>WhatsApp: {whatsappNumber}</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <span>Contact: 83097 72580 / 95508 84883</span>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <span>Gmail: swapnaselfdrivecars@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Address: Hig 23, Road No-6, Housing Board Colony, Jadcherla, Telangana -509 301</span>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marked-alt"></i>
                        <a href="https://maps.app.goo.gl/NW7kVyjtmQiYDFED7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
                            Google Maps
                        </a>
                    </div>
                </div>
            </section>

            <div className="pt-5">
                <div className="background-image">
                    <div className="content">
                        <img 
                            src="https://res.cloudinary.com/dzptijryk/image/upload/v1726250227/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_welufj.png" 
                            className="self-driving-cars-logo" 
                            alt="Self Driving Cars Logo" 
                        />
                        <p className="showroom-location">: SHOWROOM LOCATION :</p>
                        <p>Road No.6 Housing Board Colony, Jedcherla, Mahboobnagar (Dist)</p>
                        <div className="contact-info">
                            <p><span>PHONE:</span> 8309772580 / 9550884883</p>
                            <p><span>EMAIL:</span> info@autozone.com</p>
                            <p><span>HOURS:</span> Mon – Fri :: 9am – 6pm</p>
                        </div>
                        <div className="social-icons">
                            <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a>
                            <a href="https://www.behance.net/"><i className="fab fa-behance"></i></a>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.instagram.com/swapnaselfdrivecars?igsh=MTIzM2s3OTd3dzJvNw=="><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-note">
                    Copyright © 2024 Swapna Self Drive Cars. All Rights Reserved.
                </div>
            </div>
        </>
    );
}

export default Contact;

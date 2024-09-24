import Header from '../Header';
import { useEffect } from 'react';
import './index.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly
    }, []);

    return (
        <>
            <Header />
            <div className="our-cars text-center">
                <h1>CONTACT</h1>
                <p>HOME/<span>CONTACT</span></p>
            </div>
            <div className='d-flex flex-row justify-content-center'>
            <div className="form-container">
                <div className="form-header">
                    <div className="icon">
                        <span>❮❯</span>
                    </div>
                    <h2>FEEL FREE TO SEND US A MESSAGE OR ASK FOR A FREE QUOTE</h2>
                </div>

                <form action="#" method="POST" className="contact-form">
                    <div className="form-row">
                        <input type="text" name="first_name" placeholder="First Name" required />
                        <input type="text" name="last_name" placeholder="Last Name" required />
                    </div>
                    <div className="form-row">
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="tel" name="phone" placeholder="Phone" required />
                    </div>
                    <div className="form-row">
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="submit-btn">Send Message</button>
                    </div>
                </form>
            </div>
            </div>

            <div className="pt-5">
                <div className="background-image">
                    <div className="content">
                        <img src="https://res.cloudinary.com/dzptijryk/image/upload/v1726250227/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_welufj.png" className="self-driving-cars-logo" alt="Self Driving Cars Logo" />
                        <p className="showroom-location">: SHOWROOM LOCATION :</p>
                        <p>Road No.6 Housing Board Colony, Jedcherla, Mahboobnagar (Dist)</p>
                        <div className="contact-info">
                            <p><span>PHONE:</span> 8309772580 9550884883</p>
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

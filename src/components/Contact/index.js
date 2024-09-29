import Header from '../Header';
import { useEffect } from 'react';
import { MdAddCall, MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import './index.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly
    }, []);

    const whatsappNumber = "+918309772580"; // Your WhatsApp number without spaces or special characters
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    
    // Function to handle phone number dialing selection
    const handleCallClick = () => {
        const phoneNumber = window.prompt("Select a number to call: \n1. 8309772580 \n2. 9550884883");
        if (phoneNumber === '1') {
            window.location.href = "tel:8309772580";
        } else if (phoneNumber === '2') {
            window.location.href = "tel:9550884883";
        } else {
            alert("Invalid selection!");
        }
    };

    // Function to handle email click
    const handleEmailClick = () => {
        window.location.href = "mailto:swapnaselfdrivecars@gmail.com";
    };

    return (
        <>
            <Header />
            <div className='contact-container'>
            <div className="our-cars text-center">
                <h1>CONTACT</h1>
                <p>HOME/<span>CONTACT</span></p>
            </div>

            <section className="contact-section">
                <div className="contact-info">
                    {/* CALL US Section */}
                    <div className="contact-item" onClick={handleCallClick}>
                        <MdAddCall className="icon" />
                        <h3>Call Us</h3>
                        <p>Fast Sopport 24/7</p>
                        <span>8309772580 / 9550884883</span>
                    </div>

                    {/* CONTACT US Section */}
                    <div className="contact-item" onClick={handleEmailClick}>
                        <MdAttachEmail className="icon" />
                        <h3>Contact Us</h3>
                        <p>Get in Touch Business Assistant</p>
                        <span>swapnaselfdrivecars@gmail.com</span>
                    </div>

                    {/* REACH US Section (WhatsApp) */}
                    <div className="contact-item">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <IoLogoWhatsapp className="icon whatsapp-icon" />
                        </a>
                        <h3>Reach Us</h3>
                        <p>Let's Chat on WhatsApp Business Solutions</p>
                        <span>WhatsApp Us</span>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="location pt-5">
                    <h3>Location</h3>
                    <p>Come by and see us!</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15209.930673775368!2d78.1247!3d16.7739511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca313e8169a3fb%3A0xdaf8f9a5f397d9b8!2sSwapna%20self%20drive%20cars!5e0!3m2!1sen!2sin!4v1695981937359!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
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
                        <div className="contact-info d-flex flex-row justify-content-center">
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
    Powered by{' '}
    <a 
        href="https://www.instagram.com/your-instagram-handle" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'underline' }}
    >
        Vspaze Technologies
    </a>
</div>

            </div>
            </div>
        </>
    );
}

export default Contact;


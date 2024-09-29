import React, { useEffect } from 'react';
import './index.css';
import Header from '../Header';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly
    }, []);
    
    return (
        <>
            <Header />
            <div className='about-us-container'>
            <div className="about-us">
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <img
                        src="https://res.cloudinary.com/dagkvnqd9/image/upload/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
                        alt="Car Rental"
                        className="about-us-image"
                    />
                    <h2>Welcome to Swapna Self Drive Cars</h2>
                    <p>
                        Swapna Self Drive Cars is a Telangana-based car hire/car rental company that provides a magnificent range of vehicles to its users. At Swapna Self Drive Cars, we believe that convenience, affordability, flexibility, and customer service are the pillars of a truly enjoyable travel experience for our customers.
                    </p>

                    <h2>Our Vehicle Range</h2>
                    <p>
                        Our range of vehicles is large, starting from the smallest and the basic of hatchbacks to the most luxurious cars. With our extensive fleet of vehicles, we ensure that our customers have access to a wide range of options for their specific needs, whether it's a compact car for city explorations or a spacious SUV for family outings.
                    </p>

                    <h2>Transparent Pricing</h2>
                    <p>
                        We maintain complete transparency in pricing with no hidden fees; you can trust us to provide affordable rates, ensuring that you receive excellent value for your money.
                    </p>

                    <h2>Safety and Comfort</h2>
                    <p>
                        At Swapna Self Drive Cars, we prioritize the safety and comfort of our customers. Our vehicles undergo regular maintenance and safety checks to ensure performance and reliability.
                    </p>

                    <h2>Choose Us for Your Next Journey</h2>
                    <p>
                        Choose Swapna Self Drive Cars for a memorable and enjoyable travel experience. Let us be a part of your journey, and together, we will make every ride a happy one.
                    </p>
                </div>
            </div>
            <div className="pt-5">
                    <div className="background-image">
                        <div className="content">
                            <img src="https://res.cloudinary.com/dzptijryk/image/upload/v1726250227/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_welufj.png" className="self-driving-cars-logo" alt="Self Driving Cars Logo" />
                            <p className="showroom-location">: SHOWROOM LOCATION :</p>
                            <p>Road No.6 Housing Board Colony, Jedcherla, Mahboobnagar (Dist)</p>
                            <div className="contact-info d-flex flex-row">
                                <p><span>PHONE:</span> 8309772580, 9550884883</p>
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
                            href="https://www.instagram.com/vspaze_technologies?igsh=bnh5YTB6MnI5NnVx" 
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
};

export default AboutUs;
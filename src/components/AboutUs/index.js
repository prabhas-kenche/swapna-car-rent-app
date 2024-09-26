import React from 'react';
import './index.css';
import Header from '../Header';

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1>
        <img
          src="https://res.cloudinary.com/dagkvnqd9/image/upload/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
          alt="Car Rental"
          className="about-us-image"
        />
        <h2>Why Choose Us?</h2>
        <ul className="about-us-list">
          <li><strong>Hygiene First:</strong> Our cars are sanitized and cleaned thoroughly between each rental, ensuring a comfortable and safe journey.</li>
          <li><strong>Flexible Rentals:</strong> Rent a car for daily, weekly, or monthly needs, tailored to your travel plans.</li>
          <li><strong>Hassle-Free Experience:</strong> Enjoy a seamless rental process with our efficient booking system and friendly customer service.</li>
        </ul>
      </div>
    </div>
    <div className="pt-5">
        <div className="background-image">
            <div className="content">
                <img src="https://res.cloudinary.com/dzptijryk/image/upload/v1726250227/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_welufj.png" className="self-driving-cars-logo" alt="Self Driving Cars Logo" />
                <p className="showroom-location">: SHOWROOM LOCATION :</p>
                <p>Road No.6 Housing Board Colony, Jedcherla, Mahboobnagar (Dist)</p>
                <div className="contact-info">
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
            </div>
        </div>
    </>
  );
};

export default AboutUs;

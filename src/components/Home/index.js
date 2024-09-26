import { useEffect } from 'react';
import Header from '../Header';
import AutoplayCarousel from '../AutoplayCarousel';
import CarHire from '../CarHire';
import Reviews from '../Reviews';
import './index.css';

const Home = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly
    }, []);
    
    return (
        <>
            <Header />
            <div className="main-page d-flex justify-content-center align-items-center flex-column text-center mt-5 pt-10">
                <h1 className="heading">Rent</h1>
                <h1 className="heading">Your</h1>
                <h1 className="heading">Dream</h1>
                <h1 className="heading">Car</h1>
                <h6 className="desc">Quick. Easy. Secure.</h6>
                <AutoplayCarousel />
            </div>

            <div className="pt-5 pb-5">
                <div className="image-container">
                    <img className="responsive-image" src="https://img.freepik.com/premium-photo/cheerful-indian-man-driving-new-car-calling-via-phone_116547-81161.jpg" alt="Cheerful Indian man driving a new car" loading="lazy" />
                    <div className="overlay">
                        <i className="fa-solid fa-headset" aria-hidden="true"></i>
                        <div>
                            <h1>8309772580 9550884883</h1>
                            <p>Fast support 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-5">
                <section className="how-we-work">
                    <h1 className='about'>HOW WE WORK</h1>
                    <div className="steps-container">
                        <div className="step">
                            <div className="icon-container">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <h3>FIND CAR</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                        <div className="arrow">&gt;</div>
                        <div className="step">
                            <div className="icon-container">
                                <i className="fa-solid fa-map-marker-alt"></i>
                            </div>
                            <h3>SELECT LOCATION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                        <div className="arrow">&gt;</div>
                        <div className="step">
                            <div className="icon-container">
                                <i className="fa-solid fa-credit-card"></i>
                            </div>
                            <h3>PLACE ORDER</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="statistics-row py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                            <img src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/chuttersnap-gts_Eh4g1lk-unsplash.jpg" className="img-fluid" alt="stat-image" loading="lazy" />
                        </div>
                        <div className="col-12 col-md-8 d-flex justify-content-between text-center">
                            <div className="stat-box">
                                <h1>140+</h1>
                                <p>PASSES GRADUATES</p>
                            </div>
                            <div className="stat-box">
                                <h1>1000+</h1>
                                <p>SATISFIED CUSTOMERS</p>
                            </div>
                            <div className="stat-box">
                                <h1>4000</h1>
                                <p>ORDERS DONE (including repetitive customers)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="welcome-part pt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md-4">
                            <h1 className='about'>Lights That Welcome You</h1>
                            <p className='about-desc'>Fully Customizable and every page can be fully customized so you will not have any problems using your own logo, texts, or other elements.</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <img src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/marc-olivier-jodoin-NqOInJ-ttqM-unsplash.jpg" className="img-fluid" alt="light-spark-image" loading="lazy" />
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md-4 order-md-2">
                            <h1 className='about'>Select the vehicle that’s right for you</h1>
                            <p className='about-desc'>Fully Customizable and every page can be fully customized so you will not have any problems using your own logo, texts, or other elements. Click the link below now to see how our theme works.</p>
                        </div>
                        <div className="col-12 col-md-8 order-md-1">
                            <img src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/andrey-zvyagintsev-DTQxGDTeyj0-unsplash.jpg" className="img-fluid" alt="light-spark-image" loading="lazy" />
                        </div>
                    </div>

                    <div className="row align-items-center mb-5 quote-image">
                        <img src="https://res.cloudinary.com/dzptijryk/image/upload/v1726259183/Screenshot_14-9-2024_15530_autozone-theme.com_efef75.jpg" alt="car-quote" className="quote-img" loading="lazy" />
                    </div>
                </div>
            </div>

            <CarHire />

            <div className="about-section container py-5">
                <div className="row align-items-center">
                    <div className="about-part col-12 col-md-4 text-md-left text-center">
                        <h1 className='about'>Why Choose Us?</h1>
                        <h6 className='about-2'>Hygiene First</h6>
                        <p className='about-desc'>Our cars are sanitized and cleaned thoroughly between each rental, ensuring a comfortable and safe journey.</p>
                        <h6 className='about-2'>Flexible Rentals</h6>
                        <p className='about-desc'>Rent a car for daily, weekly, or monthly needs, tailored to your travel plans.</p>
                        <h6 className='about-2'>Hassle-Free Experience</h6>
                        <p className='about-desc'>Enjoy a seamless rental process with our efficient booking system and friendly customer service.</p>
                    </div>
                    <div className="col-12 col-md-7 text-center">
                        <img src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/martin-katler-y3neNkE6efI-unsplash-min.jpg" alt="car-image" className="img-fluid" loading="lazy" />
                    </div>
                </div>
            </div>

            <Reviews />

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

export default Home;

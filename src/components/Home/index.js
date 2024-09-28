import { useEffect } from 'react';
import Header from '../Header';
import AutoplayCarousel from '../AutoplayCarousel';
import CarHire from '../CarHire';
import Reviews from '../Reviews';
import Queries from '../Queries';
import './index.css';

const Home = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly

        // Disable right-click on images
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.addEventListener('contextmenu', handleContextMenu);
        });

        // Cleanup function
        return () => {
            images.forEach((img) => {
                img.removeEventListener('contextmenu', handleContextMenu);
            });
        };
    }, []);

    return (
        <>
            <Header />
            <div className="main-page d-flex justify-content-center align-items-center flex-column text-center mt-5 pt-10">
            <div className="heading-container">
  <h1 className="heading">Rent</h1>
  <h1 className="heading">Your</h1>
  <h1 className="heading">Dream</h1>
  <h1 className="heading">Car</h1>
</div>

                <h6 className="desc">Quick. Easy. Secure.</h6>
                <AutoplayCarousel />
            </div>

            <div className="pt-5 pb-5">
                <div className="image-container">
                    <img
                        className="responsive-image"
                        src="https://img.freepik.com/premium-photo/cheerful-indian-man-driving-new-car-calling-via-phone_116547-81161.jpg"
                        alt="Cheerful Indian man driving a new car"
                        loading="lazy"
                    />
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
                            <p>Browse and select your rental vehicle.</p>
                        </div>
                        <div className="arrow">&gt;</div>
                        <div className="step">
                            <div className="icon-container">
                                <i className="fa-solid fa-map-marker-alt"></i>
                            </div>
                            <h3>SELECT LOCATION</h3>
                            <p>Discover where to pick up rentals.</p>
                        </div>
                        <div className="arrow">&gt;</div>
                        <div className="step">
                            <div className="icon-container">
                                <i className="fa-solid fa-credit-card"></i>
                            </div>
                            <h3>PLACE ORDER</h3>
                            <p>Complete your booking for a vehicle.</p>
                        </div>
                    </div>
                </section>
            </div>

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
                        <img
                            src="https://res.cloudinary.com/dagkvnqd9/image/upload/e1csgcui_vpxvcl.png"
                            alt="car-image"
                            className="img-fluid"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="statistics-row py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                            <img
                                src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/chuttersnap-gts_Eh4g1lk-unsplash.jpg"
                                className="img-fluid"
                                alt="stat-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-12 col-md-8 d-flex justify-content-between text-center">
                            <div className="stat-box">
                                <h1>140+</h1>
                                <p>GOOGLE REVIEWS</p>
                            </div>
                            <div className="stat-box">
                                <h1>1000+</h1>
                                <p>SATISFIED CUSTOMERS</p>
                            </div>
                            <div className="stat-box">
                                <h1>4000+</h1>
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
                            <h1 className='about'>Unforgettable Journey Starts Here</h1>
                            <p className='about-desc'>Explore the great outdoors and start your unforgettable adventure and memorable experience that will leave a lasting impression with our Swapna self drive cars..</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <img
                                src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/marc-olivier-jodoin-NqOInJ-ttqM-unsplash.jpg"
                                className="img-fluid"
                                alt="light-spark-image"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-4 order-md-2">
                            <h1 className='about'>Swapna Self Drive Cars prioritizes your health and safety with clean interiors</h1>
                            <p className='about-desc'>This emphasizes the importance of our company's commitment to cleanliness that is crucial for your health and safety.</p>
                        </div>

                        <div className="col-12 col-md-8 order-md-1">
                            <img
                                src="https://autozone-theme.com/lux/wp-content/uploads/2024/01/andrey-zvyagintsev-DTQxGDTeyj0-unsplash.jpg"
                                className="img-fluid"
                                alt="light-spark-image"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="row align-items-center mb-5 quote-image">
                        <img
                            src="https://res.cloudinary.com/dzptijryk/image/upload/v1726259183/Screenshot_14-9-2024_15530_autozone-theme.com_efef75.jpg"
                            alt="car-quote"
                            className="quote-img"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <CarHire />

            <Queries />
            <Reviews />
            <div className='bg-container'>

            </div>
            <div className="">
                <div className="footer-note">
                    Copyright © 2024 Swapna Self Drive Cars. All Rights Reserved.
                    Powered by Vspaze Technologies
                </div>
            </div>
        </>
    );
};

export default Home;

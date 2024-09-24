import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './index.css';

const OurCars = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);
    const navigate = useNavigate();

    const toggleDetails = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top instantly
    }, []);

    const cars = [
        {
            imgSrc: "https://cars.qeemat.com/suzuki/images/swift-new-2024-full.jpg",
            title: "Swift (Petrol)",
            features: ["4 Passengers", "Model 2018", "2 Bags"],
            description: "The Swift car is a compact, fuel-efficient vehicle known for its sleek design and responsive performance.",
            prices: ["24HRS (300 KM) - 1500 Rs", "14HRS (300 KM) - 1300 Rs", "12HRS (150 KM) - 1000 Rs", "Standard Class"]
        },
        {
            imgSrc: "https://imgd.aeplcdn.com/642x361/n/cw/ec/51428/hyundai-i20-left-front-three-quarter1.jpeg",
            title: "i20 (Petrol)",
            features: ["4 Passengers", "Model 2018", "2 Bags"],
            description: "The Hyundai i20 is a stylish and feature-packed hatchback designed for modern drivers.",
            prices: ["24HRS (300 KM) - 1500 Rs", "14HRS (300 KM) - 1300 Rs", "12HRS (150 KM) - 1000 Rs", "Standard Class"]
        },
        {
            imgSrc: "https://t.ly/7olNT",
            title: "Ritz",
            features: ["4 Passengers", "Model 2012", "2 Bags"],
            description: "The Maruti Suzuki Ritz is a compact, fuel-efficient hatchback with a tallboy design.",
            prices: ["24HRS (300 KM) - 1500 Rs", "14HRS (300 KM) - 1300 Rs", "12HRS (150 KM) - 1000 Rs", "Standard Class"]
        },
        {
            imgSrc: "https://t.ly/CsXnI",
            title: "Ford Figo",
            features: ["4 Passengers", "Model 2015", "2 Bags"],
            description: "The Ford Figo is a stylish and compact hatchback offering a balanced mix of performance, fuel efficiency, and modern features.",
            prices: ["24HRS (300 KM) - 1500 Rs", "14HRS (300 KM) - 1300 Rs", "12HRS (150 KM) - 1000 Rs"]
        },
        {
            imgSrc: "https://t.ly/S33d9",
            title: "Ford Aspire",
            features: ["5 Passengers", "Model 2018", "3 Bags"],
            description: "The Ford Aspire is a stylish and compact hatchback offering a balanced mix of performance, fuel efficiency, and modern features.",
            prices: ["24HRS (300 KM) - 1500 Rs", "14HRS (300 KM) - 1300 Rs", "12HRS (150 KM) - 1000 Rs"]
        },
        {
            imgSrc: "https://t.ly/wr1EN",
            title: "Swift Dzire",
            features: ["5 Passengers", "Model 2018", "3 Bags"],
            description: "The Maruti Suzuki Swift Dzire is a compact sedan known for its fuel efficiency, spacious interior, and reliable performance.",
            prices: ["24HRS (300 KM) - 1500 Rs", "14HRS (300 KM) - 1300 Rs", "12HRS (150 KM) - 1000 Rs"]
        },
        {
            imgSrc: "https://t.ly/fOenb",
            title: "Ecosport Diesel",
            features: ["5 Passengers", "Model 2017", "3 Bags"],
            description: "The Ford EcoSport Diesel is a compact SUV offering rugged performance, efficient diesel power, and a versatile interior.",
            prices: ["24HRS (300 KM) - 2100 Rs", "14HRS (300 KM) - 1800 Rs", "12HRS (150 KM) - 1450 Rs"]
        },
        {
            imgSrc: "https://i.cdn.newsbytesapp.com/images/l41120230408124304.jpeg",
            title: "Kia Sonet Diesel",
            features: ["5 Passengers", "Model 2024", "3 Bags"],
            description: "The Kia Sonet Diesel is a stylish compact SUV with a powerful diesel engine, advanced features, and excellent fuel efficiency.",
            prices: ["24HRS (300 KM) - 2100 Rs", "14HRS (300 KM) - 1800 Rs", "12HRS (150 KM) - 1450 Rs"]
        }
    ];

    const handleBookCar = (car) => {
        navigate('/car-book-form', { state: { car } });
    };

    return (
        <>
            <Header />
            <div>
                <div className="our-cars text-center" id="our-cars-section">
                    <h1>OUR CARS</h1>
                    <p>HOME/<span>OUR CARS</span></p>
                </div>
                <div className="pt-5 pb-5">
                    <div className="car-card-container text-center">
                        {cars.map((car, index) => (
                            <div className="car-card text-center" key={index}>
                                <img src={car.imgSrc} alt={`${car.title}-car`} />
                                <h2>{car.title}</h2>
                                <div className="car-features">
                                    <div>
                                        <i className="fa-solid fa-person"></i> {car.features[0]}
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-car"></i> {car.features[1]}
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-suitcase-rolling"></i> {car.features[2]}
                                    </div>
                                </div>
                                <p>{car.description}</p>

                                {visibleIndex === index && (
                                    <div className="car-hidden-details car-visible">
                                        {car.prices.map((price, i) => (
                                            <p key={i}>{price}</p>
                                        ))}
                                    </div>
                                )}

                                <button className="car-toggle-btn" onClick={() => toggleDetails(index)}>
                                    {visibleIndex === index ? "Hide Details" : "View Details"}
                                </button>

                                {visibleIndex === index && (
                                    <button className="car-toggle-btn" onClick={() => handleBookCar(car)}>
                                        Book My Car
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="note-container pb-5 pt-5">
                    <h2>NOTE :</h2>
                    <div className="notes">
                        <p>1. Price is excluding fastag, fuel & fines.</p>
                        <p>2. After 300 KM, hatchback & sedan cars will be charged ₹5 per KM.</p>
                        <p>3. Documents needed: original 4-wheeler driving license and original Aadhar card.</p>
                        <p>4. Age must be above 21 only acceptable.</p>
                        <p>5. Smoking and drinking alcohol in cars is not allowed. If found, ₹1000 fine will be charged.</p>
                        <p>6. Max speed limit is 100 KMPH.</p>
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
            </div>
        </>
    );
};

export default OurCars;
import React from 'react';
import {useEffect} from 'react';
import Header from '../Header';
import './index.css';

// Helper function to render stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star full">★</span>);
  }

  if (halfStar) {
    stars.push(<span key="half" className="star half">★</span>);
  }

  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
  }

  return stars;
};

const reviews = [
  {
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVbtEqUvogq9CB6jHvFPbAtBCcq9LXVtx6LYlan9N78mCrQkmYeuQ=w75-h75-p-rp-mo-br100",
    review: "Very good car service. All the cars I have rented were in good condition. The best part is that the owner is very cooperative.",
    rating: 4.5
  },
  {
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Fantastic experience! The customer support was prompt and helpful. I highly recommend their service for a hassle-free experience.",
    rating: 5
  },
  {
    imgSrc: "https://randomuser.me/api/portraits/women/45.jpg",
    review: "I had a great time renting cars here. The pricing is transparent, and the cars are well-maintained. Will definitely come back!",
    rating: 4
  },
  {
    imgSrc: "https://randomuser.me/api/portraits/men/76.jpg",
    review: "The best car rental service I've used. Their fleet is top-notch, and they ensure customer satisfaction every time.",
    rating: 5
  },
  {
    imgSrc: "https://randomuser.me/api/portraits/women/30.jpg",
    review: "Excellent service, very responsive staff, and clean cars. Renting was fast and easy. Couldn't ask for more!",
    rating: 4.5
  }
];

const OurReviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top instantly
}, []);
  return (
    <>
      <Header />
      <div className="header-section text-center">
                <h1>OUR NEWS</h1>
                <p>HOME/<span>OUR REVIEWS</span></p>
            </div>
      <div className="reviews-vertical-container">
        <h1 className="review-heading">All Reviews</h1>
        <div className="reviews-vertical">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img 
                src={review.imgSrc} 
                alt={`Review ${index + 1}`} 
                className="review-img-vertical" 
              />
              <p className="review-text-vertical">{review.review}</p>
              <div className="review-rating-vertical">{renderStars(review.rating)}</div>
            </div>
          ))}
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

export default OurReviews;

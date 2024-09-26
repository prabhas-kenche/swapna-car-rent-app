import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { Carousel } from 'react-responsive-3d-carousel';
import './index.css';

// Helper function to render stars based on rating
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

const Reviews = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleViewMoreClick = () => {
    navigate('/reviews');
  };

  return (
    <>
      <div className="reviews-container">
        <h1 className='review-heading-1'>Our Reviews</h1>
        <section className="review-section">
          <Carousel showArrows={false}>
            {reviews.map((review, index) => (
              <div key={index} className="review-slide">
                <img 
                  src={review.imgSrc} 
                  alt={`Review ${index + 1}`} 
                  className="review-img" 
                />
                <p className="review-text">{review.review}</p>
                <div className="review-rating">{renderStars(review.rating)}</div>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
      <div className="text-center mt-4">
        <button className='btn btn-primary' onClick={handleViewMoreClick}>
          View More
        </button>
      </div>

      

    </>
  );
};

export default Reviews;

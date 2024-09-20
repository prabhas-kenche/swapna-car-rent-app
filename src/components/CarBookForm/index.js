import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import './index.css'; // Import CSS for styling

const CarBookForm = () => {
    const location = useLocation(); // Access the passed car data
    const navigate = useNavigate(); // Initialize the navigate function
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        address: '',
        pickupDate: '',
        pickupTime: '',
        dropDate: '',
        dropTime: '',
        visitingPlaces: '',
        totalDays: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Show the success message
    };

    const handleGoHome = () => {
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className="car-book-form-container">
            {submitted ? (
                <div className="success-message">
                    <h2>Booking Successful!</h2>
                    <p>Your booking for {location.state.car.title} has been confirmed.</p>
                    <button onClick={handleGoHome} className='button'>Go to Home Page</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Book {location.state.car.title}</h2>

                    <div className="form-group">
                        <label htmlFor="name"><span className="required-one">*</span> Name</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact"><span className="required-one">*</span> Contact Number</label>
                        <input type="tel" id="contact" name="contact" required value={formData.contact} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"><span className="required-one">*</span> Email ID</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address"><span className="required-one">*</span> Address</label>
                        <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pickup-date"><span className="required-one">*</span> Pickup Date</label>
                        <input type="date" id="pickup-date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pickup-time"><span className="required-one">*</span> Pickup Time</label>
                        <input type="time" id="pickup-time" name="pickupTime" required value={formData.pickupTime} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="drop-date"><span className="required-one">*</span> Drop Date</label>
                        <input type="date" id="drop-date" name="dropDate" required value={formData.dropDate} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="drop-time"><span className="required-one">*</span> Drop Time</label>
                        <input type="time" id="drop-time" name="dropTime" required value={formData.dropTime} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="visiting-places"><span className="required-one">*</span> Visiting Places</label>
                        <input type="text" id="visiting-places" name="visitingPlaces" required value={formData.visitingPlaces} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="total-days"><span className="required-one">*</span> Total Days</label>
                        <input type="number" id="total-days" name="totalDays" required value={formData.totalDays} onChange={handleChange} />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            )}
        </div>
    );
};

export default CarBookForm;

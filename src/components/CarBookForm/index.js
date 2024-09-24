import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS
import './index.css';

const CarBookForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        address: '',
        pickupDate: '',
        dropDate: '',
        visitingPlaces: '',
        totalDays: '', // This will be calculated automatically
    });

    const [minDropDate, setMinDropDate] = useState('');
    const [isDropDisabled, setIsDropDisabled] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // When pickup date changes, enable the drop date selection and update minDropDate
        if (name === 'pickupDate') {
            setMinDropDate(value); // Set the minimum value for drop date to match the pickup date
            setIsDropDisabled(false); // Enable drop date selection
            calculateTotalDays(value, formData.dropDate); // Recalculate total days if drop date exists
        }

        // When drop date changes, recalculate total days
        if (name === 'dropDate') {
            calculateTotalDays(formData.pickupDate, value);
        }
    };

    // Calculate total days based on pickup and drop dates
    const calculateTotalDays = (pickupDate, dropDate) => {
        if (pickupDate && dropDate) {
            const startDate = new Date(pickupDate);
            const endDate = new Date(dropDate);
            const differenceInTime = endDate.getTime() - startDate.getTime();
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert to days
            setFormData((prevData) => ({
                ...prevData,
                totalDays: differenceInDays,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare email template data
        const emailData = {
            to_name: "Admin", // or dynamic name if needed
            from_name: formData.name,
            name: formData.name,
            contact: formData.contact,
            email: formData.email,
            address: formData.address,
            pickupDate: formData.pickupDate,
            dropDate: formData.dropDate,
            visitingPlaces: formData.visitingPlaces,
            totalDays: formData.totalDays,
        };

        // Use EmailJS to send the email
        emailjs.send('service_e8knlxy', 'template_4foqb19', emailData, '7OXxMgu7C6wrBuMyB')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true); // Show success message
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleGoHome = () => {
        navigate('/'); // Redirect to the home page
    };

    const getCurrentDateTime = () => {
        const current = new Date();
        return current.toISOString().slice(0, 16); // Format for "datetime-local" input
    };

    return (
        <div className="car-book-form-container animate__animated animate__fadeIn">
            {submitted ? (
                <div className="success-message animate__animated animate__bounceIn">
                    <h2>Booking Successful!</h2>
                    <p>Your booking for {location.state.car.title} has been confirmed.</p>
                    <p>Our team will contact you soon to confirm your booking.</p>
                    <button onClick={handleGoHome} className='button'>Go to Home Page</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
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
                        <label htmlFor="pickup-date"><span className="required-one">*</span> Pickup Date and Time</label>
                        <input 
                            type="datetime-local" 
                            id="pickup-date" 
                            name="pickupDate" 
                            required 
                            min={getCurrentDateTime()} 
                            value={formData.pickupDate} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="drop-date"><span className="required-one">*</span> Drop Date and Time</label>
                        <input 
                            type="datetime-local" 
                            id="drop-date" 
                            name="dropDate" 
                            required 
                            disabled={isDropDisabled} 
                            min={minDropDate} 
                            value={formData.dropDate} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="visiting-places"><span className="required-one">*</span> Visiting Places</label>
                        <input type="text" id="visiting-places" name="visitingPlaces" required value={formData.visitingPlaces} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="total-days">Total Days</label>
                        <input type="number" id="total-days" name="totalDays" readOnly value={formData.totalDays} />
                    </div>

                    <button type="submit" className="d-flex flex-row justify-content-center submit-btn button-2">Submit</button>
                </form>
            )}
        </div>
    );
};

export default CarBookForm;

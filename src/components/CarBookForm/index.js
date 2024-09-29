import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; 
import './index.css';

const CarBookForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        age: '',
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

    const [minDropDate, setMinDropDate] = useState(''); // Corrected this line
    const [isDropDisabled, setIsDropDisabled] = useState(true);

    // Get future date (30 minutes from now)
    const getFutureDate = () => {
        const current = new Date();
        current.setMinutes(current.getMinutes() + 30); 
        return current.toISOString().slice(0, 10); 
    };

    // Get future time (30 minutes from now)
    const getFutureTime = () => {
        const current = new Date();
        current.setMinutes(current.getMinutes() + 30);
        return current.toTimeString().slice(0, 5);
    };

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // If pickup date or time changes, update the minimum drop date/time
        if (name === 'pickupDate' || name === 'pickupTime') {
            const updatedPickupDate = name === 'pickupDate' ? value : formData.pickupDate;
            const updatedPickupTime = name === 'pickupTime' ? value : formData.pickupTime;

            if (updatedPickupDate && updatedPickupTime) {
                setMinDropDate(`${updatedPickupDate}T${updatedPickupTime}`); // This line is now correct
                setIsDropDisabled(false);
            } else {
                setIsDropDisabled(true);
            }

            calculateTotalDays(updatedPickupDate, updatedPickupTime, formData.dropDate, formData.dropTime);
        }

        // If drop date or time changes, recalculate total days
        if (name === 'dropDate' || name === 'dropTime') {
            const updatedDropDate = name === 'dropDate' ? value : formData.dropDate;
            const updatedDropTime = name === 'dropTime' ? value : formData.dropTime;
            calculateTotalDays(formData.pickupDate, formData.pickupTime, updatedDropDate, updatedDropTime);
        }
    };

    // Calculate total days between pickup and drop
    const calculateTotalDays = (pickupDate, pickupTime, dropDate, dropTime) => {
        if (pickupDate && pickupTime && dropDate && dropTime) {
            const startDate = new Date(`${pickupDate}T${pickupTime}`);
            const endDate = new Date(`${dropDate}T${dropTime}`);
            const differenceInTime = endDate.getTime() - startDate.getTime();

            const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
            const differenceInHours = Math.ceil((differenceInTime % (1000 * 3600 * 24)) / (1000 * 3600));

            setFormData((prevData) => ({
                ...prevData,
                totalDays: `${differenceInDays} days, ${differenceInHours} hours`,
            }));
        }
    };

    // Display alert after 30 minutes
    const triggerAlert = () => {
        setTimeout(() => {
            alert('30 minutes have passed since your booking submission!');
        }, 30 * 60 * 1000); // 30 minutes in milliseconds
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.age < 21) {
            alert('You must be over 21 years old to book a car.');
            return; // Prevent form submission
        }
    
        const emailData = {
            to_name: "Swapna Self Drive Cars", 
            from_name: formData.name,
            name: formData.name,
            profession: formData.profession, 
            age: formData.age, // Add age here
            contact: formData.contact,
            email: formData.email,
            address: formData.address,
            pickupDate: formData.pickupDate,
            pickupTime: formData.pickupTime,
            dropDate: formData.dropDate,
            dropTime: formData.dropTime,
            visitingPlaces: formData.visitingPlaces,
            totalDays: formData.totalDays,
            carName: location.state.car.title,// Add car name here
        };
    
        emailjs.send('service_fztnjic', 'template_mn2smp8', emailData, 'y5F9fIgHF5dMzYL9S')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
                triggerAlert(); // Trigger alert after 30 minutes
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    // Navigate to home
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="car-book-form-container animate__animated animate__fadeIn">
            {submitted ? (
                <div className="success-message animate__animated animate__bounceIn">
                    <h2>Request Successful!</h2>
                    <p>Thanks for showing your interest in {location.state.car.title}.</p>
                    <p>Our team will contact you soon to confirm your booking.</p>
                    <button onClick={handleGoHome} className='btn btn-primary'>Go to Home Page</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
                    <h2 className="heading-frame">Book {location.state.car.title}</h2>

                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="name"><span className="required-one">*</span> Name</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profession"><span className="required-one">*</span> Profession</label>
                        <input type="text" id="profession" name="profession" required value={formData.profession} onChange={handleChange} />
                    </div>

                    {/* Contact */}
                    <div className="form-group">
  <label htmlFor="contact">
    <span className="required-one">*</span> Contact Number
  </label>
  <input
    type="tel"
    id="contact"
    name="contact"
    required
    value={formData.contact}
    onChange={handleChange}
    onInput={(e) => {
      // Replace any non-digit characters
      e.target.value = e.target.value.replace(/\D/g, '');
    }}
    maxLength="10" /* Limits to 10 digits */
    title="Please enter a 10-digit contact number"
  />
</div>


                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email"><span className="required-one">*</span> Email ID</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>

                    {/* Address */}
                    <div className="form-group">
                        <label htmlFor="address"><span className="required-one">*</span> Address</label>
                        <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age"><span className="required-one">*</span> Age</label>
                        <input type="number" id="age" name="age" required value={formData.age} onChange={handleChange} min="21" />
                        <small style={{color: 'red'}}>You must be over 21 years old to book a car.</small>
                    </div>

                    {/* Pickup Date */}
                    <div className="form-group">
                        <label htmlFor="pickup-date"><span className="required-one">*</span> Pickup Date</label>
                        <input 
                            type="date" 
                            id="pickup-date" 
                            name="pickupDate" 
                            required 
                            min={getFutureDate()}
                            value={formData.pickupDate} 
                            onChange={handleChange} 
                        />
                    </div>

                    {/* Pickup Time */}
                    <div className="form-group">
                        <label htmlFor="pickup-time"><span className="required-one">*</span> Pickup Time</label>
                        <input 
                            type="time" 
                            id="pickup-time" 
                            name="pickupTime" 
                            required 
                            min={formData.pickupDate === getFutureDate() ? getFutureTime() : ''}
                            value={formData.pickupTime} 
                            onChange={handleChange}
                        />
                    </div>

                    {/* Drop Date */}
                    <div className="form-group">
                        <label htmlFor="drop-date"><span className="required-one">*</span> Drop Date</label>
                        <input 
                            type="date" 
                            id="drop-date" 
                            name="dropDate" 
                            required 
                            disabled={isDropDisabled}
                            min={formData.pickupDate} 
                            value={formData.dropDate} 
                            onChange={handleChange}
                        />
                    </div>

                    {/* Drop Time */}
                    <div className="form-group">
                        <label htmlFor="drop-time"><span className="required-one">*</span> Drop Time</label>
                        <input 
                            type="time" 
                            id="drop-time" 
                            name="dropTime" 
                            required 
                            disabled={isDropDisabled}
                            value={formData.dropTime} 
                            onChange={handleChange}
                        />
                    </div>

                    {/* Visiting Places */}
                    <div className="form-group">
                        <label htmlFor="visiting-places"><span className="required-one">*</span> Visiting Places</label>
                        <input type="text" id="visiting-places" name="visitingPlaces" required value={formData.visitingPlaces} onChange={handleChange} />
                    </div>

                    {/* Total Days */}
                    <div className="form-group">
                        <label htmlFor="total-days"><span className="required-one">*</span> Total Days</label>
                        <input type="text" id="total-days" name="totalDays" required disabled value={formData.totalDays} />
                    </div>

                    {/* Submit Button */}
                    <div className="form-group button-container">
                        <button type="submit" className="button">Submit Booking</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CarBookForm;
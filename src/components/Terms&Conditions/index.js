import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import { FaShareAlt } from "react-icons/fa";   // Import the share icon
import './index.css';

const TermsAndConditions = () => {
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top on page load
    }, []);

    // Share link function
    const handleShare = () => {
        const shareableLink = `${window.location.origin}/terms-conditions`;
        navigator.clipboard.writeText(shareableLink);  // Copy the link to the clipboard
        alert('Terms and Conditions link copied to clipboard!');
    };

    return (
        <div className="terms-conditions-container">
            <h1>Terms and Conditions</h1>
            <h2>1. Definitions</h2>
            <p>
                <strong>Renter</strong> means the person renting the vehicle.
                <br />
                <strong>Vehicle</strong> means the self-drive car rented by the Renter.
                <br />
                <strong>Rental Period</strong> means the duration of the rental.
            </p>

            <h2>2. Eligibility</h2>
            <p>
                The Renter must be at least 21 years old.
                <br />
                The Renter must possess a valid driver's license.
            </p>

            <h2>3. Rental Agreement</h2>
            <p>
                The Renter agrees to rent the Vehicle for the Rental Period.
                <br />
                The Renter must return the Vehicle on the agreed date and time.
            </p>

            <h2>4. Payment</h2>
            <p>
                The Renter must pay the rental fee and security deposit.
            </p>

            <h2>5. Vehicle Condition</h2>
            <p>
                The Vehicle will be delivered in good condition.
                <br />
                The Renter must return the Vehicle in the same condition.
            </p>

            <h2>6. Insurance</h2>
            <p>
                The Vehicle is insured, but the Renter is liable for damages.
            </p>

            <h2>7. Fuel and Maintenance</h2>
            <p>
                The Renter is responsible for fuel and maintenance costs.
            </p>

            <h2>8. Traffic Violations</h2>
            <p>The Renter is liable for traffic violations.</p>

            {/* Share icon */}
            <div className="share-icon-container" onClick={handleShare}>
                <FaShareAlt className="share-icon" />
                <span className="share-text">Share</span>
            </div>
        </div>
    );
};

export default TermsAndConditions;

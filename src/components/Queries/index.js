import React from "react";
import { useNavigate } from 'react-router-dom';
import './index.css';

const Queries = () => {
  const navigate = useNavigate(); // React Router Hook for navigation

  return (
    <div className="pt-5 pb-5">
      <section className="how-we-work">
        <h1 className='about'>Essentials</h1>
        <div className="steps-container">
          <div className="step">
            <div className="icon-container" onClick={() => navigate('/privacy-policy')}>
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <h3>PRIVACY POLICY</h3>
            <p>Protecting your personal information and privacy.</p>
          </div>
          <div className="step">
            <div className="icon-container" onClick={() => navigate('/faq')}>
              <i className="fa-solid fa-question-circle"></i>
            </div>
            <h3>FAQ</h3>
            <p>Answers to common questions about rentals.</p>
          </div>
          <div className="step">
            <div className="icon-container" onClick={() => navigate('/terms-conditions')}>
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <h3>TERMS & CONDITIONS</h3>
            <p>Review your rights and responsibilities here.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Queries;

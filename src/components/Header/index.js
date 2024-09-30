import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Default active link
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link based on current route
  }, [location]);

  const handleNavLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="navbar-content">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/dagkvnqd9/image/upload/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
            className="self-driving-cars-logo-1"
            alt="Self Driving Cars Logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            className={`nav-link ${activeLink === '/' ? 'active-nav' : ''}`} 
            to="/" 
            onClick={() => handleNavLinkClick('/')}
          >
            HOME
          </NavLink>
          <NavLink
            className={`nav-link ${activeLink === '/ourcars' ? 'active-nav' : ''}`} 
            to="/ourcars"
            onClick={() => handleNavLinkClick('/ourcars')}
          >
            OUR CARS
          </NavLink>
          <NavLink
            className={`nav-link ${activeLink === '/reviews' ? 'active-nav' : ''}`} 
            to="/reviews"
            onClick={() => handleNavLinkClick('/reviews')}
          >
            REVIEWS
          </NavLink>
          <NavLink
            className={`nav-link ${activeLink === '/contact' ? 'active-nav' : ''}`} 
            to="/contact"
            onClick={() => handleNavLinkClick('/contact')}
          >
            CONTACT
          </NavLink>
          <NavLink
            className={`nav-link ${activeLink === '/aboutus' ? 'active-nav' : ''}`} 
            to="/aboutus"
            onClick={() => handleNavLinkClick('/aboutus')}
          >
            ABOUT US
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

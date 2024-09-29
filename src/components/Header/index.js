import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  const handleNavLinkClick = () => {
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
            className="nav-link"
            activeClassName="active-nav" 
            to="/" 
            onClick={handleNavLinkClick}
          >
            HOME
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-nav" 
            to="/ourcars"
            onClick={handleNavLinkClick}
          >
            OUR CARS
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-nav" 
            to="/reviews"
            onClick={handleNavLinkClick}
          >
            REVIEWS
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-nav" 
            to="/contact"
            onClick={handleNavLinkClick}
          >
            CONTACT
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-nav" 
            to="/aboutus"
            onClick={handleNavLinkClick}
          >
            ABOUT US
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

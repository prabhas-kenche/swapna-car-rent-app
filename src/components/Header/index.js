import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

const Header = () => {
  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    const handleClickOutside = (event) => {
      if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
      }
    };

    const handleScroll = () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Collapse the navbar after clicking a link
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
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
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink exact className="nav-link" to="/" activeClassName="active-nav" onClick={handleNavLinkClick}>
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/ourcars" activeClassName="active-nav" onClick={handleNavLinkClick}>
              OUR CARS
            </NavLink>
            <NavLink className="nav-link" to="/reviews" activeClassName="active-nav" onClick={handleNavLinkClick}>
              REVIEWS
            </NavLink>
            <NavLink className="nav-link" to="/contact" activeClassName="active-nav" onClick={handleNavLinkClick}>
              CONTACT
            </NavLink>
            <NavLink className="nav-link" to="/aboutus" activeClassName="active-nav" onClick={handleNavLinkClick}>
              ABOUT US
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

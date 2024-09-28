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

    const handleToggleClick = () => {
      navbarCollapse.classList.toggle('show');
      navbarToggler.classList.toggle('collapsed');
    };

    navbarToggler.addEventListener('click', handleToggleClick);
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      navbarToggler.removeEventListener('click', handleToggleClick);
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
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink exact className="nav-link" to="/" onClick={handleNavLinkClick}>
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/ourcars" onClick={handleNavLinkClick}>
              OUR CARS
            </NavLink>
            <NavLink className="nav-link" to="/reviews" onClick={handleNavLinkClick}>
              REVIEWS
            </NavLink>
            <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
              CONTACT
            </NavLink>
            <NavLink className="nav-link" to="/aboutus" onClick={handleNavLinkClick}>
              ABOUT US
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

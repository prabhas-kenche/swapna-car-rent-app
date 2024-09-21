import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/dagkvnqd9/image/upload/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png"
            className="self-driving-cars-logo-1"
            alt="Self Driving Cars Logo"
          />
        </Link>
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
            <Link className="nav-link active" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/ourcars">
              OUR CARS
            </Link>
            <Link className="nav-link" to="/ournews">
              OUR NEWS
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
            <Link to="/sellyourcar" className="nav-link-2">
              <button className="sell-button">SELL YOUR CAR</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OurCars from './components/OurCars';
import OurReviews from './components/OurReviews';
import Contact from './components/Contact';
import CarBookForm from './components/CarBookForm';
import AboutUs from './components/AboutUs';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/ourcars' element={<OurCars />} />
      <Route path='/car-book-form' element={<CarBookForm />} />
      <Route path='/reviews' element={<OurReviews />} /> {/* Add this line */}
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutus' element={<AboutUs />} />
    </Routes>
  );
};

export default App;

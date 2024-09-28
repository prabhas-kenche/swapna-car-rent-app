import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OurCars from './components/OurCars';
import OurReviews from './components/OurReviews';
import Contact from './components/Contact';
import CarBookForm from './components/CarBookForm';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ\'s';
import TermsAndConditions from './components/Terms&Conditions'

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/ourcars' element={<OurCars />} />
      <Route path='/car-book-form' element={<CarBookForm />} />
      <Route path='/reviews' element={<OurReviews />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path='/terms-conditions' element={< TermsAndConditions/> }/>
    </Routes>
  );
};

export default App;

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import OurCars from './components/OurCars';
import OurNews from './components/OurNews';
import Contact from './components/Contact';
import CarBookForm from './components/CarBookForm';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/ourcars' element={<OurCars />} />
      <Route path="/car-book-form" element={<CarBookForm />} />
      <Route exact path='/ournews' element={<OurNews />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default App;
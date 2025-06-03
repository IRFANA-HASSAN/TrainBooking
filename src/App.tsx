import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer'
import Home from './pages/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Comment from './pages/Comment'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path='/comment' element={<Comment/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; import './App.css';
import Home from './pages/Home';
import AboutUsPage from './pages/aboutus';
import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import ContactUs from './pages/contactus';
import PricingPage from './pages/Command';

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-b from-gray-900 to-black text-white">
        <Navigation /> {/* Include Navigation component here */}
        <Routes> {/* Use Routes to define different paths */}
          <Route path="/" element={<Home />} /> {/* Route for the home page (path "/") */}
          <Route path="/about" element={<AboutUsPage />} /> {/* Route for the aboutus page (path "/") */}
          <Route path="/price" element={<PricingPage />} /> {/* Route for the aboutus page (path "/") */}
          <Route path="/contact" element={<ContactUs backgroundImage="https://th.bing.com/th/id/OIP.PJBJPKGY-8bRfgIWHuqdIAHaER?rs=1&pid=ImgDetMain" />} /> {/* Route for the aboutus page (path "/") */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
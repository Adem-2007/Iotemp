// App.js
import React from 'react';
import HeroSection from '../components/home/HeroSection'
import AboutUsSection from '../components/home/AboutUsSection'

function Home() {
  return (
    <div className=" text-white bg-gradient-to-b from-gray-900  to-black">
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}

export default Home;
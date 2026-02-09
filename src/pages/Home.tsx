import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Locations from '../components/Locations';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Locations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (REVIEWS.length - (itemsPerPage - 1))
    );
    // Reset to start if we reach the end of valid windows
    if (currentIndex >= REVIEWS.length - itemsPerPage) {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? REVIEWS.length - itemsPerPage : prevIndex - 1
    );
  };

  const visibleReviews = REVIEWS.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Patient Stories</h2>
          <p className="text-gray-300 text-lg">See what our happy patients have to say about their experience.</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={false}
            >
              <AnimatePresence mode='wait'>
                {visibleReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
                  >
                    <Quote className="absolute top-6 right-6 text-sky-blue/30 w-12 h-12" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-200 mb-8 leading-relaxed italic text-lg flex-grow">"{review.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-sky-blue flex items-center justify-center font-bold text-navy text-xl shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-white">{review.name}</p>
                        <p className="text-sm text-sky-blue">Verified Patient</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots Indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(REVIEWS.length / itemsPerPage) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPerPage)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    Math.floor(currentIndex / itemsPerPage) === idx 
                      ? 'bg-teal w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

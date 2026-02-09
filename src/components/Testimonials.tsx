import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/constants';

const Testimonials = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 text-sky-blue/30 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-8 leading-relaxed italic text-lg">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-blue flex items-center justify-center font-bold text-navy text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-sky-blue">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

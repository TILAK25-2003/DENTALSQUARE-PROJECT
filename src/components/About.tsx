import React from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex flex-col">
            {/* Doctor Details - Moved Above Image */}
            <div className="mb-8 bg-white p-8 rounded-xl shadow-lg border-l-4 border-navy">
              <h3 className="text-3xl font-bold text-navy">Dr. Puja Maity</h3>
              <p className="text-sky-blue-dark font-bold text-base mt-2 uppercase tracking-wide">BDS (Gold Medalist)</p>
              <p className="text-gray-600 text-lg font-medium mt-1">MDS - Maxillofacial Prosthodontist & Implantologist</p>
            </div>

            {/* Profile Picture */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-blue/20 rounded-full blur-2xl group-hover:bg-sky-blue/30 transition-colors duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/10 rounded-full blur-2xl group-hover:bg-navy/20 transition-colors duration-500"></div>
              <img 
                src="https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/Screenshot_2026-02-10_013548-f3a90e64-4405-4293-a4ca-c6b36ea703cc.webp" 
                alt="Dr. Puja Maity" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] object-top transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>

          <div>
            <span className="text-sky-blue-dark font-bold tracking-wider text-sm uppercase">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-8">Experienced Care You Can Trust</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              At Dental Square, we believe that a healthy smile is the foundation of confidence. Led by Dr. Puja Maity, our clinic provides world-class dental treatments in a hygienic and relaxing environment.
            </p>
            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              With specialized expertise in Maxillofacial Prosthodontics and Implantology, we offer advanced solutions for restoring smiles. Our clinics in Dakshineswar and Belghoria are equipped with the latest technology to ensure precise diagnoses and effective treatments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <Award className="text-navy mb-3" size={32} />
                <h4 className="font-bold text-navy text-lg">Gold Medalist</h4>
                <p className="text-sm text-gray-500 mt-1">Academic Excellence</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <ShieldCheck className="text-navy mb-3" size={32} />
                <h4 className="font-bold text-navy text-lg">Hygienic</h4>
                <p className="text-sm text-gray-500 mt-1">Strict Sterilization</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <Users className="text-navy mb-3" size={32} />
                <h4 className="font-bold text-navy text-lg">Friendly</h4>
                <p className="text-sm text-gray-500 mt-1">Patient-First Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

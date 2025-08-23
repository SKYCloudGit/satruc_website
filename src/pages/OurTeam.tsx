import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureGrid from '@/components/FeaturesGrid';

const leadershipTeam = [
  {
    name: 'Dinesh Bhutada',
    position: 'Chief Executive Officer',
    image: '/Dinesh.jpeg',
    bio: '',
  },

  // Add more leaders if needed
];

const teamMembers = [
  {
    name: '',
    position: 'QA Team',
    image: '/Images/OurTeam.jpeg',
    bio: 'Michael specializes in frontend development and user experience design.',
  },
  {
    name: '',
    position: ' Designe and Development',
    image: '/Images/OurTeam2.jpeg',
    bio: 'Emily crafts intuitive and engaging user interfaces for our applications.',
  },
 
  // Add more members as needed
];

const OurTeam = () => {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar />
<section className="py-20 bg-satruc-50">
      <div className="container mx-auto px-4">

        {/* Leadership Team */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
            Our Leadership
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
            Meet the Founder and Managing Director
          </h2>
          <p className="mt-4 text-lg text-satruc-600">
            Our experienced leadership brings decades of industry expertise to drive innovation and excellence.
          </p>
        </div>
<div className="w-full max-w-screen-xl mx-auto px-6 py-12 bg-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Text Content */}
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our CEO</h2>
      <p className="text-base text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
      {/* <p className="text-sm text-gray-600">
        Image from <a href="#" className="text-blue-600 font-semibold">Freepik</a>
      </p> */}

      {/* Icons Section */}
      {/* <div className="flex flex-col sm:flex-row gap-8 mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
            {/* Replace with actual icon 
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800">OUR SOFTWARE</h4>
          <p className="text-sm text-gray-600 mt-1">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
            {/* Replace with actual icon 
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" />
              <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800">EMAIL SERVERS</h4>
          <p className="text-sm text-gray-600 mt-1">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>*/}
    </div> 

    {/* Image */}
    <div className="w-full flex justify-center">
      <img
        src="../public/Images/Dinesh.jpeg"
        alt="CEO"
        className="w-full max-w-sm rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</div>




        {/* Group Photos Section */}
{/* <div className="max-w-7xl mx-auto px-4 mb-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src="/images/group1.jpg"
        alt="Group Photo 1"
        className="w-full h-80 object-cover object-center"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src="/images/group2.jpg"
        alt="Group Photo 2"
        className="w-full h-80 object-cover object-center"
      />
    </div>
  </div>
</div> */}


        {/* Team Members */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
            Team Members
          </h2>
          <p className="mt-4 text-lg text-satruc-600">
            Our passionate team members are the driving force behind our projects and innovation.
          </p>
        </div>

      <div className="w-full max-w-screen-2xl mx-auto px-4 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
      >
        <img
          src={member.image}
          alt={member.name || `Group Photo ${index + 1}`}
          className="w-full h-auto object-contain max-h-[400px]"
        />
      </div>
    ))}
  </div>
</div>



      </div>
      
    </section>
<section className="py-16 bg-gradient-radial from-black/80 via-black/90 to-black backdrop-blur-md text-white opacity-100">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
               
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <FeatureGrid />
                
                </div> 
              </div>
            </div>
          </section>


    

          <Footer />

    </div>
  );
};

export default OurTeam;

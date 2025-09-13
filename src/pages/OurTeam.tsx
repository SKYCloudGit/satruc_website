import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeaturesGrid";
import ceo from "../assets/Dinesh.jpeg";
import team1 from "../assets/OurTeam.jpeg";
import team2 from "../assets/OurTeam2.jpeg";

const leadershipTeam = [
  {
    name: "Dinesh Bhutada",
    position: "Chief Executive Officer",
    image: ceo,
    bio: "",
  },

  // Add more leaders if needed
];

const teamMembers = [
  {
    name: "",
    position: "QA Team",
    image: team1,
    bio: "Michael specializes in frontend development and user experience design.",
  },
  {
    name: "",
    position: " Designe and Development",
    image: team2,
    bio: "Emily crafts intuitive and engaging user interfaces for our applications.",
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
              Our experienced leadership brings decades of industry expertise to
              drive innovation and excellence.
            </p>
          </div>
          <div className="w-full max-w-screen-xl mx-auto px-6 py-12 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  About Our CEO
                </h2>
                <p className="text-base text-gray-700 mb-4">
                  Mr. Dinesh Bhutada,is an industry expert turned entrepreneur
                  with over 25 years of experience in the gas and water utility
                  sector. Known for his practical and innovation-driven
                  approach, he has developed more than 30 products in the gas
                  industry. In 2018, he founded a modern gas and water meter
                  manufacturing facility in Hyderabad, which has rapidly grown
                  in product development and market reach. Backed by his deep
                  expertise and global collaborations, he has secured two
                  patents and continues to deliver advanced metering solutions
                  that strengthen India’s infrastructure and sustainability
                  goals.{" "}
                </p>
              </div>

              {/* Image */}
              <div className="w-full flex justify-center">
                <img
                  src={ceo}
                  alt="CEO"
                  loading="lazy"
                  className="w-full max-w-sm rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
              Team Members
            </h2>
            <p className="mt-4 text-lg text-satruc-600">
              Our passionate team members are the driving force behind our
              projects and innovation.
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
                    loading="lazy"
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

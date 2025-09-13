import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Users,
  ShieldCheck,
  Lightbulb,
  Award,
  BarChart,
  Factory,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeaturesGrid";
import factory from "../assets/satruc.jpeg";

const About = () => {
  // Animate sections as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll(".fade-in-section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Timeline data
  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Satruc Appliances was established as a small workshop in Hyderabad, focused on mechanical regulators.",
    },
    {
      year: "2019",
      title: "Manufacturing Plant",
      description:
        "Expanded operations with our first dedicated manufacturing facility in Fab City Hyderabad.",
    },
    {
      year: "2020",
      title: "Electronic Innovation",
      description:
        "Pioneered our first electronic gas regulation system, setting new industry standards.",
    },
    {
      year: "2020",
      title: "International Expansion",
      description:
        "Began exports to Middle East and Southeast Asian markets, establishing global presence.",
    },
    {
      year: "2022",
      title: "Smart Technology Integration",
      description:
        "Launched SmartFlow series with IoT connectivity and remote monitoring capabilities.",
    },
    {
      year: "2025",
      title: "R&D Excellence Center",
      description:
        "Opened state-of-the-art research facility focused on next-generation regulation technologies.",
    },
  ];

  // Team members
  const teamMembers = [
    {
      name: "Satish Kabra",
      position: "",
      image: "abc.jpg",
      bio: "Industry veteran with 25+ years of experience in industrial automation and control systems.",
    },
    {
      name: "Dinesh Bhutada",
      position: "",
      image: "abc.jpg",
      bio: "PhD in Mechanical Engineering with expertise in precision flow control technologies.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-satruc-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="max-w-xl">
                <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  About Satruc
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-satruc-900 mb-6 leading-tight">
                  Engineering Excellence
                </h1>
                <p className="text-xl text-satruc-700 mb-6">
                  Since inception, Satruc has pioneered precision manufacturing,
                  setting industry standards through continuous innovation and
                  uncompromising quality.{" "}
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* <div className="flex items-center">
                    <Clock className="h-5 w-5 text-satruc-accent-600 mr-2" />
                    <span className="text-satruc-700 text-sm">
                      8+ Years Experience
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-satruc-accent-600 mr-2" />
                    <span className="text-satruc-700 text-sm">
                      50+ Employees
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-satruc-accent-600 mr-2" />
                    <span className="text-satruc-700 text-sm">
                      ISO 9001:2015 Certified
                    </span>
                  </div>*/}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={factory}
                  alt="Satruc Manufacturing Facility"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-satruc-950/30 to-transparent"></div>
              </div>

              {/* Floating accent */}
              {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-glass p-4 z-10 animate-slide-up">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-satruc-accent-50 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-satruc-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-satruc-900">Industry Leader</div>
                    <div className="text-xs text-satruc-600">Award-winning technology</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white fade-in-section opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-satruc-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-satruc-accent-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-satruc-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-satruc-700">
                  To be the global leader in innovative manufacturing solutions,
                  driving industry standards through constant innovation and
                  excellence in engineering.{" "}
                </p>
              </div>
              <div className="bg-satruc-accent-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-satruc-accent-600 text-white rounded-full flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-satruc-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-satruc-700">
                  To enhance safety and efficiency through precision
                  engineering, delivering reliable manufacturing solutions that
                  exceed customer expectations and set new industry standards.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-satruc-950 text-white fade-in-section opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-satruc-accent-600/20 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Core Values That Define Us
            </h2>
            <p className="mt-4 text-lg text-satruc-300">
              These foundational principles guide our decisions, shape our
              culture, and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety First",
                description:
                  "We engineer solutions where safety is built into every step, consistently exceeding global manufacturing standards.",
              },
              {
                icon: Award,
                title: "Uncompromising Quality",
                description:
                  "Every component and system undergoes rigorous testing to deliver exceptional performance and long-term reliability.",
              },
              {
                icon: Lightbulb,
                title: "Continuous Innovation",
                description:
                  "We invest heavily in research and development to drive innovation across all areas of advanced manufacturing.",
              },
              {
                icon: Users,
                title: "Customer Partnership",
                description:
                  "We build long-term partnerships by delivering responsive support and tailored manufacturing solutions for each client’s needs.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 border border-satruc-800 rounded-lg hover:border-satruc-accent-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-satruc-accent-600/10 text-satruc-accent-600 flex items-center justify-center mb-5">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-satruc-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      {/* <section className="py-20 bg-white fade-in-section opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
              Milestones That Shaped Us
            </h2>
            <p className="mt-4 text-lg text-satruc-600">
              From humble beginnings to industry leadership, our journey reflects our unwavering commitment to innovation and excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line 
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-satruc-100"></div>
              
              {/* Timeline events 
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center bg-satruc-accent-50 rounded-full border-4 border-white z-10">
                      <span className="text-satruc-accent-600 font-bold">{event.year}</span>
                    </div>
                    <div className="ml-6 bg-white p-6 shadow-sm rounded-lg border border-satruc-100 flex-grow">
                      <h3 className="text-lg font-semibold text-satruc-900 mb-2">{event.title}</h3>
                      <p className="text-satruc-700">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      {/* <section className="py-20 bg-satruc-50 fade-in-section opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
              Our Leadership
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-satruc-600">
              Our experienced leadership team brings decades of industry expertise to drive innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-satruc-900 mb-1">{member.name}</h3>
                  <p className="text-satruc-accent-600 text-sm mb-3">{member.position}</p>
                  <p className="text-satruc-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Facilities & Capabilities */}
      <section className="py-20 bg-white fade-in-section opacity-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-satruc-900 mb-6 leading-tight">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-satruc-700 mb-8">
                Our advanced manufacturing facilities combine precision
                engineering with cutting-edge technology to deliver products of
                unparalleled quality and reliability.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Factory,
                    title: "10,000 sq.ft +  Manufacturing Facility",
                    description:
                      "Our ISO 9001:2015 certified facility in Hyderabad houses automated production lines, precision machinery, and robust quality control systems.",
                  },
                  {
                    icon: Briefcase,
                    title: "In-House R&D Department",
                    description:
                      "Our dedicated research team drives innovation across multiple domains,  including break throughs in gas and water regulation and control technologies.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Technical Excellence",
                    description:
                      "Our workforce includes highly skilled engineers with deep expertise in advanced manufacturing, and intelligent control systems.",
                  },
                ].map((facility, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 h-12 rounded-full bg-satruc-accent-50 text-satruc-accent-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <facility.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-satruc-900 mb-2">
                        {facility.title}
                      </h3>
                      <p className="text-satruc-600">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-sm h-48 md:h-64">
                  <img
                    src={factory}
                    alt="Manufacturing facility"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm h-48 md:h-64 bg-satruc-accent-600 text-white p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Quality Control
                    </h3>
                    <p className="text-white/90 text-sm">
                      Every product undergoes rigorous testing to ensure perfect
                      performance.
                    </p>
                  </div>
                  <div className="text-4xl font-bold"></div>{" "}
                  {/*can add percentage in the div*/}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-sm h-64 md:h-80 bg-satruc-50 p-6">
                  <h3 className="text-xl font-semibold text-satruc-900 mb-3">
                    Cutting-Edge Technology
                  </h3>
                  <p className="text-satruc-700 text-sm mb-4">
                    Our production processes incorporate the latest advancements
                    in precision manufacturing.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Technology closeup"
                    loading="lazy"
                    className="rounded-lg h-32 w-full object-cover mt-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm h-36 md:h-48">
                  <img
                    src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Quality testing"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-radial from-black/80 via-black/90 to-black backdrop-blur-md fade-in-section opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <FeatureGrid />
              {/* <Link 
                to="/contact" 
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                  "px-6 py-3 bg-white text-satruc-accent-700 hover:bg-satruc-50",
                  "active:scale-[0.98]"
                )}
              >
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              {/* <Link 
                to="/products" 
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
                  "px-6 py-3 border border-white text-white hover:bg-white/10"
                )}
              >
                Explore Products
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

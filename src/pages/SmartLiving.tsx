import React, { useEffect, useState } from "react";
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
  Microscope,
  CheckCircle,
  Shield,
  ArrowRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import bgImage from "../../src/assets/smartliving.avif";
import { useInView } from "react-intersection-observer";
import Image1 from "../../src/assets/smartliving1.avif";
import Image2 from "../../src/assets/smartliving2.avif";
import FeatureGrid from "@/components/FeaturesGrid";

export default function SmartLiving() {
  // ✅ Define the 2 assets you want to swap on scroll
  const assets = [Image1, Image2];

  // ✅ Default active image
  const [activeImage, setActiveImage] = useState(assets[0]);

  // ✅ Set up intersection observers for text sections
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  // ✅ Change the image when sections come into view
  useEffect(() => {
    if (inView2) {
      setActiveImage(assets[1]);
    } else if (inView1) {
      setActiveImage(assets[0]);
    }
  }, [inView1, inView2]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white py-40 px-6">
          <div className="md:w-1/2 max-w-xl z-10 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-satruc-950">
              “Manufacturing the Invisible Intelligence”
              <span className="block text-satruc-accent-600">
                Smart manufacturing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed"></p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-0 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src={bgImage}
              alt="Quality Management"
              loading="lazy"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Scroll-triggered Image Section */}
        {/* Scroll-triggered Image & Content Section */}
        <section className="relative flex flex-col md:flex-row items-start justify-between bg-white px-6 py-0">
          <div className="flex w-full">
            {/* Left Side: Sticky, Full Screen Image */}
            <div className="hidden md:block md:w-1/2 h-screen sticky top-0">
              <img
                src={activeImage}
                alt="Scroll-triggered"
                loading="lazy"
                className="w-full h-screen object-cover"
              />
            </div>

            {/* Right Side: Scrollable Text Sections */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div
                ref={ref1}
                className="p-8 text-center md:text-left min-h-screen flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  “Enabling Comfort at the Tap of a Finger”
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Our manufacturing excellence delivers precision-built
                  responsive and intelligent systems. We ensure every action by
                  us from manufacturing to final control is powered by quality
                  you can trust.{" "}
                </p>{" "}
              </div>

              <div
                ref={ref2}
                className="p-8 text-center md:text-left min-h-screen flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  “Engineering Everyday Intelligence”
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  From digital design to large-scale production, Satruc provides
                  the manufacturing backbone for smart living. We enable global
                  brands to bring connected environments to life—dependably,
                  precisely, and at scale.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-26">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built for Reliability, Engineered for Lifestyle
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We apply rigorous quality controls across every step of
                production—ensuring each smart-living innovation is dependable,
                precise, and ready for the future.{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Seamless Smart Integration",
                  description:
                    "Our devices are optimized for effortless connectivity across all ecosystems, ensuring a smooth and intuitive user experience.",
                },
                {
                  icon: Shield,
                  title: "Lifestyle-Ready Compliance",
                  description:
                    "We adhere to modern smart-operating standards focused on energy efficiency, data privacy, and seamless interoperability.",
                },
                {
                  icon: Award,
                  title: "Tailored for Modern Living",
                  description:
                    "Our design-first approach delivers engineered solution and technology that adapts to your operational needs.",
                },
                {
                  icon: Users,
                  title: "Human-Centric Validation",
                  description:
                    "Every product is tested for real-world usability, aesthetics, and ergonomics to ensure exceptional  application adoptability.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className=" w-12 h-12 bg-satruc-accent-600 text-white 
 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section 
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "99.9%", label: "Quality Rate", suffix: "" },
                { number: "25", label: "Years Experience", suffix: "+" },
                { number: "500", label: "Projects Completed", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-xl text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action Section 
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Ensure Quality Excellence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us for manufacturing solutions that prioritize quality, reliability, and precision at every step.
            </p>
          </div>
        </section> */}
      </div>

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
}

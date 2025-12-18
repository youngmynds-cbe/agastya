"use client";

import React from "react";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import {
  Building2,
  FileCheck,
  Scale,
  DollarSign,
  Home,
  FileText,
  Users,
  Headphones,
  ThumbsUp,
  ChevronRight,
} from "lucide-react";
import { Award, CheckCircle, ChevronDown } from "lucide-react";
import { Play } from "lucide-react";
import Footer from "../components/Footer";

const Hero = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const PortfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const services = [
    { icon: Building2, text: "Buy & Sell Properties" },
    { icon: FileCheck, text: "Power Of Attorney Assistance" },
    { icon: Scale, text: "Legal & Registration Support" },
    { icon: DollarSign, text: "Loan & EMI Guidance" },
    { icon: Home, text: "Property Management" },
    { icon: FileText, text: "Document Verification" },
    { icon: Users, text: "NRI & HNI Client Services" },
    { icon: Headphones, text: "End-To-End Consulting" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "Buy",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const projects = [
    {
      image: "../images/Rectangle 11 (1).png",
      title: "Apartments",
      description:
        "Stylish City Apartments Designed For Comfort And Convenience.",
    },
    {
      image: "../images/Rectangle 12 (1).png",
      title: "Villas",
      description:
        "Spacious Villas Perfect For Families, With Private Gardens & Amenities.",
    },
    {
      image: "../images/Rectangle 13 (1).png",
      title: "Plots & Land",
      description:
        "Secure Your Future With Investment-Ready Plots In Prime Locations.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
      name: "Rajesh kumar",
      position: "CEO of Modern Real Estate",
      image: "../images/testimonial.png",
    },
    {
      id: 2,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
      name: "Priya Sharma",
      position: "Director of Urban Spaces",
      image: "../images/testimonial.png",
    },
    {
      id: 3,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco",
      name: "Amit Patel",
      position: "Founder of Tech Homes",
      image: "../images/testimonial.png",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const stats = [
    {
      icon: Award,
      value: "5+",
      label: "Year Experience",
    },
    {
      icon: Building2,
      value: "10,000+",
      label: "Properties Transacted",
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Legal & Verified Deals",
    },
    {
      icon: Users,
      value: "NRI",
      label: "Personalized NRI Assistance",
    },
  ];
  return (
    <div>
      <Navbar
        onHomeClick={() =>
          homeRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onAboutClick={() =>
          aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onServicesClick={() =>
          servicesRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onPortfolioClick={() =>
          PortfolioRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onTestimonialsClick={() =>
          testimonialsRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onContactClick={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <section ref={homeRef}>
        <div className="relative w-full sm:h-[630px] h-[850px] lg:mt-25 ">
          <img
            src="../images/Frame 13.png"
            alt="Frame"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1
              className="
    text-white
    font-montserrat
    font-bold
    text-[42px]
    sm:text-[52px]
    md:text-[62px]
    leading-none
    text-center
    capitalize
    mb-6
  "
            >
              Find Your Dream Home With Ease
            </h1>

            <p className="text-white/90 font-montserrat font-medium text-[26px] leading-none tracking-normal text-center capitalize mb-8 max-w-6xl mx-auto ">
              Buy, Sell, or Rent Properties – Trusted By 1000+ Happy Families.
            </p>
            <div
              className="w-[179px] h-[48.61px] border border-white flex justify-around  rounded-3xl text-white
             hover:bg-white hover:text-black  "
            >
              <button
                className="font-poppins font-semibold text-[14px] leading-none tracking-normal
             text-center capitalize
             flex items-center justify-center
             px-6 py-2
             rounded-full
        
             
             transition"
              >
                Explore Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#EEEEEE]  py-32 px-4">
        <div className="max-w-7xl  mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="relative z-10 w-[375px] h-[449px] opacity-100">
                <img
                  src="../images/about-img.png"
                  alt="Modern luxury home exterior"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>

         
              <div className="absolute top-32 w-[375px]  -right-8 md:right-0  z-20 mb-20">
                <img
                  src="../images/about-img2.png"
                  alt="Modern apartment complex"
                  className="w-full h-[449px] object-cover rounded-lg shadow-2xl border-17 border-[#EEEEEE]"
                />
              </div>
            </div>

            <div className="space-y-6 mt-8 md:mt-0">
              <h2 className="font-montserrat font-medium text-[22px] leading-none tracking-normal text-start capitalize text-gray-900">
                About Us
              </h2>

              <h3 className="font-montserrat font-semibold text-[22px] leading-[138%] tracking-normal text-justify capitalize text-gray-800">
                What Matters To Us Is Timeless Design, Sustainable Quality And
                Ecological Awareness.
              </h3>
              <p className="font-montserrat font-normal text-[18px] leading-[168%] tracking-normal text-justify capitalize text-gray-700">
                At Agastya We Believe Finding The Right Property Should Be
                Simple, Transparent, And Stress-Free. With Over 15 Years Of
                Industry Experience And More Than 10,000 Successful Property
                Transactions, We Have Earned The Trust Of Homebuyers, Investors,
                And Businesses Alike. Our Mission Is To Connect People With
                Their Dream Homes And Investment Opportunities, While Providing
                End-To-End Support – From Property Search To Legal Guidance And
                Final Handover.
              </p>

              <button className="px-10 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 font-semibold text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <section
        ref={aboutRef}
        className="bg-[#EEEEEE] py-16 sm:py-24 lg:py-32 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Images */}
            <div className="relative flex justify-center md:block">
              {/* Main Image */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[375px]">
                <img
                  src="/images/about-img.png"
                  alt="Modern luxury home exterior"
                  className="w-full h-auto object-cover rounded-lg shadow-xl"
                />
              </div>

              {/* Overlapping Image */}
              <div
                className="
          relative md:absolute
          mt-6 md:mt-0
          md:top-32
          md:-right-8 lg:right-0
          z-20
          w-full max-w-[320px] sm:max-w-[360px] md:max-w-[375px]
        "
              >
                <img
                  src="/images/about-img2.png"
                  alt="Modern apartment complex"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border-12 border-[#EEEEEE]"
                />
              </div>
            </div>

            <div className="space-y-5 mt-6 md:mt-0">
              <h2 className="font-montserrat font-medium text-[18px] sm:text-[20px] lg:text-[22px] text-gray-900 capitalize">
                About Us
              </h2>

              <h3 className="font-montserrat font-semibold text-[20px] sm:text-[22px] lg:text-[22px] leading-[138%] text-gray-800 capitalize">
                What Matters To Us Is Timeless Design, Sustainable Quality And
                Ecological Awareness.
              </h3>

              <p className="font-montserrat font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[168%] text-gray-700 text-justify capitalize">
                At Agastya We Believe Finding The Right Property Should Be
                Simple, Transparent, And Stress-Free. With Over 15 Years Of
                Industry Experience And More Than 10,000 Successful Property
                Transactions, We Have Earned The Trust Of Homebuyers, Investors,
                And Businesses Alike. Our Mission Is To Connect People With
                Their Dream Homes And Investment Opportunities, While Providing
                End-To-End Support – From Property Search To Legal Guidance And
                Final Handover.
              </p>

              <button className="px-8 sm:px-10 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 font-semibold text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="font-montserrat font-semibold text-[42px] leading-[138%] tracking-normal text-justify align-middle capitalize text-gray-900">
                One Partner For All Your Real Estate Needs!
              </h2>

              {/* Services List */}
              <div className="space-y-7">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <div className="shrink-0">
                      <service.icon
                        className="w-6 h-6 text-gray-700"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="font-montserrat font-semibold text-[20px] leading-[21px] tracking-[-0.31px] text-justify align-middle capitalize text-[#404040]">
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="../images/Rectangle 41.png"
                alt="Modern apartment building"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEEEEE] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
            Exclusive Projects For Our Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-[375px] mx-auto"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-1 min-h-[210px] flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed grow">
                    {project.description}
                  </p>
                  <button className="text-gray-800 font-semibold hover:text-red-600 transition-colors duration-300 underline text-left">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-12 py-4 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-300 font-semibold text-lg">
              Book A Call
            </button>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="../images/Rectangle 19.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Why Premium Clients Trust Us
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4">
                  <stat.icon
                    className="w-12 h-12 text-orange-600"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={PortfolioRef}>
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Video/Image */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="../images/Rectangle 39 (1).png"
                    alt="Founder"
                    className="w-full h-auto object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Play
                        className="w-8 h-8 text-gray-800 ml-1"
                        fill="currentColor"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6">
                <h2
                  className="
  font-[Montserrat]
  font-semibold
  text-[42px]
  leading-[1.38]
  tracking-normal
  text-justify
  capitalize
  text-[#404040]
"
                >
                  A Message From Our Founder
                </h2>

                <p
                  className="
  font-[Montserrat]
  font-medium
  text-[26px]
  leading-[1.38]
  tracking-normal
  text-justify
  capitalize
  text-[#404040]
"
                >
                  Hear Directly From The Visionary Behind Agastya On Our
                  Mission, Values, And Commitment To Premium Clients.
                </p>

                <div className="pt-8">
                  <div className="text-right">
                    <h3
                      className="
  font-[Montserrat]
  font-semibold
  text-[36px]
  leading-[1.38]
  tracking-normal
  text-end
  capitalize
  text-[#404040]
"
                    >
                      Rajkumar
                    </h3>

                    <p className="text-lg text-gray-600 mt-1">
                      Founder And CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={contactRef}>
        <div className="w-full bg-[#EEEEEE] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <h2
              className="
  font-[Montserrat]
  font-semibold
  text-[42px]
  leading-[1.38]
  tracking-normal
  text-center
  capitalize
  text-gray-900
  mb-16
"
            >
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-5 h-5 text-white" fill="white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    Testimonial
                  </span>
                </div>

                {/* Testimonial Text */}
                <div className="grow">
                  <p
                    className="
  font-[Manrope]
  font-normal
  text-[22px]
  leading-[1.67]
  tracking-normal
  text-justify
  text-gray-700
  mb-8
"
                  >
                    {currentTestimonial.text}
                  </p>

                  {/* Quote Mark */}
                  <div className="mb-4 text-right">
                    <img
                      src="../images/Vector (1).png"
                      alt="Quote icon"
                      className="inline-block w-24 opacity-20"
                    />
                  </div>
                </div>

                {/* Author Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600 text-base mt-1">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>

              <div
                className="
  relative
  w-full lg:w-[420px]
  h-80 sm:h-[420px] lg:h-[600px]
  rounded-3xl
  overflow-hidden
  lg:ml-40
"
              >
                <img
                  src={currentTestimonial.image}
                  alt="Property"
                  className="w-full h-full object-cover"
                />

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute bottom-8 right-2 bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg z-10"
                >
                  <span className="font-medium">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Form */}
              <div className="w-full max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Need Expert Help With Your Property?
                </h2>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black"
                    />
                  </div>

                  {/* Requirement Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Requirement
                    </label>
                    <div className="relative">
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-black"
                      >
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                        <option value="Lease">Lease</option>
                        <option value="Investment">Investment</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-medium hover:bg-orange-600 hover:text-white transition-colors duration-300"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-96 lg:h-full min-h-[500px]">
                <img
                  src="../images/Rectangle 44 (1).png"
                  alt="Modern Property"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hero;

"use client";

import React from "react";
import { useState, useRef ,useEffect} from "react";
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
import { motion,AnimatePresence } from "framer-motion";

const Hero = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const PortfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);


  
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
    const images = [
    "../images/Frame 13.png",
    "../images/bannerbg.jpg",
    "../images/bannerbg2.jpg",
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

  const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
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

  const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 👈 one by one delay
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const stats = [
    {
      image: "../images/employer.png",
      value: "5+",
      label: "Year Experience",
    },
    {
      image: "../images/commercial-properties-insurance.png",
      value: "10,000+",
      label: "Properties Transacted",
    },
    {
      image: "../images/signed.png",
      value: "100%",
      label: "Legal & Verified Deals",
    },
    {
      image: "/images/document.png",
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
     <section id="home">
      <div
        ref={homeRef}
        className="relative w-full sm:h-[630px] h-[850px] lg:mt-25 overflow-hidden"
      >
        {/* Background Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-montserrat font-bold text-[42px] sm:text-[52px] md:text-[62px] leading-none capitalize mb-6">
            Find Your Dream Home With Ease
          </h1>

          <p className="text-white/90 font-montserrat font-medium text-[26px] leading-none text-center capitalize mb-8 max-w-6xl mx-auto">
            Buy, Sell, or Rent Properties – Trusted By 1000+ Happy Families.
          </p>

          <div className="w-[179px] h-[48.61px] border border-white flex justify-center items-center rounded-3xl text-white hover:bg-white hover:text-black transition">
            <button className="font-poppins font-semibold text-[14px] capitalize">
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
  id="about"
  ref={aboutRef}
  className="bg-[#EEEEEE] py-16 sm:py-24 lg:py-32 px-4 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
      {/* LEFT IMAGE – Slide from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex justify-center md:block"
      >
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
      </motion.div>

      {/* RIGHT CONTENT – Slide from RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-5 mt-6 md:mt-0"
      >
        <h2 className="relative inline-block font-[montserrat] font-medium text-[18px] sm:text-[20px] lg:text-[22px] text-[#404040] capitalize">
          About Us
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-12 h-0.5 bg-[#404040]"></span>
        </h2>

        <h3 className="font-[montserrat] font-semibold text-[20px] sm:text-[22px] lg:text-[22px] leading-[158%] text-[#404040] capitalize">
          What Matters To Us Is Timeless Design, Sustainable Quality And
          Ecological Awareness.
        </h3>

        <p className="font-[montserrat] font-normal text-[18px] leading-[208%] text-[#404040] text-justify capitalize">
          At Agastya We Believe Finding The Right Property Should Be Simple,
          Transparent, And Stress-Free. With Over 15 Years Of Industry Experience
          And More Than 10,000 Successful Property Transactions, We Have Earned
          The Trust Of Homebuyers, Investors, And Businesses Alike.
        </p>

        <button
          className="
            px-8 sm:px-10 py-3
            border-2 border-[#533625]
            text-[#A06340]
            rounded-full
            hover:bg-red-600 hover:text-white
            transition-colors duration-300
            font-['Poppins'] font-semibold
            text-[16.5px]
            capitalize
          "
        >
          Learn More
        </button>
      </motion.div>

    </div>
  </div>
</section>

   <section
  id="services"
  ref={servicesRef}
  className="bg-white py-16 px-4 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT – Fade + Slide from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-8"
      >
        <h2 className="font-[montserrat] font-semibold text-[42px] leading-[138%] text-justify capitalize text-gray-900">
          One Partner For All Your Real Estate Needs!
        </h2>

        {/* Services List */}
        <div className="space-y-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="flex items-center gap-5"
            >
              <div className="shrink-0">
                <service.icon
                  className="w-6 h-6 text-gray-700"
                  strokeWidth={2.5}
                />
              </div>

              <span className="font-[montserrat] font-semibold text-[20px] leading-[21px] tracking-[-0.31px] capitalize text-[#404040]">
                {service.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT IMAGE – Fade + Slide from RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="../images/Rectangle 41.png"
          alt="Modern apartment building"
          className="w-full h-full object-cover"
        />
      </motion.div>

    </div>
  </div>
</section>

   <section className="bg-[#EEEEEE] py-16 px-4 overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Title Fade */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-5xl font-bold text-gray-900 text-center mb-12 font-[montserrat]"
    >
      Exclusive Projects For Our Clients
    </motion.h2>

    {/* Cards Container */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-3 gap-8 mb-12"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
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
            <h3 className="font-[montserrat] font-semibold text-[24px] leading-[138%] text-gray-900 capitalize">
              {project.title}
            </h3>

            <p className="text-gray-600 leading-relaxed grow font-[montserrat]">
              {project.description}
            </p>

            <button className="text-[#404040] font-semibold hover:text-[#A06340] transition-colors duration-300 underline text-left font-[montserrat]">
              Book Now
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <button className="px-12 py-4 border-2 border-[#A06340] text-[#A06340] rounded-full hover:bg-[#A06340] hover:text-white transition-colors duration-300 font-semibold text-lg">
        Book A Call
      </button>
    </motion.div>

  </div>
</section>
    <section className="relative py-20 px-4 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="../images/Rectangle 19.png"
      alt="Background"
      className="w-full h-[533px] object-cover opacity-[0.46]"
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto">
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-[montserrat]"
    >
      Why Premium Clients Trust Us
    </motion.h2>

    {/* Stats Grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="mb-4">
            <img
              src={stat.image}
              alt={stat.label}
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Value */}
          <div className="text-4xl font-bold text-[#A06340] mb-2">
            {stat.value}
          </div>

          {/* Label */}
          <p className="text-gray-600 text-sm font-medium font-[montserrat]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
     <section id="portfolio" ref={PortfolioRef}>
  <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT – IMAGE */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="../images/Rectangle 39 (1).png"
              alt="Founder"
              className="w-full h-auto object-cover"
            />

            {/* Play Button */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <Play
                  className="w-8 h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h2 variants={textVariant} className="font-[Montserrat] font-semibold text-[40px] leading-[1.38] capitalize text-[#404040]">
            A Message From Our Founder
          </motion.h2>

          <motion.p variants={textVariant} className="font-[Montserrat] font-medium text-[26px] leading-[1.38] capitalize text-[#404040]">
            Hear Directly From The Visionary Behind Agastya On Our Mission,
            Values, And Commitment To Premium Clients.
          </motion.p>

          <motion.div variants={textVariant} className="pt-8">
            <div className="text-right">
              <h3 className="font-[Montserrat] font-semibold text-[36px] leading-[1.38] capitalize text-[#404040]">
                Rajkumar
              </h3>
              <p className="text-lg text-[#404040] mt-1 font-[Montserrat] font-semibold">
                Founder And CEO
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </div>
</section>
 <section id="contact" ref={contactRef}>
  <div className="w-full bg-[#EEEEEE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto"
    >
      {/* Header */}
      <h2 className="font-[Montserrat] font-semibold text-[42px] text-center capitalize text-gray-900 mb-16">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* LEFT – CONTENT */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-12 lg:p-16 flex flex-col justify-between"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#D97D47] rounded-full flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-[24px] font-bold text-gray-900 font-[Manrope]">
              Testimonial
            </span>
          </div>

          {/* Animated Testimonial Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grow"
            >
              <p className="font-[Manrope] text-[22px] leading-[1.67] text-justify text-gray-700 mb-8">
                {currentTestimonial.text}
              </p>

              <div className="mb-4 text-right">
                <img
                  src="../images/Vector (1).png"
                  alt="Quote icon"
                  className="inline-block w-24 opacity-20"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 font-[Manrope]">
                {currentTestimonial.name}
              </h3>
              <p className="text-gray-600 text-base mt-1 font-[Manrope]">
                {currentTestimonial.position}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full lg:w-[420px] h-80 sm:h-[420px] lg:h-[600px] rounded-3xl overflow-hidden lg:ml-40"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentTestimonial.image}
              alt="Property"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute bottom-8 right-2 bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg z-10"
          >
            <span className="font-medium">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Dots */}
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
    </motion.div>
  </div>
</section>
  <section>
  <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* LEFT – FORM */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-xl"
        >
          <h2 className="font-[Montserrat] font-semibold text-[28px] sm:text-[34px] lg:text-[38px] leading-[138%] text-[#404040] mb-8 capitalize">
            Need Expert Help With Your Property?
          </h2>

          <div className="space-y-6">
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Enter your Name" },
              { label: "Email ID", type: "email", name: "email", placeholder: "Enter your Email" },
              { label: "Phone Number", type: "tel", name: "phone", placeholder: "Enter your Phone Number" },
            ].map((field, i) => (
              <motion.div
                key={field.name}
                custom={i}
                variants={fieldVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-900 mb-2 font-[Inter]">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A06340] text-black"
                />
              </motion.div>
            ))}

            {/* Requirement */}
            <motion.div
              custom={3}
              variants={fieldVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-gray-900 mb-2 font-[Inter]">
                Requirement
              </label>
              <div className="relative">
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#A06340] bg-white text-black"
                >
                  <option>Buy</option>
                  <option>Sell</option>
                  <option>Rent</option>
                  <option>Lease</option>
                  <option>Investment</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
              </div>
            </motion.div>

            {/* Button */}
            <motion.div
              custom={4}
              variants={fieldVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="pt-4"
            >
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-white text-[#A06340] border-2 border-[#A06340] rounded-full font-medium hover:bg-[#A06340] hover:text-white transition-colors duration-300"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-96 lg:h-full min-h-[500px]"
        >
          <img
            src="../images/Rectangle 44 (1).png"
            alt="Modern Property"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Hero;

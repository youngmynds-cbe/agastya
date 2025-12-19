// "use client";

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = ({
//   onHomeClick,
//   onAboutClick,
//   onServicesClick,
//   onPortfolioClick,
//   onContactClick,
// }) => {
//   const navLinks = [
//     { label: "Home", onClick: onHomeClick },
//     { label: "About Us", onClick: onAboutClick },
//     { label: "Services", onClick: onServicesClick },
//     { label: "Portfolio", onClick: onPortfolioClick },
//     { label: "Contact Us", onClick: onContactClick },
//   ];
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const [activeLink, setActiveLink] = useState("Home");
//   const [open, setOpen] = useState(false);

//   return (
//     // <nav className="w-full bg-[#f5f5f0] border-b border-gray-200">
//     //   <div className="max-w-7xl mx-auto px-3 py-2">
//     //     <div className="flex items-center justify-between">

//     //       {/* Logo + Title */}
//     //       <div className="flex items-center gap-3">
//     //         <div className="w-[70px] h-[60px] sm:w-[95px] sm:h-[83px]">
//     //           <img
//     //             src="../images/logo (1) 1.png"
//     //             alt="Logo"
//     //             className="w-full h-full object-contain"
//     //           />
//     //         </div>

//     //         <span className="font-['Poppins'] text-[22px] sm:text-[32px] font-semibold leading-none text-[#533625]">
//     //           AGASTYA
//     //         </span>
//     //       </div>

//     //       {/* Desktop Menu */}
//     //       <div className="hidden md:flex items-center sm:gap-16 gap-8">
//     //         {navLinks.map((link) => (
//     //           <button
//     //             key={link}
//     //             onClick={() => setActiveLink(link)}
//     //             className={`font-['Poppins'] text-[18px] font-semibold transition-colors
//     //               ${
//     //                 activeLink === link
//     //                   ? "text-[#404040]"
//     //                   : "text-[#404040]/70 hover:text-[#404040]"
//     //               }`}
//     //           >
//     //             {link}
//     //           </button>
//     //         ))}
//     //       </div>

//     //       {/* Mobile Menu Button */}
//     //       <button
//     //         onClick={() => setOpen(!open)}
//     //         className="md:hidden text-[#404040]"
//     //       >
//     //         {open ? <X size={26} /> : <Menu size={26} />}
//     //       </button>
//     //     </div>

//     //     {/* Mobile Dropdown */}
//     //     {open && (
//     //       <div className="md:hidden mt-3 flex flex-col gap-3 bg-white rounded-lg p-4 shadow">
//     //         {navLinks.map((link) => (
//     //           <button
//     //             key={link}
//     //             onClick={() => {
//     //               setActiveLink(link);
//     //               setOpen(false);
//     //             }}
//     //             className={`text-left font-['Poppins'] text-[16px] font-medium
//     //               ${
//     //                 activeLink === link
//     //                   ? "text-[#404040]"
//     //                   : "text-[#404040]/70"
//     //               }`}
//     //           >
//     //             {link}
//     //           </button>
//     //         ))}
//     //       </div>
//     //     )}
//     //   </div>
//     // </nav>
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300
//     ${scrolled ? "py-1" : "py-0"}
//   `}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2 sm:gap-3">
//             <div
//               className={`transition-all duration-300
//     ${
//       scrolled
//         ? "w-10 h-9 sm:w-[55px] sm:h-[50px]"
//         : "w-14 h-12 sm:w-[75px] sm:h-[65px] md:w-[90px] md:h-20"
//     }
//   `}
//             >
//               <img
//                 src="/images/logo (1) 1.png"
//                 alt="Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             <span
//               className={`font-poppins font-semibold text-[#533625] whitespace-nowrap 
//     leading-8 tracking-[0] align-middle transition-all duration-300
//     ${scrolled ? "text-[20px]" : "text-[32px]"}
//   `}
//             >
//               AGASTYA
//             </span>
//           </div>

//           <div className="hidden md:flex items-center gap-10 lg:gap-16">
//             {navLinks.map((link) => (
// <button
//   key={link.label}
//   onClick={() => {
//     setActiveLink(link.label);
//     link.onClick?.();
//   }}
//   className={`relative font-['Poppins'] font-semibold lg:text-[20px] md:text-[13px]
//     transition-all duration-300
//     ${
//       activeLink === link.label
//         ? "text-[#A06340]"
//         : "text-[#404040] hover:text-black"
//     }`}
// >
//   {link.label}

//   {/* Active Bar */}
//   <span
//     className={`absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#A06340] transition-all duration-300
//       ${
//         activeLink === link.label
//           ? "opacity-100 scale-x-100"
//           : "opacity-0 scale-x-0"
//       }`}
//   />
// </button>


//             ))}
//           </div>

//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-black flex items-center justify-center"
//           >
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>

//         {open && (
//           <div className="md:hidden mt-4 w-full bg-white rounded-xl p-4 shadow-lg border border-gray-200">
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.label}
//                   onClick={() => {
//                     setActiveLink(link.label);
//                     setOpen(false);
//                     link.onClick?.();
//                   }}
//                   className={`text-left font-['Poppins'] text-[16px] font-medium
//             ${
//               activeLink === link.label
//                 ? "text-black"
//                 : "text-black/70 hover:text-black"
//             }`}
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onPortfolioClick,
  onContactClick,
}) => {
  const navLinks = [
    { label: "Home", id: "home", onClick: onHomeClick },
    { label: "About Us", id: "about", onClick: onAboutClick },
    { label: "Services", id: "services", onClick: onServicesClick },
    { label: "Portfolio", id: "portfolio", onClick: onPortfolioClick },
    { label: "Contact Us", id: "contact", onClick: onContactClick },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [open, setOpen] = useState(false);

  /* Navbar shrink on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔥 ScrollSpy Logic */
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300
        ${scrolled ? "py-1" : "py-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`transition-all duration-300
                ${
                  scrolled
                    ? "w-10 h-9 sm:w-[55px] sm:h-[50px]"
                    : "w-14 h-12 sm:w-[75px] sm:h-[65px] md:w-[90px] md:h-20"
                }`}
            >
              <img
                src="/images/logo (1) 1.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span
              className={`font-poppins font-semibold text-[#533625] whitespace-nowrap 
                transition-all duration-300
                ${scrolled ? "text-[20px]" : "text-[32px]"}`}
            >
              AGASTYA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 lg:gap-16">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                  link.onClick?.();
                }}
                className={`relative font-['Poppins'] font-semibold lg:text-[20px] md:text-[13px]
                  transition-all duration-300
                  ${
                    activeLink === link.id
                      ? "text-[#A06340]"
                      : "text-[#404040] hover:text-black"
                  }`}
              >
                {link.label}

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#A06340]
                    transition-all duration-300
                    ${
                      activeLink === link.id
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white rounded-xl p-4 shadow-lg border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveLink(link.id);
                    setOpen(false);
                    link.onClick?.();
                  }}
                  className={`text-left font-['Poppins'] text-[16px] font-medium
                    ${
                      activeLink === link.id
                        ? "text-[#A06340]"
                        : "text-black/70 hover:text-black"
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


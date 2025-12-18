"use client";

import React, { useState ,useEffect} from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onPortfolioClick,
  onContactClick,
}) => {
  const navLinks = [
    { label: "Home", onClick: onHomeClick },
    { label: "About Us", onClick: onAboutClick },
    { label: "Services", onClick: onServicesClick },
    { label: "Portfolio", onClick: onPortfolioClick },
    { label: "Contact Us", onClick: onContactClick },
  ];
   const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 🔥 adjust if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeLink, setActiveLink] = useState(navLinks[0]);
  const [open, setOpen] = useState(false);

  return (
    // <nav className="w-full bg-[#f5f5f0] border-b border-gray-200">
    //   <div className="max-w-7xl mx-auto px-3 py-2">
    //     <div className="flex items-center justify-between">

    //       {/* Logo + Title */}
    //       <div className="flex items-center gap-3">
    //         <div className="w-[70px] h-[60px] sm:w-[95px] sm:h-[83px]">
    //           <img
    //             src="../images/logo (1) 1.png"
    //             alt="Logo"
    //             className="w-full h-full object-contain"
    //           />
    //         </div>

    //         <span className="font-['Poppins'] text-[22px] sm:text-[32px] font-semibold leading-none text-[#533625]">
    //           AGASTYA
    //         </span>
    //       </div>

    //       {/* Desktop Menu */}
    //       <div className="hidden md:flex items-center sm:gap-16 gap-8">
    //         {navLinks.map((link) => (
    //           <button
    //             key={link}
    //             onClick={() => setActiveLink(link)}
    //             className={`font-['Poppins'] text-[18px] font-semibold transition-colors
    //               ${
    //                 activeLink === link
    //                   ? "text-[#404040]"
    //                   : "text-[#404040]/70 hover:text-[#404040]"
    //               }`}
    //           >
    //             {link}
    //           </button>
    //         ))}
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         onClick={() => setOpen(!open)}
    //         className="md:hidden text-[#404040]"
    //       >
    //         {open ? <X size={26} /> : <Menu size={26} />}
    //       </button>
    //     </div>

    //     {/* Mobile Dropdown */}
    //     {open && (
    //       <div className="md:hidden mt-3 flex flex-col gap-3 bg-white rounded-lg p-4 shadow">
    //         {navLinks.map((link) => (
    //           <button
    //             key={link}
    //             onClick={() => {
    //               setActiveLink(link);
    //               setOpen(false);
    //             }}
    //             className={`text-left font-['Poppins'] text-[16px] font-medium
    //               ${
    //                 activeLink === link
    //                   ? "text-[#404040]"
    //                   : "text-[#404040]/70"
    //               }`}
    //           >
    //             {link}
    //           </button>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </nav>
 <nav
  className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300
    ${scrolled ? "py-1" : "py-0"}
  `}
>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 sm:gap-3">
          <div
  className={`transition-all duration-300
    ${scrolled
      ? "w-10 h-9 sm:w-[55px] sm:h-[50px]"
      : "w-14 h-12 sm:w-[75px] sm:h-[65px] md:w-[90px] md:h-20"
    }
  `}
>
  <img
    src="/images/logo (1) 1.png"
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>

          <span
  className={`font-['Poppins'] font-semibold text-black whitespace-nowrap transition-all duration-300
    ${scrolled
      ? "text-[16px] sm:text-[20px]"
      : "text-[18px] sm:text-[24px] md:text-[30px]"
    }
  `}
>
  AGASTYA
</span>
          </div>

          {/* Desktop + Tablet Menu */}
          <div className="hidden md:flex items-center gap-10 lg:gap-16">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveLink(link.label);
                  link.onClick?.();
                }}
                className={`font-['Poppins'] text-[16px] lg:text-[18px] font-medium transition-colors
        ${
          activeLink === link.label
            ? "text-black"
            : "text-black/70 hover:text-[#404040]"
        }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black flex items-center justify-center"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown */}
        {open && (
          <div className="md:hidden mt-4 w-full bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setActiveLink(link.label);
                    setOpen(false);
                    link.onClick?.(); // 🔥 parent function
                  }}
                  className={`text-left font-['Poppins'] text-[16px] font-medium
            ${
              activeLink === link.label
                ? "text-black"
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

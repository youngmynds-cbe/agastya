// import React from 'react';
// import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="w-full bg-white border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30">
//           {/* Company Info */}
//           <div className="space-y-6">
//             {/* Logo */}
//             <div className="w-16 h-16 bg-linear-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
//               <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//             </div>

//             {/* Description */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//              Real estate is not just about buying and selling properties, it’s about building trust and creating a future. At Agastya, we handle everything from property search to registration, so you can enjoy a seamless experience
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-3">
//               <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                 <Facebook className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                 <Twitter className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                 <Linkedin className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                 <Instagram className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h3 className="text-gray-900 font-semibold text-lg mb-6">Useful Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
//                   Why choose US
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Reach Us */}
//           <div className="lg:col-span-2">
//             <h3 className="text-gray-900 font-semibold text-lg mb-6">Reach Us</h3>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-1" />
//                 <p className="text-gray-600 text-sm">
//                   Thalayad - Vayalada Road, kalluzhary, Calicut, Kerala 673574
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-gray-600 shrink-0" />
//                 <a href="mailto:info@lkrgardens.com" className="text-gray-600 hover:text-orange-600 text-sm">
//                   info@lkrgardens.com
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-gray-600 shrink-0" />
//                 <a href="tel:+914962085089" className="text-gray-600 hover:text-orange-600 text-sm">
//                   +91 496 2085089
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-600 text-sm">
//               © 2025 Agastya . Created by Young Minds
//             </p>
//             <div className="flex flex-wrap gap-6">
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
//                 Help
//               </a>
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
//                 Refund Policy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
//                 Terms & Conditions
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
   <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-[70px] h-[60px] sm:w-[95px] sm:h-[83px]">
              <img
                src="../images/logo (1) 1.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Real estate is not just about buying and selling properties, it's about building trust and creating a future. At Agastya, we handle everything from property search to registration, so you can enjoy a seamless experience
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Facebook className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Twitter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Instagram className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Why choose US
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Reach Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-1" />
                <p className="text-gray-600 text-sm">
                  Thalayad - Vayalada Road, kalluzhary, Calicut, Kerala 673574
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 shrink-0" />
                <a href="mailto:info@lkrgardens.com" className="text-gray-600 hover:text-orange-600 text-sm">
                  info@lkrgardens.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600 shrink-0" />
                <a href="tel:+914962085089" className="text-gray-600 hover:text-orange-600 text-sm">
                  +91 496 2085089
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
     <div className="border-t border-gray-200 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">

    <p className="font-['Noto_Sans'] font-light text-sm leading-[18.9px] tracking-normal text-gray-600 text-right align-middle">
      © 2025 Agastya . Created by Young Minds
    </p>

    <div className="flex flex-wrap gap-6">
      {["Help", "Refund Policy", "Privacy Policy", "Terms & Conditions"].map(
        (item) => (
          <a
            key={item}
            href="#"
            className="font-['Noto_Sans'] font-light text-sm leading-[18.9px] tracking-normal text-gray-600 hover:text-orange-600 align-middle"
          >
            {item}
          </a>
        )
      )}
    </div>

  </div>
</div>

      </div>
    </footer>
  );
}
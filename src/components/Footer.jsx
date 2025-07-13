import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css'; // Create this CSS file or use Tailwind classes directly

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">CleanFlow</h2>
          <p className="text-sm">Professional cleaning services at your convenience.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> info@cleanflow.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-1">
            <FaPhoneAlt /> +94 77 123 4567/  +94 77 123 4568
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
             <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600">
    <FaYoutube />
  </a>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;

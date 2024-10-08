import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Make the entire footer content stack vertically */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Contact Information */}
          <div className="flex flex-col items-center">
          <p className="flex items-center justify-center">
               Contact Us
            </p>
            <p className="flex items-center justify-center mb-2">
              <Mail size={18} className="mr-2" /> adityapsingh565@gmail.com
            </p>
            <p className="flex items-center justify-center">
              <Phone size={18} className="mr-2" /> +917304064579
            </p>
            <p className="flex items-center justify-center"><a href="https://github.com/AdiSinghCodes" className="hover:text-gray-300"><Github size={24} /></a> <span></span>
            <a href="https://www.linkedin.com/in/aditya-singh-2b319b299" className="hover:text-gray-300"><Linkedin size={24} /></a> <span></span>
              <a href="https://www.instagram.com/aelius.16?igsh=MTFmcXAwajVteTBnZg==" className="hover:text-gray-300"><Instagram size={24} /></a>
              </p>
          </div>
          <div className="flex flex-col items-center">
            <p>Stay updated with our latest recipes!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Food52. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

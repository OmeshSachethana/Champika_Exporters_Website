import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, UserPlus } from "lucide-react";
import logo from "../assets/champika logo.jpg";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Packages", path: "/packages" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#" },
    { icon: <Instagram size={20} />, url: "#" },
    { icon: <Twitter size={20} />, url: "#" },
    { icon: <Linkedin size={20} />, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Champika Logo" className="h-12 w-auto rounded-md" />
              <span className="text-xl font-semibold">Champika Exporters</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for seamless travel experiences and export services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="text-gray-400 mt-1" size={18} />
                <span className="text-gray-400">champikaexpor@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="text-gray-400 mt-1" size={18} />
                <span className="text-gray-400">+94 71 431 3671</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="text-gray-400 mt-1" size={18} />
                <span className="text-gray-400">No.107 1/1, Stanley Thilakarathna Mawatha, Nugegoda, Sri Lanka.</span>
              </li>
            </ul>
          </div>

          {/* Traveler Highlight Section - Now next to Contact Us */}
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
            <div className="flex items-center space-x-2 mb-3">
              <UserPlus className="text-blue-400" size={20} />
              <h3 className="text-lg font-semibold text-white">Traveler Registration</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Are you planning to travel with us? Register your details to get personalized offers and updates.
            </p>
            <Link
              to="/travelers-add"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition w-full text-center"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Champika Exporters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
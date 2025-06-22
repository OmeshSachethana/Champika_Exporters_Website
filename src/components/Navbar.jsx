import React, { useState } from "react";
import { Menu, X, UserPlus } from "lucide-react";
import logo from "../assets/champika logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Packages", path: "/packages" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact", path: "/contact" },
    { name: "Register", path: "/travelers-add", highlight: true }
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Champika Logo" className="h-16 w-auto rounded-md" />
          <span className="text-xl font-semibold text-gray-800 hidden sm:block">Champika Exporters</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.highlight ? (
              <Link
                key={item.name}
                to={item.path}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition flex items-center space-x-1"
              >
                <UserPlus size={18} />
                <span>{item.name}</span>
              </Link>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 font-medium hover:text-blue-600 transition relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 animate-slide-down">
          {navItems.map((item) => (
            item.highlight ? (
              <Link
                key={item.name}
                to={item.path}
                className="block bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus size={18} />
                <span>{item.name}</span>
              </Link>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close mobile menu after clicking a link
  const closeMenu = () => setIsOpen(false);

  // Active link styling
  const activeClass = ({ isActive }) =>
    isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition';

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo - link to home */}
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
            MySite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-600">
            <NavLink to="/" className={activeClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={activeClass}>
              About
            </NavLink>
            <NavLink to="/skills" className={activeClass}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={activeClass}>
              Projects
            </NavLink>
            <NavLink to="/work" className={activeClass}>
              Work
            </NavLink>
            <NavLink to="/education" className={activeClass}>
              Education
            </NavLink>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu}>
              Work
            </NavLink>
            <NavLink to="/education" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu}>
              Education
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 transition'}`} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
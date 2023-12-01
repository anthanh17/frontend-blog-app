import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
  FaXmark,
} from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // navItems
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/services', link: 'Services' },
    { path: '/about', link: 'About' },
    { path: '/contact', link: 'Contact' },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7x1 mx-auto flex justify-between items-center">
        {/* LOGO Design */}
        <a href="/" className="text-x1 font-bold text-white">
          Tech<span className="text-orange-500">Blog</span>
        </a>

        {/* Navigation */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-white">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaGithub />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaLinkedinIn />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaYoutube />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Login
          </button>
        </div>

        {/* Responsive - Mobile menu btn, display mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Responsive - Menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150'
              : 'hidden'
          }`}
        >
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-black">
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

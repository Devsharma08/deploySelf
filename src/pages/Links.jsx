import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative inline-block font-semibold tracking-wide text-lg transition-all duration-300 group"
    >
      <span
        className="bg-gradient-to-r from-white via-white/80 to-yellow-200
        bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500
        group-hover:bg-[position:100%_0] group-hover:scale-105"
      >
        {children}
      </span>
      <span
        className="block h-[2px] w-0 group-hover:w-full bg-yellow-400 transition-all duration-300 mt-1"
      ></span>
    </Link>
  );
};

export default NavLinks;

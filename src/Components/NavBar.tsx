import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-[#010922]">
      <header className="flex justify-between items-center px-10 py-3 text-[10px]">
        <div className="text-white text-lg font-semibold"></div>
        <nav className="hidden md:flex items-center space-x-6 ">
          <Link
            to="/"
            className="hover:text-white text-white/80 cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="/faqSection"
            className="hover:text-white text-white/80 cursor-pointer"
          >
            {" "}
            Resources
          </Link>
          <Link
            to="/tarification"
            className="hover:text-white text-white/80 cursor-pointer"
          >
            {" "}
            Library
          </Link>
          <Link
            to="/"
            className="hover:text-white text-white/80 cursor-pointer"
          >
            {" "}
            Library
          </Link>
          <Link
            to="/"
            className="hover:text-white text-white/80 cursor-pointer"
          >
            {" "}
            Pricing
          </Link>

          <button className="text-white/90 px-4 py-1 border border-white/30 rounded-md hover:bg-white hover:text-black transition">
            Log In
          </button>
          <button className="ml-2 px-4 py-1 bg-white text-black rounded-md hover:opacity-90 transition">
            Sign Up
          </button>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";

//Header -> display the navigation
const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 border-gray-200 px-6 py-4 text-white lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* logo start */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-8 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Socialy
            </span>
          </Link>
          {/* logo end */}
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Welcome, Abubakar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

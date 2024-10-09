import { Button } from "./Button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white border-b-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex justify-start">
            <a href="#">
              <img
                className="w-24 h-8"
                src="https://getswipe.in/static/img/brand_logo.svg"
                alt="Swipe Logo"
              />
            </a>
          </div>

          {/* Hamburger Menu Button for Small Screens */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Main Menu for Larger Screens */}
          <div className="hidden lg:flex items-center font-medium font-outfit gap-8">
            <a href="#" className="hover:text-blue-600">
              Why Swipe?
            </a>
            <a href="#" className="hover:text-blue-600">
              Templates
            </a>
            <a href="#" className="hover:text-blue-600">
              Tutorials
            </a>
            <a href="#" className="hover:text-blue-600">
              FAQs
            </a>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact Us
            </a>
          </div>

          {/* Buttons (Responsive) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a className="font-medium font-outfit p-3 hover:text-blue-600" href="#">
              Login
            </a>
            <Button title={"Sign Up"} />
            <Button title={"Download"} />
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6">
            <nav className="flex flex-col space-y-4 font-medium font-outfit">
              <a href="#" className="hover:text-blue-600">
                Why Swipe?
              </a>
              <a href="#" className="hover:text-blue-600">
                Templates
              </a>
              <a href="#" className="hover:text-blue-600">
                Tutorials
              </a>
              <a href="#" className="hover:text-blue-600">
                FAQs
              </a>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
              <a href="#" className="hover:text-blue-600">
                Login
              </a>
              <Button title={"Sign Up"} />
              <Button title={"Download"} />
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

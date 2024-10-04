import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href, index) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveMenuIndex(index);
      setIsMobileMenuOpen(false);

      setTimeout(() => {
        setActiveMenuIndex(null);
      }, 100); 
    }
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-40"> {/* z-index adjusted to avoid conflict */}

        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg border border-stone-50/30 bg-black py-2 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-123">
            <div>
              {/* logo */}
            </div>

            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index} className="relative">
                    <a
                      className={`relative text-sm text-white block py-2 px-4 rounded-lg 
                        ${
                          activeMenuIndex === index
                            ? "bg-gray-200"
                            : "hover:bg-gray-300 hover:text-black"
                        }`}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href, index)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="relative flex items-center justify-start">
            <div>
              {/* logo */}
            </div>
            <div className="absolute left-0 ml-4 flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-40">
              <div className="flex flex-col items-start justify-start h-full p-4">
                <button
                  className="absolute top-4 left-4 text-black"
                  onClick={toggleMobileMenu}
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <ul className="flex flex-col gap-4 w-full mt-10 pl-4 items-start">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <li key={index} className="relative w-full">
                      <a
                        href={item.href}
                        className={`block text-lg text-black text-left py-2 px-4 rounded-lg 
                          ${
                            activeMenuIndex === index
                              ? "bg-gray-200"
                              : "hover:bg-gray-300"
                          } w-full`}
                        onClick={(e) => handleLinkClick(e, item.href, index)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

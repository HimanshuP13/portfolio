import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" },
  ];
  // Nvbar open or close functionality for better experince
  const handleMenuItem = (sectionid) => {
    setActiveSection(sectionid);
    setIsOpen(false);

    const section = document.getElementById(sectionid);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[gray] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-white py-5 flex justify-between items-center">
          <span className="text-[#8245ec] animate-pulse">&lt;</span>
          <span className="text-white ">Himanshu</span>
          <span className="text-[#8245ec] animate-pulse">_</span>
          <span className="text-white ">Pandey</span>
          <span className="text-[#8245ec] animate-pulse">&gt;</span>
        </div>
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-green-600 ${
                activeSection === item.id ? "text-[Blue]" : ""
              }`}
            >
              <button onClick={() => handleMenuItem(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* socila media part */}
        <div className="hidden md:flex space-x-5">
          <a
            href="https://github.com/HimanshuP13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-300"
          >
            {" "}
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-pandey-8659b922a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-300"
          >
            {" "}
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.naukri.com/code360/profile/416c9bb8-dad7-42b3-9f8c-52eccb9b6e78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-300"
          >
            {" "}
            <FaCode size={24} />
          </a>
        </div>

       
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[white] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[white] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4 teaxt-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[Blue] ${
                    activeSection === item.id ? "text-[Blue]" : ""
                  }`}
                >
                  <button onClick={() => handleMenuItem(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}

              <div className="flex space-x-5">
                <a
                  href="https://github.com/HimanshuP13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray 300 hover:text-white"
                >
                  {" "}
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-pandey-8659b922a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray 300 hover:text-white"
                >
                  {" "}
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.naukri.com/mnjuser/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray 300 hover:text-white"
                >
                  {" "}
                  <FaCode size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

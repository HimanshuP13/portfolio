import React from 'react'
import { useState } from 'react';
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {

  const [activeSection, setActiveSection] = useState();
    // const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuItem = (sectionid) => {
      setActiveSection(sectionid);

      const section = document.getElementById(sectionid);
      if(section) {
        section.scrollIntoView({behavior : 'smooth'})
      }
    }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" },
  ]; 

  return (
    <footer className='bg-gray-900 mt-10 lg:mt-10'>
      <div 
       className='flex flex-col gap-6 justify-center items-center mt-4'>
        <div>
        <h3 className='text-green-400 text-2xl font-bold'>Himanshu Pandey

        </h3>
      </div>
      <div className='mb-2'>
        <ul  className='flex  flex-col lg:flex-row   items-center lg:items-start gap-4'>
          {menuItems.map((item,index) => (
          <li  key={index}  ><button  className={`text-white font-semibold  cursor-pointer hover:text-green-400 transition-colors duration-200 ${activeSection === item.id ?  "text-blue-900" : ""}`} onClick={() => handleMenuItem(item.id)}>
                {item.label}
              </button> </li>
          

        ))}
            
          </ul>
        


      </div>

      {/* Socila media Section */}
      <div className="flex space-x-5">
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
      </div>
      

    </footer>
  )
}

export default Footer
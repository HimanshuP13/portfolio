import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileimage from "../../assets/Profile.png";

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight">
            Hey there! I'm{" "}
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Himanshu Pandey
          </h3>

          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[green] leading-tight">
            <span className="text-white"> I am </span>
            <Typewriter
              words={[
                "FullStack Developer",
                "React Enthusiast",
                "Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle=">>"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h4>

          <p className="text-gray-300 text-md sm:text-lg mb-10 mt-8 leading-relaxed max-w-xl">
            I specialize in building modern, responsive websites and web
            applications. My projects includes a VideoPlayer, an E-commerce
            platform, a Newspaper website, and a Crypto Converter tool. I am
            also proficient in Java and enjoy solving challenging problems with
            efficient code.
          </p>
          <a
            href="https://drive.google.com/file/d/1fcTbujuMD7OmPLqVjvQjt7hiCxQfIPYs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="inline-block text-white bg-green-600 py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:bg-green-700 shadow-md hover:shadow-lg"
          >
            {" "}
            <span className="mr-2">📄</span> Resume
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileimage}
            alt="Himanshu Pandey"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
            style={{ objectPosition: "center -90px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;

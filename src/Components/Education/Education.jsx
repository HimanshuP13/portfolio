import React from 'react'
import { Educations } from '../../constants'

function Education() {
  return (
    <section id='education'  className="py-16 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900">
      <h2 className="text-4xl font-bold text-white text-center  ">🎓 Education</h2>
       <div className='w-52 md:w-44 lg:w-56 h-1 bg-green-500 mx-auto mt-4 px-10'></div>
      <p className="text-gray-400 text-center mt-2 mb-8 max-w-2xl mx-auto">
  My academic journey has laid a strong foundation in computer science, mathematics, and problem-solving. Through consistent learning and hands-on projects, I've developed both technical expertise and a disciplined approach to building real-world solutions.
</p>
  <div className="relative border-l-4 border-green-500 pl-4">
    {Educations.map((edu, index) => (
      <div key={index} className="mb-10 relative">
        <div className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md max-w-2xl mx-auto  backdrop-blur-md rounded-t-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-green-500/50 hover:translate-y-2 transition-transform duration-300">
          <div className=' flex  flex-col items-center md:flex-row md:gap-6  '>
            <img src= {edu.img} alt={edu.institution} className='w-16 h-20 object-cover ' />
            <h3 className="text-white text-xl font-semibold ">{edu.degree}</h3>
            

          </div>
          
          <p className="text-green-400">{edu.institution} | {edu.year}</p>
          <p className="text-gray-400 mt-2">{edu.description}</p>
          <p className="text-gray-400 mt-2 leading-tight">{edu.desc}</p>
        </div>
      </div>
    ))}
  </div>

    </section>
  )
}

export default Education
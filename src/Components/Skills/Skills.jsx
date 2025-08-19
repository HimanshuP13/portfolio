import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'

function Skills() {
  return (
    <section id='skills' 
    className='py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient '
    > 
    {/* section title */}
    <div className='text-center mb-8'>
      <h2 className="text-3xl  sm:text-4xl font-bold text-white">My Skills</h2>
      <div className='w-40 h-1 bg-green-500 mx-auto mt-4'></div>
      <p className='text-base mt-4 sm:text-xl text-gray-400 text-center ' >
     Let's take a quick tour of my skills and what I've built!
    </p>

    </div>
    <div className='flex flex-wrap gap-1 lg:gap-5'>
      {SkillsInfo.map((category) => (
        <div 
        key={category.title}
        className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white'

        >
          <h3 className='text-2xl text-center mb-6 sm:text-3xl text-white'>{category.title}</h3>
          {/* Each Category items */}

          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
              <div 
          className='grid grid-cols-2 sm:grid-cols-3  gap-x-6 gap-y-4 w-full'
          >
            {category.skills.map((skill) => (
              <div
              key={skill.name}
              className='inline-flex  items-center gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 min-w-[120px] max-w-[200px] justify-center '
              >
                <img src={skill.logo} alt={skill.name} className='h-6 w-6 sm:h-8 sm:w-8 shrink-0' />
                <span className='text-xs sm:text-sm text-gray-300  break-words '>{skill.name}</span>

              </div>

            ))}

          </div>

          </Tilt>


          

        </div>
      ))}
    </div>
    
    

    </section>
  )
}

export default Skills
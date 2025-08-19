import React, { useState } from 'react'
import { projects } from '../../constants'

function Work() {
  const[selectedProject,setSelectedProject] = useState(null)

  const handleModal = (project) => {
    setSelectedProject(project) 
  }
  const handleClosedModal = () =>  {
    setSelectedProject(null);
  }
  return (
    <section id='work' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>Project</h2>
        <div className='w-32 h-1 bg-green-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg'>A glimpse into my skills through real-world projects. </p>
      </div>

      {/* Now My projects */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2'>
        {projects.map((project) => (
          <div
          key={project.id}
          onClick={() => handleModal(project)}
          id={project.id}
          className='flex  flex-col border border-white bg-gray-900 backdrop-blur-md rounded-t-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-green-500/50 hover:translate-y-2 transition-transform duration-300'

          >
            <div className='p-4'>
              <img src={project.img} alt=""  className='h-40 w-full object-cover  rounded-t-2xl'/>


            </div>
            <div className='p-5'>
              <h4 className='text-white font-bold mb-2 text-center text-2xl '> {project.title}</h4>
              <p className='text-gray-500 mb-4 pt-6  line-clamp-3'>
                {project.description}
              </p>
            </div>
            <div className='px-5 mb-4'>
              {project.tags.map((item,index) => (
                <span
                key={index}
                className='inline-block bg-[#251f38] text-xs font-semibold text-green-400 rounded-full px-3 py-1 mr-2 mb-1 '
                >{item}</span>
              ))}
            </div>
            <div className='flex justify-center mb-4 '>
              <button className='px-4 py-2  bg-green-400 text-white border  rounded-3xl text-center hover:bg-green-500 transition duration-200 bg-transparent'><a href={project.github} target="_blank"
                  rel="noopener noreferrer"></a>Source Code</button>
            </div>
            



          </div>

        ))}
      </div>


      {/* Making modal */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-3xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative '>
            <div className='flex justify-end p-4'>
              <button 
              onClick={handleClosedModal}
              className='text-white text-3xl font-bold hover:text-Green-400'
              >&times;</button>
            </div>
            <div className='flex flex-col'>
              <div className=' w-full flex justify-center bg-gray-900 px-4'>
                <img src={selectedProject.img} alt={selectedProject.title}  className='lg:w-full w-[95%] object-contaon rounded-xl shadow-2xl'/>
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='text-2xl   font-bold text-green-200 text-center'>
                  {selectedProject.title}
                </h3>
                <p className='text-gray-400 mt-4'>{selectedProject.description}</p>
                <div className='flex flex-wrap gap-2 mb-3'>
                  {selectedProject.tags.map((tag,index) => (
                    <span
                key={index}
                className=' bg-[#251f38] text-xs font-semibold text-green-400 rounded-full px-2 py-1 mt-4 '
                >{tag}</span>


                  ))}
                </div>
                <div className='flex  justify-center'> 
                  <a href={selectedProject.github} target="_blank"
                  rel="noopener noreferrer" className='px-6  py-2  bg-green-400 text-white border  rounded-3xl text-center hover:bg-green-500 transition duration-200 bg-transparent'>Source Code</a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
       </section>

  )
}

export default Work
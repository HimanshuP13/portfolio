import React, { useRef, useState } from 'react'
import { MdContactMail } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import  emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef();
  const [isSent,setIsSent] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_gpkl6lb", 
      "template_qujdc5i",
      form.current,
      "3ceIBuVBn0nGoR_cO"
    ).then (
      () => {
        setIsSent(true);
        form.current.reset();
        toast.success("Thanks for contacting us. We received your message",{
          position : "top-right",
          autoClose :3000,
          hideProgressBar : true,
          closeOnClick : true,
          pauseOnHover : true,
          draggable : true,
          theme: 'dark',
        })
      }, (error) => {
  
      toast.error(`Error sending: ${error.text || error.message}`, {
        position : "top-right",
          autoClose :3000,
          hideProgressBar : true,
          closeOnClick : true,
          pauseOnHover : true,
          draggable : true,
          theme: 'dark',

      })
      }
    )
    
  }


  return (
    <section id='contact' className=' mt-5 lg:mt-10'>
      <ToastContainer/>
      <div className='flex justify-center'>
        <div className=' flex flex-col  w-full max-w-lg border border-white bg-gray-900 m-8 p-10 '>
          <div className='flex  items-center gap-4  justify-center mb-6'>
            <MdContactMail  className='text-green-800 w-12 h-12 '/>
            <h2 className='text-white font-bold text-3xl leading-tight mt-1 '>  Connect With Me</h2>
          </div>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div >  
            <input type="email" placeholder="Your Email" name='from_mail' required className=' w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'  />
          </div>
          <div>
            <input type="text"  placeholder="Your Name"  name="from_name"  required className=' w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'  />
          </div>
          <div>
            <input type="text" placeholder="Subject"  name="subject" required className=' w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'  />
            
          </div>
          <div>
          <textarea
          placeholder="Your Message"
          name="message"
          className=" w-full mb-4 p-3 rounded bg-gray-800 text-white border border-gray-600 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>

          </div>
          

        <button className=' w-full  h-10 border border-gray-100 text-white bg-green-900'>Submit</button>
            
          </form>
          
          
        </div>

      </div>

    </section>
    
  )
}

export default Contact
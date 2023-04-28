import React, {useRef, useState} from "react";
import MapLocation from "../components/MapLocation";
import CallIcon from '@mui/icons-material/Call';
import emailjs from "@emailjs/browser";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {PublicDataState} from "../context/DataProvider";

const Contact = () => {
  const form = useRef();
    const [text, setText] = useState("send")
    const {publicData, setPublicData} = PublicDataState();

    console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID)
    const sendEmail = (e) => {
      e.preventDefault();
      // setText("Message has been sent");
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            // setText("Send another message");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
    };

  return (
    <div   className='updateDiv  mx-auto py-12'>
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-evenly items-center py-12 px-5">
        <section className='bg-white'>
          <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <div className="mb-12">
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800'>
              Contact Us
            </h2>
            <p className='mb-8  lg:mb-16 font-light text-center text-gray-500 sm:text-lg '>
             Got a query? or not able to figure out something, Let us know or just send us a feedback.
            </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='space-y-8'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your email
                </label>
                <input
                   name='user_email'
                  type='email'
                  id='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a4acf4] focus:border-[#a4acf4] block w-full p-2.5'
                  placeholder='sayHello@gmail.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Subject
                </label>
                <input
                  name='subject'
                  type='text'
                  id='subject'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#a4acf4] focus:border-[#a4acf4]'
                  placeholder='Let us know how we can help you'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your message
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#a4acf4] focus:border-[#a4acf4]'
                  placeholder='Leave a comment...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                value='send'
                className='py-3 px-5 text-sm font-medium text-center bg-[#a4acf4] hover:bg-[#747cf4] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 '
              >
                {text}
              </button>
            </form>
          </div>
        </section>

        <section className=" w-full md:w-96 text-center   sm:text-lg flex flex-col justify-evenly  gap-2 md:gap-12 sm:flex-row md:flex-col ">
            <div className=" h-40  sm:w-96 p-5 text-gray-600 bg-gray-50 border border-1 border-[#ccc] rounded-lg">
             <CallIcon style={{fontSize: "3rem"}}   />
             <h1 className="pt-5">{publicData?.contactDetails?.phone1}</h1>
             <h1>{publicData?.contactDetails?.phone2}</h1>
            </div>
            <div className="  text-center h-40 sm:w-96 p-5 text-gray-600 bg-gray-50  border border-1 border-[#ccc] rounded-lg" >
             <LocationOnIcon  style={{fontSize: "3rem"}}  />
             <h1 className="pt-5">{publicData?.contactDetails?.address}</h1>
            </div>
            <div className="  text-center h-40 sm:w-96 p-5 text-gray-600 bg-gray-50  border border-1 border-[#ccc] rounded-lg">
             <MailOutlineIcon  style={{fontSize: "3rem"}}  />
             <h1 className="pt-5">{publicData?.contactDetails?.email}</h1>
            </div>
           
        </section>
      </div>




      <div className=' '>
        <MapLocation 
        location='https://www.google.com/search?q=26.590207%2C+78.763816&oq=26.590207%2C+78.763816&aqs=chrome..69i57.520j0j1&sourceid=chrome&ie=UTF-8'
         />
      </div>
    </div>
  );
};

export default Contact;

import React, {useRef, useState} from "react";
import Loader from "../components/Loader";
import emailjs from "@emailjs/browser";
import PlayToast from "../components/Toast";

const Career = () => {
  const form2 = useRef();
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_CAREER_TEMPLATE_ID,
        form2.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setLoading(false);
          PlayToast('Sent', "success");
          e.target.reset();
        },
        (error) => {
          PlayToast('Sent', "success");
          // console.log(error.text);
        },
      );
  };
  return (
    <div className='updateDiv mx-auto py-12'>
      <section className='bg-white'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <div className='mb-12'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800'>
              Want to work with us?
            </h2>
            <h1 className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-lg '>
              Get a better start with us. Contact us we will surely consider
              your Interest.
            </h1>
          </div>
          <form ref={form2} onSubmit={sendEmail} className='space-y-8'>
            <div>
              <label
                htmlFor='careerName'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your Name
              </label>
              <input
                name='user_name'
                type='text'
                id='careerName'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a4acf4] focus:border-[#a4acf4] block w-full p-2.5'
                placeholder='John Doe'
                required
              />
            </div>
            <div>
              <label
                htmlFor='careerEmail'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                name='user_email'
                type='email'
                id='careerEmail'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a4acf4] focus:border-[#a4acf4] block w-full p-2.5'
                placeholder='sayHello@gmail.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='careerTel'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your phone number
              </label>
              <input
                name='phone'
                type='tel'
                id='careerTel'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#a4acf4] focus:border-[#a4acf4] block w-full p-2.5'
                placeholder='***********'
                required
              />
            </div>
            <div>
              <label
                htmlFor='CareerAddress'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                address
              </label>
              <input
                name='address'
                type='text'
                id='CareerAddress'
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#a4acf4] focus:border-[#a4acf4]'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='CareerMessage'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your message
              </label>
              <textarea
                name='message'
                id='CareerMessage'
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#a4acf4] focus:border-[#a4acf4]'
                placeholder='Leave a comment...'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='py-3 h-5 px-5 text-sm font-medium text-center bg-[#747cf4] hover:bg-[#6c64f8] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-[#574eff] '
            >
             {loading? <Loader /> : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Career;

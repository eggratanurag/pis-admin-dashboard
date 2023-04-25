import React from "react";

const Career = () => {
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
          <form action='#' className='space-y-8'>
            <div>
              <label
                htmlFor='careerName'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your Name
              </label>
              <input
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
                id='CareerMessage'
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#a4acf4] focus:border-[#a4acf4]'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='py-3 px-5 text-sm font-medium text-center bg-[#a4acf4] hover:bg-[#747cf4] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-[#6c64f8] '
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Career;

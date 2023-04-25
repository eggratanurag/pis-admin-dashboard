import React from "react";
import { PublicDataState } from "../context/DataProvider";
import CarouselProvider from "../components/Carousel";
import GalleryGrid from "../components/GalleryGrid";
import Loader from "../components/Loader";
import Img9 from "../assets/images/img9.jpg";
import Img11 from "../assets/images/img11.jpg";

import "./Home.css";

const Home = () => {
  const { publicData, setPublicData } = PublicDataState();

  return (
    <div className='text-gray-800 '>
      <div className='ldImageDiv '>
        <CarouselProvider />
      </div>

      <div
        className='mx-auto pb-32 text-center  '
        style={{ width: " min(1200px, 95%)" }}
      >
        <div className='py-32 sm:py-60 relative '>
          <div className='absolute left-2 md:left-48  w-96 h-72 bg-[#e2e5ff] rounded-full opacity-70 mix-blend-multiply filter blur-xl '></div>
          <div className='absolute right-12 md:right-48  w-96 h-72 bg-[#fff8d3] rounded-full opacity-70 mix-blend-multiply filter blur-xl '></div>
          <div className='absolute left-2 md:left-96 top-40 w-96 h-72 bg-[#f9e8ff] rounded-full opacity-70 mix-blend-multiply filter blur-xl'></div>
          <h1 className='text-4xl sm:text-7xl font-bold mb-16 leading-10  sm:leading-tight '>
            Welcome to <br />
            Prestiga International School
          </h1>
          Our school is a vibrant and dynamic learning community that is
          dedicated to providing high-quality education to students from diverse
          backgrounds and with varied interests and talents. We are committed to
          excellence in all aspects of education, including academic
          achievement, character development, and community involvement. Our
          faculty and staff members are highly qualified and experienced
          educators who are passionate about teaching and learning. They work
          closely with students to provide individualized support and guidance,
          and they utilize innovative and engaging teaching methods that inspire
          curiosity, creativity, and critical thinking. Our students are active
          and engaged learners who come from diverse backgrounds and bring a
          wealth of experiences and perspectives to our community. They are
          encouraged to pursue their interests and passions, and they are
          supported in their academic, social, and emotional growth by our
          dedicated staff and faculty. Our school is not just a place of
          learning but also a community that values diversity, inclusion, and
          respect. We believe that education is not just about acquiring
          knowledge and skills but also about developing values such as empathy,
          integrity, and responsibility. We offer a wide range of academic and
          extracurricular programs that cater to the diverse interests and
          talents of our students, including sports, arts, music, and community
          service. Our facilities are modern and well-equipped, including
          state-of-the-art classrooms, science labs, libraries, and sports
          facilities. In summary, our school is a place of excellence,
          innovation, and community. We are proud of our heritage and excited
          about our future, and we look forward to welcoming you to our
          community.
        </div>

        <div className='flex flex-col items-center gap-5 justify-center rounded-full sm:px-0 sm:mb-32 mb-12 py-16  w-auto md:flex-row bg-gradient-to-b sm:bg-gradient-to-r from-[#fdf9ff] to-[#ffffff]'>
          <div className=' w-11/12 sm:w-6/12  '>
            {
              <img
                className='rounded-full mx-auto  object-contain w-9/12'
                loading='lazy'
                src={Img11}
                alt=''
              />
            }
          </div>
          <div className='text-center md:text-left  w-11/12 md:w-6/12'>
            <h1 className='text-4xl sm:text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c69dd5] to-[#a4acf4] '>
              what students feel?
            </h1>
            <p>
              {" "}
              "We are so happy to be going to school! Our teachers are great and
              they make learning so much fun. We love doing experiments in
              science class and making art in art class. We are always excited
              to read new books in English class and to learn about new cultures
              in social studies. We have made so many friends in our classes and
              we love playing with them during recess. We also enjoy
              participating in after-school activities like soccer and robotics
              club. Our school has such a positive and friendly environment, and
              we feel like we are part of a big family. We can't wait to see
              what else we will learn and discover this year!"
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse items-center gap-5 justify-center rounded-full  mb-32 py-16  w-auto md:flex-row bg-gradient-to-b sm:bg-gradient-to-l from-[#fdf9ff] to-[#ffffff]'>
          <div className='text-center md:text-right  w-11/12 md:w-6/12'>
            <h1 className='text-4xl sm:text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c69dd5] to-[#a4acf4] '>
              what kids say?
            </h1>
            <p>
              {" "}
              "We love going to school! It's always so much fun to see our
              friends and learn new things. Our teachers are amazing and they
              make learning exciting with interactive activities and games. We
              enjoy working on projects together and sharing our ideas with each
              other. We also love recess and getting to run around and play
              outside. It's so cool to have access to a variety of
              extracurricular activities like sports, music, and art, which let
              us explore our interests and talents. We are grateful for the
              opportunity to be in such a supportive and encouraging environment
              that allows us to learn, grow, and have fun together. School is
              the best!"
            </p>
          </div>

          <div className=' w-11/12 sm:w-6/12  '>
            <img
              className='rounded-full mx-auto  object-contain w-9/12'
              loading='lazy'
              src={Img9}
              alt=''
            />
          </div>
        </div>

        <GalleryGrid />
      </div>
    </div>
  );
};

export default Home;

// radial-gradient(#eef0ff, #f9fafa);

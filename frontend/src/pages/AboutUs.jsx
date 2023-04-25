import React from "react";
import { PublicDataState } from "../context/DataProvider";

const AboutUs = () => {
  const { publicData, setPublicData } = PublicDataState();
  const principal = publicData?.staffInfo?.filter(
    (item) => item.role === "principal",
  )[0];
  const director = publicData?.staffInfo?.filter(
    (item) => item.role === "director",
  )[0];
  return (
    <div className=''>
      <div style={{ width: " min(1200px, 95%)" }} className='mx-auto pt-12'>
        <div
          className=' text-center updateDiv mx-auto py-32 rounded-xl text-gray-700 '
          id='aboutUs'
        >
          <h1 className='text-4xl font-bold  pb-5'>About Us</h1>

          <p>
            Welcome to The Prestige International School, a leading institution
            dedicated to providing high-quality education to students from
            diverse backgrounds. Our mission is to create a nurturing and
            inclusive learning environment that fosters intellectual curiosity,
            personal growth, and a passion for learning.
            <br /> <br />
            Our highly qualified and experienced faculty are committed to
            providing a challenging and engaging curriculum that prepares our
            students for success in the 21st century. Our students have access
            to state-of-the-art facilities, including modern classrooms,
            fully-equipped laboratories, a well-stocked library, and sports
            facilities.
            <br />
            At The Prestige International School, we believe in the importance
            of developing well-rounded individuals who are not only academically
            proficient but also socially responsible. We encourage our students
            to participate in community service and extracurricular activities
            to develop their leadership skills and foster a sense of social
            responsibility.
           
            We believe that education is a partnership between the school,
            students, parents, and the wider community. We work closely with
            parents to ensure that their children receive the best possible
            education and support. We also maintain strong ties with local
            organizations to create opportunities for our students to engage
            with the wider community.
            <br /> <br />
            Thank you for considering The Prestige International School for your child's education.
            We look forward to welcoming you to our community and helping your
            child achieve their full potential.
          </p>
        </div>
        <div
          className='h-auto md:h-screen   text-center items-center'
          id='principal-message'
        >
          <h1 className='py-2 text-4xl sm:text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c69dd5] to-[#a4acf4] '>
            Principal's Message
          </h1>
          <div className='flex flex-col items-center gap-5   justify-center rounded-full sm:px-0 py-16  w-auto md:flex-row bg-gradient-to-b sm:bg-gradient-to-r from-[#fdf9ff] to-[#ffffff]'>
            <div className=' w-11/12 sm:w-6/12  '>
              {
                <img
                  className='rounded-full mx-auto  aspect-square object-cover w-9/12'
                  loading='lazy'
                  src={principal?.image}
                  alt=''
                />
              }
            </div>
            <div className='text-center my-auto md:text-left text-gray-700  w-11/12 md:w-6/12'>
              <p>
                {" "}
                Dear Students, Parents, and Staff Members, <br />I am honored to
                lead this amazing community of learners, educators, and parents
                for another academic year. Our school is committed to
                maintaining the highest standards of academic rigor, character
                development, and community involvement. We aim to inspire and
                empower our students to become lifelong learners, critical
                thinkers, and compassionate leaders. Our dedicated faculty and
                staff members work tirelessly to create a dynamic and engaging
                learning environment, and we are thankful for the unwavering
                support of our parents and guardians. Together, let us embrace
                the challenges and opportunities ahead with enthusiasm and
                optimism, and make this year a memorable and successful one.
              </p>

              <h1 className='mt-5 font-semibold sm:mt-12 text-left'>
                Best regards, <br />
                {principal?.name}
                <br />
                Principal, The Prestige International School Bhind.
              </h1>
            </div>
          </div>
        </div>
        <div
          className='h-auto md:h-screen  text-center items-center'
          id='chairman-message'
        >
          <h1 className='py-2 text-4xl sm:text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c69dd5] to-[#a4acf4] '>
            Directors's Message
          </h1>
          <div className='flex flex-col items-center gap-5   justify-center rounded-full sm:px-0 py-16  w-auto md:flex-row bg-gradient-to-b sm:bg-gradient-to-r from-[#fdf9ff] to-[#ffffff]'>
            <div className=' w-11/12 sm:w-6/12  '>
              {
                <img
                  className='rounded-full mx-auto  aspect-square object-cover w-9/12'
                  loading='lazy'
                  src={director?.image}
                  alt=''
                />
              }
            </div>
            <div className='text-center my-auto md:text-left text-gray-700  w-11/12 md:w-6/12'>
              <p>
                {" "}
                Dear Students, Parents, and Staff Members, <br />I am honored to
                lead this amazing community of learners, educators, and parents
                for another academic year. Our school is committed to
                maintaining the highest standards of academic rigor, character
                development, and community involvement. We aim to inspire and
                empower our students to become lifelong learners, critical
                thinkers, and compassionate leaders. Our dedicated faculty and
                staff members work tirelessly to create a dynamic and engaging
                learning environment, and we are thankful for the unwavering
                support of our parents and guardians. Together, let us embrace
                the challenges and opportunities ahead with enthusiasm and
                optimism, and make this year a memorable and successful one.
              </p>

              <h1 className='mt-5 sm:mt-12 font-semibold text-left'>
                Best regards, <br />
                {director?.name}
                <br />
                Director, The Prestige International School Bhind.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

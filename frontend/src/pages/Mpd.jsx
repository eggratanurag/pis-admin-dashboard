import React from "react";
import Img25 from "../assets/images/img25.jpg";
import Img24 from "../assets/images/img24.jpg";
import ShowCase from "../components/ShowCase";
import {PublicDataState} from "../context/DataProvider";

const Mpd = () => {
  const {publicData, setPublicData} = PublicDataState();
  const principal = publicData?.staffInfo?.filter(
    (item) => item.role === "principal",
  )[0];
  const mpdData = [
    {
      title: "Name of the school",
      desc: " The Prestige International school bhind  ",
    },
    {
      title: "AFFILIATION NO.(IF APPLICABLE)",
      desc: " ",
    },
    {
      title: "SCHOOL CODE (IF APPLICABLE)",
      desc: "",
    },
    {
      title: "COMPLETE ADDRESS WITH PIN CODE",
      desc: "Near Railway Crossing Sangam palace garden Mudiya Khera Chourah Ater Road , Bhind, India, Madhya Pradesh",
    },
    {
      title: "PRINCIPAL NAME & QUALIFICATION",
      desc: principal?.name + ", " + principal?.qualification,
    },
    {
      title: "SCHOOL EMAIL ID",
      desc: publicData?.contactDetails?.email,
    },
    {
      title: "CONTACT DETAILS (LANDLINE/MOBILE)",
      desc: publicData?.contactDetails?.phone1 + ", " + publicData?.contactDetails?.phone2,
    },
  ];
  return (
    <div className='mainDiv'>
      <div className=' py-12 updateDiv mx-auto  text-gray-300  text-center' id="mpd">
        <h1 className='text-4xl font-bold text-gray-800 pb-5'>
          Mandatory Public Disclosure
        </h1>
        <div className=' relative overflow-x-auto shadow-md sm:rounded-lg' >
          <table className='w-full  text-sm text-left text-gray-700'>
            <thead className='text-xs border-b  text-gray-700 uppercase bg-white'>
              <tr>
                <th scope='col' className='px-6 py-5'>
                  Information
                </th>
                <th scope='col' className='px-6 py-5'>
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {mpdData.map((item, index) => (
                <tr key={index} className='bg-white border-b'>
                  <th scope='row' className='px-6 py-4  w-1/2 font-medium '>
                    {item.title}
                  </th>
                  <td className='px-6 py-4'>{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className='text-center p-2 sm:p-12 text-gray-700 bg-white updateDiv mx-auto py-32 rounded-xl '
        id='medium'
      >
        <h1 className='text-4xl font-bold text-gray-800 pb-5'>
          Medium of Education and Curriculum
        </h1>

        <p>
          Our school follows an English medium curriculum that is based on the
          CBSE (Central Board of Secondary Education) curriculum. This means
          that our students are taught in English and follow a curriculum that
          is aligned with the national standards set by the CBSE.
          <br />
          The CBSE curriculum is designed to provide a well-rounded education
          that emphasizes both academic excellence and holistic development. Our
          students learn a wide range of subjects, including English,
          mathematics, science, social studies, and languages. They also have
          access to a variety of extracurricular activities that help them
          develop their talents and interests. We believe that the English
          medium CBSE curriculum provides our students with a strong foundation
          that prepares them for higher education and the challenges of the real
          world. Our experienced faculty members are trained to deliver the
          curriculum effectively and provide individual attention to students
          who need it.
          <br />
          At our school, we strive to create a supportive and engaging learning
          environment that encourages our students to become lifelong learners.
          We believe that by following the English medium CBSE curriculum, we
          can help our students achieve their full potential and prepare them
          for a bright future.
        </p>
      </div>
      <div className=' ' id='transport'>
        <ShowCase
          img1={Img25}
          img2={Img24}
          title='Our Transport System'
          description='Our school transportation service provides safe and reliable transportation for our students to and from school. Our fleet of buses is equipped with modern safety features and our drivers are trained and experienced in ensuring the safety of our students.

             We offer pick-up and drop-off services from various locations within our designated transportation zone. Our routes are carefully planned to ensure that students arrive at school on time and are picked up promptly after school.
             
             We also offer transportation services for field trips and other school-related events. Our buses are regularly maintained to ensure that they are in good working condition and meet all safety regulations.
             
             We understand the importance of reliable transportation for our students and we strive to provide the best possible service to our school community.'
        />
      </div>
    </div>
  );
};

export default Mpd;

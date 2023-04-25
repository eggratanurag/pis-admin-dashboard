import React from "react";
import Img26 from "../assets/images/img26.jpg";
import Img27 from "../assets/images/img27.jpg";
import ShowCase from "../components/ShowCase";

const Academics = () => {
  return (
    <div className='mainDiv py-12'>
      <div className='updateDiv mx-auto'>
        <div className=''>
          <ShowCase
            img1={Img26}
            img2={Img27}
            title='Extra Curicular Activities'
            description="Extra-curricular activities play an integral role in the overall development of students in a school. Our school offers a variety of extra-curricular activities that cater to the diverse interests of our students.

            We encourage our students to participate in sports activities such as football, basketball, cricket, badminton, and athletics. Our school also offers music and dance classes where students can learn and hone their skills in various forms of music and dance. Additionally, we have clubs such as the science club, the photography club, and the debating club, which provide students with opportunities to explore their interests and develop their skills.
            
            We organize regular inter-school competitions and events to provide our students with opportunities to showcase their talents and compete with students from other schools. Our school believes in promoting a healthy and balanced lifestyle for our students, and thus, we encourage them to participate in these extra-curricular activities alongside their academic pursuits.
            
            Overall, our school's extra-curricular activities program aims to develop well-rounded students who can not only excel academically but also in various areas of life."
          />
        </div>

        <div
          className='p-2 sm:p-12 bg-white updateDiv mx-auto py-32 rounded-xl '
          id='school-uniform'
        >
              <h1 className='text-4xl text-center font-bold text-gray-800 pb-5'>
              School Uniform for Boys and Girls
              </h1>
              <h1 className="mb-5"> Our school uniform is mandatory for all students and serves as a symbol of our school's identity and pride. The uniform consists of the following:</h1>
             
          <table>
           
            <tbody>
           
           
              <tr>
                <td>
                  {" "}
                 1. Boys: Oxford Green pants, white shirt, and a striped tie. In the summer, no shorts are allowed only pants. There is a different Uniform for saturday and wednesday.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  2. Girls: Oxford Green skirt or pants, white shirt, and a striped tie. In the summer. There is a different Uniform for saturday and wednesday.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  3. Shoes: Students are required to wear black leather shoes with the uniform. Sandals, flip flops, and sneakers are not allowed..{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  4. Accessories: Students may wear a simple watch and stud earrings. No other jewelry or visible tattoos are permitted.{" "}
                </td>
              </tr>
             
              

              
            </tbody>
          </table>
              <h1 className="mt-5">The uniform should be clean, well-fitted, and worn properly. Students who are found not wearing the proper uniform may be subject to disciplinary action. We believe that wearing a uniform fosters a sense of community, discipline, and pride among our students.</h1>
        </div>

        <div
          className='p-2 sm:p-12 mt-12 bg-white updateDiv mx-auto py-32 rounded-xl '
          id='rules'
        >
          

          <table>
            <thead>
              <tr>
                <td className='text-4xl text-center font-bold text-gray-800 pb-5'>
                Rules and Regulations
                </td>
              </tr>
              
             
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  1. Attendance: Regular attendance is mandatory for all
                  students. Absences must be reported by the parent or guardian
                  and a medical certificate may be required in case of illness.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  2. Punctuality: Students are expected to arrive at school on
                  time and attend all classes punctually.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  3. Uniform: Students must wear the school uniform on all
                  school days. The uniform must be clean and well-maintained.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  4. Behavior: Students must behave respectfully towards
                  teachers, staff, and fellow students. Bullying, harassment,
                  and discrimination are strictly prohibited.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  5. Discipline: Students are expected to follow the school's
                  code of conduct and disciplinary procedures. Any violation of
                  rules will be dealt with accordingly.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  6. Academic integrity: Cheating and plagiarism are strictly
                  prohibited. Students must submit their own work and respect
                  the intellectual property rights of others.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  7. Personal belongings: Students must keep their personal
                  belongings safe and secure. The school is not responsible for
                  lost or stolen items.{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  8. Cell phones and electronic devices: The use of cell phones
                  and other electronic devices is prohibited during class hours.{" "}
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Academics;

import React from "react";
import ShowCase from "../components/ShowCase";
import Img15 from "../assets/images/img15.jpg";
import Img13 from "../assets/images/img13.jpg";
import Img10 from "../assets/images/img10.jpg";
import Img17 from "../assets/images/img17.jpg";
import Img12 from "../assets/images/img12.jpg";
import Img23 from "../assets/images/img23.jpg";
import Img7 from "../assets/images/img7.jpg";
import Img4 from "../assets/images/img4.jpg";

const Infrastructure = () => {
  return (
    //class mainDiv is also used in updatepage to give the radial backround
    <div className=' mainDiv mx-auto w-full text-gray-700'>
      <ShowCase
        img1={Img15}
        img2={Img17}
        title='Our Classrooms'
        description="There are 15 classrooms in the campus each measuring around 30 * 15 feet. Each classroom has CCTV camera system to monitor the activities of the students and of teachers as well. The school classroom is a cozy and welcoming space where students come to learn and grow. The room is furnished with individual desks for each student, a large teacher's desk, and a whiteboard at the front of the room. The walls are decorated with posters and student work, providing a colorful and inspiring atmosphere. During class, the teacher leads discussions and activities to help the students understand and apply the material. The classroom is a safe and supportive environment, where students can ask questions, share ideas, and feel encouraged to do their best."
      />
      <ShowCase
        img1={Img13}
        img2={Img10}
        title='Playground'
        description="The school playground is a fun and lively place where children can play and socialize with their peers. The playground is equipped with various play structures such as swings, slides, monkey bars, and climbing frames. There is also an open space for games like soccer, basketball, and tag. The playground is surrounded by a fence for safety, and teachers and staff members keep a watchful eye on the children as they play. Overall, it's a great place for kids to have fun and burn off some energy during the school day."
      />
      <ShowCase
        img1={Img12}
        img2={Img23}
        title='E-Library and Smart Classes'
        description='The smart class and e-library are high-tech resources that offer students a unique and innovative learning experience. Equipped with the latest technology, including interactive whiteboards and digital projectors, the smart class provides a dynamic and engaging environment where students can interact with the material in real-time. The e-library offers a vast collection of digital resources, including e-books, articles that can be accessed. Together, these resources provide students with a wealth of information and opportunities to enhance their learning and understanding of the world around them.'
      />
      <ShowCase
        img1={Img7}
        img2={Img4}
        title='Pool and Park'
        description="As you step into the school park, you're greeted with a beautiful and well-maintained outdoor space. The park is surrounded by greenery, with trees and bushes providing shade and a sense of tranquility. The paved pathways wind through the park, leading to various areas for recreation and relaxation.

        At one end of the park, you see the school pool, which is surrounded by a fence. Children are splashing and playing in the shallow area, while others are practicing their swimming skills in the deeper section. Lifeguards are stationed around the pool, ensuring that everyone is safe and having fun.
        
        Nearby, there is a playground area with swings, slides, and other play structures. Children are laughing and playing, enjoying the fresh air and sunshine.
        
        Overall, the school park and pool provide a wonderful opportunity for students to enjoy the outdoors and get some exercise. Whether they're swimming, playing, or just relaxing, the park and pool offer a safe and welcoming space for students to unwind and have fun."
      />
    </div>
  );
};

export default Infrastructure;

import React from "react";
import Loader from "./Loader";
import EditDialogue from "./EditStaffDialogue";
import AlertOverlay from "./AlertOverlay";


const Card = ({ props, type, handleDelete }) => {
  const {id, name, qualification, subject, image, role } = props;



  return (
    <div className='items-start flex mt-2 p-5 xs:p-0  bg-gray-50 rounded-lg shadow sm:flex overflow-hidden'>
     
     <div className=" xs:flex  ">
      <div className=' w-12 h-12 xs:w-40 flex xs:h-40  '>
      
          <img
            className='w-full h-full object-cover rounded-lg sm:rounded-none sm:rounded-l-lg'
            src={image}
            loading="lazy"
            alt='teacher'
          />
      
      </div>

      <div className='p-0 xs:p-5  w-auto '>
     

        <p className='text-xl font-bold text-gray-700 tracking-tight '>
          {name}
        </p>
  

        <p className='xs:mb-5 block font-light text-gray-700 '>{role}</p>
        <p className=' block font-light text-gray-500 '>{qualification}</p>
        <p className=' block font-light text-gray-500 '>Sub - {subject}</p>
      </div>

      </div>
  
      {type !=="show" && <div className="ml-auto p-0 xs:p-2 ">
        <EditDialogue 
         type="edit"
         props={props}
        />
        <AlertOverlay
          props={props}
          handleDelete={handleDelete}
         
         />
      </div>}
    </div>
  );
};

export default Card;

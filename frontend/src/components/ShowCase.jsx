import { Description } from "@mui/icons-material";
import React from "react";

const ShowCase = ({ img1, img2, title, description }) => {
  return (
    //updateDiv class is being used in updatePage
    <div className='updateDiv pb-32 p-5 text-center mx-auto bg-transparent'>
      <h1 className='text-4xl py-12 text-gray-800 font-bold'>{title}</h1>
      <div className='flex flex-col sm:flex-row gap-5 sm:justify-evenly items-center w-full py-12 px-5 mb-12 md:w-4/5 rounded-2xl bg-white mx-auto '>
        <img className='object-contain rounded-2xl w-full sm:w-[45%]'  src={img1} loading="lazy" alt='' />
        <img className='object-contain rounded-2xl w-full sm:w-[45%]' src={img2}  loading="lazy" alt='' />
      </div>

      <div>
        <p className="" >
         {description}
        </p>
        <hr className="mt-5 border-1 border-white" />
      </div>
    </div>
  );
};

export default ShowCase;

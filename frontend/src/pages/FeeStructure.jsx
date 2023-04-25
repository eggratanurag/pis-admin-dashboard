import React from "react";
import { PublicDataState } from "../context/DataProvider";

const FeeStructure = () => {
  const { publicData, setPublicData } = PublicDataState();
  const year = (new Date().getFullYear()) 
  return (
    <div className='h-screen bg-[#f9fafa] text-center '>
      <h1 className="text-4xl font-bold text-gray-800 py-5">Fee-Structure of School for year {year} - {year + 1}</h1>
      <div className='w-full h-full md:w-[70%] mx-auto'>
        <object
          
          data={publicData?.feeStructure}
          type='application/pdf'
          width="100%"
          height='85%'
        >
          <p>Pdf not available</p>
        </object>
        
      </div>
    </div>
  );
};

export default FeeStructure;

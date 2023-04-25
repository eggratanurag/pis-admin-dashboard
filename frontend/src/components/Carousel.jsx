import React, { useState, useEffect } from "react";
import { PublicDataState } from "../context/DataProvider";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Loader from "./Loader";

const Carousel = () => {
  const { publicData, setPublicData } = PublicDataState();
  const [imgIndex, setImgIndex] = useState(0);

  const count =  publicData?.frontImages?.length -1;

  function next() {
    setImgIndex(
      count > imgIndex ? imgIndex + 1 : 0,
    );
  }

  function prev() {
    setImgIndex(
      imgIndex === 0 ? count : imgIndex - 1,
    );
  }
 useEffect(() => {
  const timer = setTimeout(() => {
    next()
  }, 5000);
  return () => {
    clearTimeout(timer);
  };

    
  }, [imgIndex, publicData]);

 
  return (
    <div id='myCarousel' className='relative'>
      {/* <!--Carousel items--> */}
      <div
      style={{maskImage: "linear-gradient(#000, rgba(0,0,0,0.2)"}}
       className="relative w-full overflow-hidden rounded-b-[2%] after:clear-both after:block after:content-[''] ">
        <div className='relative flex float-left -mr-[100%] w-full h-auto md:h-screen transition-all duration-[600ms] ease-in-out motion-reduce:transition-none'>
         { publicData?
            <img

            loading="lazy"
            src={publicData?.frontImages?.[imgIndex]}
            className='block w-full object-cover'
            alt='Wild Landscape'
          />: <Loader />}
          
        </div>
      </div>

      {/* <!--Carousel controls - prev item--> */}
      <button
        className='group absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-90 motion-reduce:transition-none'
        onClick={prev}
      >
        <span className='h-12 w-12 flex items-center justify-center rounded-full outline outline-slate-50 group-hover:bg-slate-800 group-hover:bg-opacity-40 group-hover:outline-2'>
          <ArrowBackIosNewIcon />
        </span>
      </button>
      {/* <!--Carousel controls - next item--> */}
      <button
        className='absolute group  bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-90  motion-reduce:transition-none'
        onClick={next}
      >
        <span className='h-12 w-12 flex items-center justify-center rounded-full outline outline-slate-50 group-hover:bg-slate-800 group-hover:bg-opacity-40 group-hover:outline-2'>
          <ArrowForwardIosIcon />
        </span>
      </button>
    </div>
  );
};

export default Carousel;

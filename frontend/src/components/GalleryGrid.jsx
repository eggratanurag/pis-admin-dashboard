import React from "react";
import { PublicDataState } from "../context/DataProvider";
import Loader from "../components/Loader";

const GalleryGrid = () => {
  const { publicData, setPublicData } = PublicDataState();

  return (
    <div className='grid place-items-center w-full min-h-screen '>
      {/* <!-- Responsive Grid Layout --> */}
      <div className='p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6'>
        <h1 className='text-4xl leading-tight font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:leading-tight lg:leading-tight md:grid-cols-3 lg:text-6xl'>
          <span className='md:col-span-2'>
            Gallery of Events of the School.
          </span>
        </h1>
        <p className='xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg'>
          The gallery on our school website highlights the diversity of events
          we host, including academic competitions, social gatherings, and
          fundraising activities. Discover the vibrancy of our school community
          through our gallery.
        </p>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#dfe3ff] xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[0] && (
              <img
                className='object-cover w-full  rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[0]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>

        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#dfe3ff] xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[1] && (
              <img
                className='object-cover w-full  rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[1]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#faf2fd]  xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[2] && (
              <img
                className='object-cover  w-full rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[2]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#dfe3ff] xs:h-auto xs:square md:col-start-2'>
          {publicData ? (
            publicData?.gallery?.[3] && (
              <img
                className='object-cover  w-full rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[3]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#faf2fd] xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[4] && (
              <img
                className='object-cover  w-full rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[4]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#dfe3ff] xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[5] && (
              <img
                className='object-cover  w-full rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[5]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#dfe3ff] xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[6] && (
              <img
                className='object-cover  w-full rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[6]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div className='h-96 flex rounded-3xl overflow-hidden bg-[#faf2fd] xs:h-auto xs:square'>
          {publicData ? (
            publicData?.gallery?.[7] && (
              <img
                className='object-cover outline-0 border-0  w-full rounded-3xl'
                loading='lazy'
                src={publicData?.gallery[7]}
                alt=''
              />
            )
          ) : (
            <Loader />
          )}
        </div>
        <p className='self-center md:text-lg md:col-span-2 md:text-center md:px-4'>
        Explore the photos and videos of our engaging and enriching events.
        </p>
      </div>
    </div>
  );
};

export default GalleryGrid;

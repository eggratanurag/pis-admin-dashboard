import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { HashLink } from "react-router-hash-link";
import { PublicDataState } from "../../context/DataProvider";

const Footer = () => {
  const { publicData, setPublicData } = PublicDataState();

  return (
    <footer className=' bg-[#7A86B6] text-neutral-200 lg:text-left'>
      <div className='  border-b-2 p-6'>
        <div
          style={{ width: " min(1200px, 95%)" }}
          className='mx-auto flex items-center justify-center lg:justify-between'
        >
          <div className='mr-12 hidden lg:block'>
            <span>Get connected with us on our social networks:</span>
          </div>
          <div className='flex justify-center'>
            <a
              target="_blank"
              href={publicData?.contactDetails?.facebook}
              className='mr-6  text-neutral-200  hover:text-white'
            >
              <FacebookIcon />
            </a>
            <a
              target="_blank"
              href={publicData?.contactDetails?.instagram}
              className='mr-6  text-neutral-200  hover:text-white'
            >
              <InstagramIcon />
            </a>

            <a
              target="_blank"
              href={publicData?.contactDetails?.twitter}
              className='mr-6  text-neutral-200  hover:text-white'
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-[#7A86B6]'>
        <div
          style={{ width: " min(1200px, 95%)" }}
          className='mx-auto  py-10 text-center lg:text-left'
        >
          <div className='grid-1 grid gap-8 lg:grid-cols-3'>
            <div className=''>
              <h6 className='mb-4 flex items-center justify-center font-semibold uppercase lg:justify-start'>
                The Prestige International School Bhind
              </h6>
              <p>
                The Prestige International School bhind, mudia kheda, Ater road, Bhind
                (M.P.) has been established in the year 2018 and is affiliated
                to Central Board of Secondary Education (CBSE). At present
                school is imparting education from Class nursery to X.
              </p>
            </div>

            <div className='flex flex-col  text-center '>
              <h6 className='mb-4 flex justify-center font-semibold uppercase '>
                Useful links
              </h6>
              <p className='mb-4'>
                <HashLink to='/information/mandatory-public-disclosure#medium' className='text-neutral-200  hover:text-white'>
                  Medium and Curriculum
                </HashLink>
              </p>
              <p className='mb-4'>
                <HashLink to='/information/mandatory-public-disclosure#mpd' className='text-neutral-200  hover:text-white'>
                  Mandatory Public Disclosure
                </HashLink>
              </p>
              <p className='mb-4'>
                <HashLink to='/academics/fee-structure' className='text-neutral-200  hover:text-white'>
                  Fee-structure
                </HashLink>
              </p>
              <p>
                <HashLink to='/information/career' className='text-neutral-200  hover:text-white'>
                  Career
                </HashLink>
              </p>
            </div>
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase lg:justify-start '>
                Contact
              </h6>
              <p className='mb-4 flex gap-2 items-center justify-center lg:justify-start'>
                <LocationOnIcon />
                {publicData?.contactDetails?.address}
              </p>
              <p className='mb-4 flex items-center gap-2 justify-center lg:justify-start'>
                <MailOutlineIcon />
                {publicData?.contactDetails?.email}
              </p>
              <p className='mb-4 flex gap-2 items-center justify-center lg:justify-start'>
                <CallIcon />
                {publicData?.contactDetails?.phone1}
              </p>
              <p className='flex gap-2 items-center justify-center lg:justify-start '>
                <CallIcon />
                {publicData?.contactDetails?.phone2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#495C83] p-6 text-center'>
        <span>©{new Date().getFullYear()} Copyright: </span>
        <a
          className='font-semibold  text-neutral-400'
          href='https://tailwind-elements.com/'
        >
          The Prestige International School Bhind
        </a>
      </div>
    </footer>
  );
};

export default Footer;

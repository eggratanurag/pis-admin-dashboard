import React, {useState} from "react";
import Card from "../../../components/Card";
import { PublicDataState } from "../../../context/DataProvider";
import ImageForm from "../../../components/ImageForm";
import ImageForm2 from "../../../components/ImageForm2";
import Loader from "../../../components/Loader";
import PdfForm from "../../../components/PdfForm";
import EditContactDialogue from "../../../components/EditContactDialogue";
import EditStaffDialogue from "../../../components/EditStaffDialogue";
import SearchIcon from '@mui/icons-material/Search';
import {staffMemberMutProvider, staffMemberDeleteMutProvider} from "../../../Api/Mutations";

import "./UpdatePage.css";

const UpdatePage = () => {
  const staffMemberMut = staffMemberMutProvider()
  const staffMemberDeleteMut = staffMemberDeleteMutProvider()
  const { publicData, setPublicData } = PublicDataState();
  const [query, setQuery] = useState('');
  const { email, phone1, phone2, address, facebook, instagram, twitter } =  publicData?.contactDetails || {};


  console.log(query)
  function handleDelete (id) {
    
    staffMemberDeleteMut.mutate(id)

   }
  return (
    <div className='mainDiv w-full min-h-screen py-16 '>
      <div className='updateDiv flex flex-col-reverse md:flex-row justify-center gap-5  mx-auto  '>
       
        <div className='min-w-[35%] shrink-0 flex-col bg-white shadow-md  rounded-3xl px-5 md:px-10 py-5 md:py-10'>

          <div className="flex items-center justify-between  mb-5 ">
          <EditStaffDialogue type="create" />

          <div className=" relative   text-gray-600 ml-5 w-full">
            <input 
             onChange={e=> setQuery(e.target.value)}
              className=" w-full rounded-xl focus:ring-0 border-2  border-gray-300 bg-white h-10 px-5   text-sm focus:border-[#a4acf4] "
             type="search" name="search" placeholder="Search by name..."/>
           </div>

          </div>
           
          {publicData ? 
          (publicData?.staffInfo?.filter(item => 
            query ? 
            item.name.toLowerCase().includes(query.toLowerCase()) : 
            item)
          .map((info, index) => (
            <React.Fragment key={index}>
              <Card props={info} handleDelete={handleDelete} />
            </React.Fragment>
          )))
         : 
         <Loader />
         }
        </div>
      
      <div className="updateGrid shrink w-full ">
        <div className='galleryDiv bg-white shadow-md rounded-3xl px-5 py-10'>
    
          <ImageForm props={publicData?.gallery} heading="Gallery Images" />
         
        </div>
        <div className='feeDiv bg-white shadow-md rounded-3xl px-5 py-10'>
        <PdfForm  title='Fee-Structure PDF' type='fees'/>
        </div>
        <div className='bookDiv bg-white shadow-md rounded-3xl px-5 py-10'>
        <PdfForm title='Book-list PDF' type='booklist' />
        </div>
        <div className='frontImageDiv bg-white shadow-md rounded-3xl px-5 py-10'>
        <ImageForm2 props={publicData?.frontImages} heading="Landing Page Image" />
        </div>
        <div className='contactDiv flex justify-between bg-white shadow-md rounded-3xl px-5 py-10'>
         <div className="">
          <h1 className="text-4xl font-bold mb-12 text-gray-700">Contact Details</h1>
         <h2>Email:  <span className="text-gray-500">{email}</span> </h2>
         <h2>Phone 1:  <span className="text-gray-500">{phone1}</span> </h2>
         <h2>Phone 2:  <span className="text-gray-500">{phone2}</span> </h2>
         <h2>Address:  <span className="text-gray-500">{address}</span> </h2>
         <h2>Facebook:  <span className="text-gray-500">{facebook}</span> </h2>
         <h2>Instagram:  <span className="text-gray-500">{instagram}</span> </h2>
         <h2>twitter:  <span className="text-gray-500">{twitter}</span> </h2>
         
         </div>

         <EditContactDialogue   />
        </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;

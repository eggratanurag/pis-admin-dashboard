import React, {useState} from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Loader from "./Loader";
import {feeStructureMutProvider, bookListMutProvider} from "../Api/Mutations";


const PdfForm = ({props, title, type}) => {
  const feeStructureMut = feeStructureMutProvider();
  const booklistMut = bookListMutProvider();
   const [pdf, setPdf] = useState()

   function handleBookList () {
    booklistMut.mutate(pdf, {onSuccess: ()=> setPdf()} )
    console.log("booklist")
   }
   function handleFee () {
    feeStructureMut.mutate(pdf, {onSuccess: ()=> setPdf()})
   }
  return (
    <>
      <div className=''>
        <label
          htmlFor='cover-photo'
          className='block text-sm font-medium leading-6 text-gray-800'
        >
         {title}
        </label>
        <div className='mt-2 flex justify-center rounded-lg border border-solid border-gray-800/25 px-6 py-5'>
          <div className='text-center'>

            <PhotoIcon
              className='mx-auto h-12 w-12 text-gray-300'
              aria-hidden='true'
            />
            <div className='mt-4 flex text-sm leading-6 text-gray-600'>
              <label
                // htmlFor='file-upload'
                className='relative w-24 cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
              >
                <span>Upload a file</span>
                <input
                  onChange={e => setPdf(e.target.files[0])}
                  // id='file-upload'
                  name='file-upload'
                  type='file'
                  accept="application/pdf"
                  // accept='image/*'
                  className='sr-only'
                />
              </label>
              
            </div>
            <p className='text-xs leading-5 text-gray-600'>
              PNG, JPG Only
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 flex'>
        <div className='flex flex-wrap  gap-2'>
       
  
        </div>

        <button
          type='submit'
          className='h-5 px-5 ml-auto group relative flex w-auto justify-center disabled:bg-[#caceff] rounded-md bg-[#747cf4]  py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          disabled={(pdf && !feeStructureMut.isLoading && !booklistMut.isLoading)? false : true}
          onClick={type === "fees" ? handleFee : handleBookList}
         
        >
          {/* <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span> */}
          {(feeStructureMut.isLoading || booklistMut.isLoading) ? "Saving...": "Save"}
        </button>
      </div>
    </>
  );
};

export default PdfForm;

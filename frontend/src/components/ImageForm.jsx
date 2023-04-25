import React, {useState} from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Loader from "./Loader";
import {galleryMutProvider} from "../Api/Mutations";


const ImageForm = ({props, heading}) => {
 const galleryMut = galleryMutProvider( )

  const [image, setImage] = useState();

  async function handleSave () {
   
    galleryMut.mutate({image, setImage})
  
    
  }
  return (
    <>
      <div className=''>
        <label
          htmlFor='cover-photo'
          className='block text-sm font-medium leading-6 text-gray-800'
        >
          {heading}
        </label>
        <div className='mt-2 flex justify-center rounded-lg border border-solid border-gray-800/25 px-6 py-5'>
          <div className='text-center'>
                   {galleryMut.isLoading ?
                   <div className="h-12 flex"><Loader /></div>:

                  (image  ?
                  <img  src={URL.createObjectURL(image)} className='mx-auto h-12 w-12 rounded-md object-cover' /> :
                   <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />)
                   }
           
            <div className='mt-4 flex text-sm leading-6 text-gray-600'>
              <label
                htmlFor='galleryImg'
                className='relative w-32 cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
              >
                <span>Upload an Image</span>
                <input
                  onChange={e => setImage(e.target.files[0])}
                  id='galleryImg'
                  name='galleryImg'
                  type='file'
                  accept='image/*'
                  className='sr-only'
             
                />
              </label>
        
            </div>
            <p className='text-xs leading-5 text-gray-600'>
              PNG, JPG only
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 flex'>
        <div className='flex flex-wrap  gap-2'>
          {props ? props.map((img, index) => (
            <div key={index} className=' h-16 w-16 rounded-lg bg-[#a4acf4]'>
              <img
                className='w-16 h-16 object-cover rounded-lg '
                src={img}
                alt=''
              />
            </div>
          ))
          :  <Loader />
        }
  
        </div>

        <button
          type='submit'
          className='h-5 px-5 ml-auto group relative flex w-auto justify-center disabled:bg-[#caceff] rounded-md bg-[#747cf4]  py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          disabled={(image && !galleryMut.isLoading)? false : true}
          onClick={handleSave}
         
        >
          {/* <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span> */}
          {galleryMut.isLoading ? "Saving": "Save"}
        </button>
      </div>
    </>
  );
};

export default ImageForm;

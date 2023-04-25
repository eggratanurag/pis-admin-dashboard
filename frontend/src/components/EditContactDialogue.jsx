import React,{useState, useEffect} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import EditIcon from '@mui/icons-material/Edit';
import {PublicDataState} from '../context/DataProvider';
import {contactMutProvider} from '../Api/Mutations';


const EditContactDialogue = () => {
  const contactMut = contactMutProvider()
  const { publicData, setPublicData } = PublicDataState();
    const [contactData, setContactData] = useState({
         email: '',
         phone1: '',
         phone2: '',
         address: '',
         facebook: '',
         instagram:  '',
         twitter: '',
    })

    function addValues () {
      setContactData(publicData?.contactDetails)
    }

    function handleSave () {
      contactMut.mutate(contactData)
    }
    // console.log(contactData)
    return (
        <div>
            <Dialog.Root>
    <Dialog.Trigger asChild>
      <button 
      onClick={addValues}
      className="outline-1 outline-[#ccc] hover:outline hover:outline-[#ccc] transition-outline duration-[200ms] ease-in bg-transparent flex items-center justify-center text-gray-500 hover:bg-mauve3 h-12 w-12 rounded-full font-normal leading-none ">
      Edit
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Edit Contact Information.
        </Dialog.Title>
        {/* <Dialog.Description className="text-mauve11 mt-[10px] text-[15px] leading-normal">
          Make changes to Staff Information. Click save when you're done.
        </Dialog.Description> */}
        <fieldset className="mb-[15px] mt-5 flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
            Email  
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="email"
            value={contactData.email}
            onChange={e=> setContactData(prev => {return {...prev, email: e.target.value} } )}
            
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
            Phone 1
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="phone1"
            value={contactData.phone1}
            onChange={e=> setContactData(prev => {return {...prev, phone1: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
            Phone 2
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="phone2"
            value={contactData.phone2}
            onChange={e=> setContactData(prev => {return {...prev, phone2: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
            Address
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="address"
            value={contactData.address}
            onChange={e=> setContactData(prev => {return {...prev, address: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
            Facebook
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="facebook"
            value={contactData.facebook}
            onChange={e=> setContactData(prev => {return {...prev, facebook: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
           Instagram
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="instagram"
            value={contactData.instagram}
            onChange={e=> setContactData(prev => {return {...prev, instagram: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
           Twitter
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="twitter"
            value={contactData.twitter}
            onChange={e=> setContactData(prev => {return {...prev, twitter: e.target.value} } )}
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button onClick={handleSave}
             className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
        </div>
    );
}

export default EditContactDialogue;

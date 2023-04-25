import React, {useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import EditIcon from '@mui/icons-material/Edit';
import blankPfp from '../assets/images/blankPfp.png';
import {staffMemberMutProvider, editStaffMemberMutProvider} from '../Api/Mutations';
import Loader from './Loader';
import "./EditStaffDialogue.css"


const EditDialogue = ({props ,type}) => {
    const staffMemberMut = staffMemberMutProvider()
    const editStaffMemberMut = editStaffMemberMutProvider()
    const [open, setOpen] = React.useState(false);
    // const { name, qualification, subject, image, role } = props;
    const [image, setImage]= useState(blankPfp)
    const [memberData, setMemberData] = useState({
      id: '',
      name: '',
      qualification: '',
      subject: '',
      role: 'teacher',
 })


 function fillPrevDetails () {
   setMemberData(props)
   setImage(props.image)
 }

 function handleSave () {
  staffMemberMut.mutate({memberData, image, setMemberData, setImage}, {onSuccess: () => {
    setOpen(false)
  }})

  
 }
 function handleEdit (id) {

  return function () {editStaffMemberMut.mutate({memberData, image, setMemberData, setImage}, {onSuccess: () => {
    setOpen(false)
  }})}
  
 }




    return (
      
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      {type==='edit' ?<button onClick={fillPrevDetails }
       className="outline-1 outline-[#ccc] hover:outline hover:outline-[#ccc] transition-outline duration-[200ms] ease-in bg-transparent flex text-gray-500 hover:bg-mauve3 h-12 w-12  items-center justify-center rounded-full font-normal leading-none ">
       <EditIcon />
      </button>
      :
      <button className=" text-violet11 hover:bg-mauve3 inline-flex h-10 items-center justify-center rounded-full bg-white px-[15px] font-medium leading-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]  focus:shadow-[0_0_0_2px] focus:shadow-[#a4acf4] focus:outline-none">
      +
      </button>}
     
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {type==='edit' ? "Edit Member Information." : "Add Member Information"}
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] text-[15px] leading-normal">
         {type=== 'edit' &&  "Make changes to Staff Information. Click save when you're done."}
        </Dialog.Description>
        <fieldset className="mb-[15px]  flex justify-end items-center gap-5">
        
<label htmlFor="photo-upload" className="rounded-full relative inline-block  p-2 cursor-pointer mb-20px">
    {/* some css is in index.css related to class img-upload */}
    <div className="img-upload w-[100px] h-[100px] relative overflow-hidden rounded-full" >
      <img 
      htmlFor="photo-upload" className='object-cover w-full h-full' 
      src={typeof(image) === "string"?image : URL.createObjectURL(image)}/>
    </div>
    <input 
     onChange={e=> setImage(e.target.files[0])}
    className='hidden ' id="photo-upload" type="file"  accept='image/*' /> 
  </label>
     

     
        </fieldset>
        <fieldset className="mb-[15px] mt-5 flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
            Name
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            maxLength="20"
            value={memberData.name}
            onChange={e=> setMemberData(prev => {return {...prev, name: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="subject">
            Subject
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="subject"
            maxLength="20"
            value={memberData.subject}
            onChange={e=> setMemberData(prev => {return {...prev, subject: e.target.value} } )}
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="qualification">
            Qualification
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="qualification"
            maxLength="20"
            value={memberData.qualification}
            onChange={e=> setMemberData(prev => {return {...prev, qualification: e.target.value} } )}
          />
        </fieldset>

        <fieldset className=" flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="role">
            Role
          </label>
    
        <select 
           id='role'
           value={memberData.role}
           className="py-0 border-none text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px]  shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px]"
           onChange={e=> setMemberData(prev => {return {...prev, role: e.target.value}})}
           >
     
         <option >teacher</option>
         <option >management</option>
         <option >principal</option>
         <option >director</option>
        </select>
   
        </fieldset>
        <div className="mt-[25px] flex justify-end">

            <button onClick={type=== "edit" ?  handleEdit(props?.id) : handleSave }
            disabled={(!memberData.name || !memberData.qualification || !memberData.subject || !memberData.role || staffMemberMut.isLoading || editStaffMemberMut.isLoading) ? true : false}
             className="bg-green4 w-24 text-green11 disabled:text-gray-300 disabled:bg-green4 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              { (staffMemberMut.isLoading || editStaffMemberMut.isLoading) ? <Loader color="#44924c" /> : "Save"}
            </button>
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
    )
 }

export default EditDialogue;
import {LoginFn} from './Apis'
import {setGalleryFn, setLdImgFn, setContactFn, editStaffMemberFn, createStaffMemberFn, deleteStaffMemberFn, setFeePdfFn, setBookListPdfFn} from './Apis'
import { useQuery, useMutation } from "@tanstack/react-query";
import PlayToast from '../components/Toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import PublicDataState from '../context/DataProvider';
import blankPfp from '../assets/images/blankPfp.png';


function loginMutProvider() {

  var oneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
  const Navigate = useNavigate()
    const loginMut = useMutation({
        mutationFn: LoginFn,
        onSuccess: (data) => {

          Cookies.set('faffyDuck', data, { expires: oneHour, SameSite:"None", secure: true  }, );
          Navigate('/update-page')
          PlayToast('Logged In', "success")
        },
        onError: (data) => {
          console.log(data)
          PlayToast(data.response.data, "error")
        }
      });
  return loginMut
}
function galleryMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const galleryMut = useMutation({
        
        mutationFn: setGalleryFn,
        onSuccess: (data, variables) => {
          variables.setImage();
          setPublicData(data);
          PlayToast('Added Image to the Gallery', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data.message, "error")
        }
      });
  return galleryMut
}

function ldPageImgMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const ldPageImgMut = useMutation({
        
        mutationFn: setLdImgFn,
        onSuccess: (data, variables) => {
          variables.setImage();
          setPublicData(data);
          PlayToast('Added to Landing Page', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return ldPageImgMut;
}
function contactMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const contactMut = useMutation({
        
        mutationFn: setContactFn,
        onSuccess: (data) => {
          console.log(data)
          setPublicData(data);
          PlayToast('Saved Contacts', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return contactMut;
}

function staffMemberMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const staffMemberMut = useMutation({
        
        mutationFn: createStaffMemberFn,
        onSuccess: (data, variables) => {
           variables.setMemberData(prev => {return {...prev, name: '', subject: '', qualification: '', role: "teacher"}})
           variables.setImage(blankPfp)
           setPublicData(data);
          PlayToast('Created New Member', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return staffMemberMut;
}

function editStaffMemberMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const editStaffMemberMut = useMutation({
        
        mutationFn: editStaffMemberFn,
        onSuccess: (data, variables) => {
           variables.setMemberData(prev => {return {...prev, name: '', subject: '', qualification: '', role: "teacher"}})
           variables.setImage(blankPfp)
           setPublicData(data);
          PlayToast('Updated the Member', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return editStaffMemberMut;
}

function staffMemberDeleteMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const staffMemberDeleteMut = useMutation({
        
        mutationFn: deleteStaffMemberFn,
        onSuccess: (data) => {
           console.log(data)
           setPublicData(data);
          PlayToast('Removed the Member', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return staffMemberDeleteMut;
}

function feeStructureMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const feeStructureMut = useMutation({
        
        mutationFn: setFeePdfFn,
        onSuccess: (data) => {

           setPublicData(data);
          PlayToast('Added the Fee-Structure', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return feeStructureMut;
}

function bookListMutProvider() {
  const { publicData, setPublicData } = PublicDataState();

    const booklistMut = useMutation({
        
        mutationFn: setBookListPdfFn,
        onSuccess: (data) => {

           setPublicData(data);
          PlayToast('Added the Booklist', "success");
        },
        onError: (data) => {
          PlayToast(data.response.data, "error")
        }
      });
  return booklistMut;
}



export {loginMutProvider,
   galleryMutProvider, 
  ldPageImgMutProvider, 
  contactMutProvider, 
  staffMemberMutProvider,
  staffMemberDeleteMutProvider,
  editStaffMemberMutProvider,
  feeStructureMutProvider,
  bookListMutProvider
}
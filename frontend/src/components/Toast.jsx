import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PlayToast = (message, type, myPromise) => {
  // console.log(message, type, typeof(myPromise))
  if(type === "success") {
    return (
    toast.success(message, {
       duration: 2000,
       position: 'bottom-left',
        style: {
        //   border: '1px solid #713200',
          padding: '16px',
          color: '#1e293b',
        },
        iconTheme: {
          primary: '#747cf4',
          secondary: '#FFFAEE',
        },
      })
    );

  }else if(type === "error") {
    return toast.error(message,{
      duration: 3000,
      position: 'bottom-left',
    })
  }else if(type === "promise") {
   
    return toast.promise(myPromise, {
      loading: 'Loading',
      success: message,
      error: 'something wrong happened',
    });
  }
}

export default PlayToast;

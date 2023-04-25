
import axios from "axios";
import FormData from "form-data"
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
const configFileType = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

function LoginFn ({email, password}) {
    return axios.post(
        "/api/user/login",{ email, password },{ withCredentials: true }, config,
      ).then((result) => result.data);
  }

 function getPublicData () {
 
    return axios.get(`/data`, config) 
        .then(result => result.data)
   

}
 function setGalleryFn (image) {
  let formData = new FormData(); 
  formData.set('image', image.image);
  //  console.log(image.image)
    return axios.put(
      '/update-data/gallery', formData ,{ withCredentials: true }, configFileType) 
        .then(result => result.data)
  

}
 function setLdImgFn (image) {
  let formData = new FormData(); 
  formData.set('image', image.image);
  //  console.log(image.image)
    return axios.put(
      '/update-data/landing-page-image', formData ,{ withCredentials: true }, configFileType) 
        .then(result => result.data)
       
}
 function setFeePdfFn (pdf) {
  let formData = new FormData(); 
  formData.set('pdf', pdf);
  //  console.log(pdf, formData)
  //  return;
    return axios.put(
      '/update-data/fee-structure', formData ,{ withCredentials: true }, configFileType) 
        .then(result => result.data)
       
}
 function setBookListPdfFn (pdf) {
  let formData = new FormData(); 
  formData.set('pdf', pdf);
  //  console.log(pdf, formdata)
    return axios.put(
      '/update-data/booklist', formData ,{ withCredentials: true }, configFileType) 
        .then(result => result.data)
       
}

 function setContactFn (contactData) {

    return axios.put(
      '/update-data/contact', contactData ,{ withCredentials: true }, config) 
        .then(result => result.data)


}
 function createStaffMemberFn ({memberData, image}) {


  let formData = new FormData(); 
  formData.append('photo', image);
  formData.append('data', JSON.stringify(memberData));
   
    return axios.put(
      '/update-data/staff-member', formData ,{ withCredentials: true }, config) 
        .then(result => result.data)


}
 function editStaffMemberFn ({memberData, image}) {
   
  function formData () {
    if(typeof(image) === "object") {
      let formData = new FormData(); 
      formData.append('photo', image);
      formData.append('data', JSON.stringify(memberData));
      return formData
    }else {
      return memberData
    }
  }
   console.log(formData())
    return axios.put(
      '/update-data/staff-member/edit', formData() ,{ withCredentials: true }, config) 
        .then(result => result.data)


}
 function deleteStaffMemberFn (id) {
   
    return axios.put(
      '/update-data/staff-member/delete', {id} ,{ withCredentials: true }, config) 
        .then(result => result.data)
}

  export {
    LoginFn ,
    getPublicData, 
    setGalleryFn, 
    setLdImgFn, 
    setContactFn,
    createStaffMemberFn,
    deleteStaffMemberFn,
    setFeePdfFn,
    setBookListPdfFn,
    editStaffMemberFn
  };
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const publicDataContext = createContext();

const PublicDataProvider = ({ children }) => {
  const [publicData, setPublicData] = useState();
  console.log(publicData)
    async function getPublicData () {
       
      try {    
        await axios.get(`/data`)
           .then(result => result.data)
           .then(data => setPublicData(data));
           
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(() => {
      getPublicData()
    }, []);

  return (
    <publicDataContext.Provider value={{ publicData, setPublicData }}>
      {children}
    </publicDataContext.Provider>
  );
};



const PublicDataState = () => {
  return useContext(publicDataContext);
};


export default PublicDataState;
export {PublicDataProvider};


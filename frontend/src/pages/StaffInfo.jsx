import React from "react";
import Card from "../components/Card";
import { PublicDataState } from "../context/DataProvider";
import Loader from "../components/Loader";


const StaffInfo = () => {
  const { publicData, setPublicData } = PublicDataState();

  return (
    <div className="w-full mainDiv">
    <div className="updateDiv bg-transparent p-5 flex flex-col md:flex-row gap-5 xl:gap-16 justify-evenly mx-auto">
        <div className=" w-full md:w-[50%]">
        <div className="">
        <h1 className="text-4xl text-gray-800 pl-5 pt-12 pb-5 font-bold">Principal</h1>

      {publicData ? (
        publicData?.staffInfo?.filter(info => info.role === "principal").map((info, index) => (
            <React.Fragment key={index}>
              <Card props={info} type="show" />
            </React.Fragment>
          ))
      ) : (
        <Loader />
      )}
        </div>


        <div className="">
            <h1 className="text-4xl text-gray-800 pl-5 pt-12 pb-5 font-bold">Teacher</h1>
        {publicData ? (
       publicData?.staffInfo?.filter(info => info.role === "teacher").map((info, index) => (
        <React.Fragment key={index}>
          <Card props={info} type="show" />
        </React.Fragment>
      ))
  ) : (
        <Loader />
      )}
        </div>
        </div>

        <div className=" w-full md:w-[50%]">
            <h1 className="text-4xl text-gray-800 pl-5 pt-12 pb-5 font-bold">Management</h1>
        {publicData ? (
       publicData?.staffInfo?.filter(info => info.role === "management").map((info, index) => (
        <React.Fragment key={index}>
          <Card props={info} type="show" />
        </React.Fragment>
      ))
  ) : (
        <Loader />
      )}
        </div>
    </div>
    </div>
  );
};

export default StaffInfo;

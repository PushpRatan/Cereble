import React from "react";

const ProgressBar = () => {
  return (
    <div className="flex flex-col justify-start w-[90%]">
      <div className="font-bold pb-1">Progress</div>
      <div className=" h-1 border-solid bg-white rounded-md">
        <div className="w-2/4 h-1 rounded-md bg-orange-600 z-0 "></div>
      </div>
      <div className="text-end font-bold">50%</div>
    </div>
  );
};

export default ProgressBar;

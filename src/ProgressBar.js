import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="flex flex-col justify-start w-[90%]">
      <div className="font-bold pb-1">Progress</div>
      <div className=" h-1 border-solid bg-white rounded-md">
        <div
          className="h-1 rounded-md bg-orange-600 z-0 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-end font-bold">{progress}%</div>
    </div>
  );
};

export default ProgressBar;

import React from "react";
import ProgressBar from "./ProgressBar";

const Card = () => {
  return (
    <div className="w-[200px] drop-shadow-lg">
      <div className="w-full h-[200px] rounded-t-[40px] bg-orange-200 p-3 bg-opacity-75">
        <div className="flex p-2 justify-between mb-2">
          <div className="font-light">
            December 10, <div>2020</div>
          </div>
          <div className="font-bold">X</div>
        </div>
        <div className="m-auto w-[180px] mb-4">
          <p className="w-[160-px] m-auto text-center mb-2">
            <span className="font-bold block">Web Designing</span>
            <span>Prototyping</span>
          </p>
          <ProgressBar />
        </div>
      </div>
      <div className="w-full h-[60px] rounded-b-[40px] mt-[2px] bg-orange-200 p-3 pb-5 bg-opacity-75">
        <div className="flex">
          <div>
            <span className="inline-block w-7 h-7 rounded-full bg-slate-600"></span>
            <span className="inline-block w-7 h-7 rounded-full bg-slate-500 -translate-x-3"></span>
          </div>
          <div>
            <span className="inline-block w-7 h-7 rounded-full bg-white text-center text-orange-400 text-lg font-bold">
              +
            </span>
            <span className="inline-block w-[90px] h-7 p-1 bg-white text-center text-orange-400 font-bold text-sm rounded-xl">
              2 Days Left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

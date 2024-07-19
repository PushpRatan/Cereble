import React from "react";
import ProgressBar from "./ProgressBar";

const Card = ({ id, content, onRemove }) => {
  return (
    <div className="w-[200px] drop-shadow-lg">
      <div
        className={`w-full h-[200px] rounded-t-[40px] ${content.color.card} p-3 bg-opacity-75`}
      >
        <div className="flex p-2 justify-between mb-2">
          <div className="font-light">
            {content.dayMonth} <br /> <div>{content.year}</div>
          </div>
          <button className="font-bold" onClick={() => onRemove(id)}>
            X
          </button>
        </div>
        <div className="m-auto w-[180px] mb-4">
          <p className="w-[160-px] m-auto text-center mb-2">
            <span className="font-bold block">{content.title}</span>
            <span>{content.subtitle}</span>
          </p>
          <ProgressBar
            progress={content.progress}
            color={content.color.progress}
          />
        </div>
      </div>
      <div
        className={`w-full h-[60px] rounded-b-[40px] mt-[2px] ${content.color.card} p-3 pb-5 bg-opacity-75`}
      >
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
              {content.daysLeft} Days Left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

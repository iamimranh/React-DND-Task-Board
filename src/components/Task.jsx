import React from "react";

const Task = ({ number, name, date, isDone }) => {
  return (
    <div
      className={`shadow-custom p-[5px] flex gap-1.5 select-none cursor-pointer ${
        isDone ? "bg-[#60BC7A]" : ""
      }`}
    >
      <div className=" px-3 py-6 bg-secondary rounded-sm font-medium ">
        {" "}
        {number}{" "}
      </div>
      <div className="w-full">
        <div className="text-[10px] font-medium mb-1.5">{date}</div>
        <div className="text-lg font-medium">{name}</div>
      </div>
    </div>
  );
};

export default Task;

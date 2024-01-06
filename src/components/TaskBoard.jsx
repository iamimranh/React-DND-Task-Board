import React from "react";

const TaskBoard = ({ title, children }) => {
  return (
    <div className=" bg-white shadow-custom">
      <div className="px-5 py-[26px] rounded-[5px] bg-[#D5D1D8] text-2xl font-medium mb-2.5">
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TaskBoard;

import React, { useState } from "react";

const TaskForm = ({ addNewTask }) => {
  const [task, setTask] = useState({
    name: "",
    number: "",
    date: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNewTask(task);
  };

  const handleOnchange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-[5px] bg-third p-2.5 rounded-[5px] border border-dashed border-[#C6BBCF]">
      <form action="" className="flex flex-col gap-1.5" onSubmit={handleClick}>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="name" className="font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            className=" px-[10px] py-[14px] rounded-[5px]"
            onChange={handleOnchange}
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="number" className="font-normal">
            Number
          </label>
          <input
            type="number"
            name="number"
            className=" px-[10px] py-[14px] rounded-[5px]"
            onChange={handleOnchange}
            placeholder="Enter Number"
            required
          />
        </div>
        <div className="flex flex-col  gap-[10px]">
          <label htmlFor="date" className="font-normal">
            Date
          </label>
          <input
            type="date"
            name="date"
            className=" px-[10px] py-[14px] rounded-[5px]"
            onChange={handleOnchange}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className=" bg-primary p-[12px] text-center w-full text-white rounded-[7.462px] "
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;

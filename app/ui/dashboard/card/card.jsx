import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex bg-custom-bg p-5 gap-5 cursor-pointer w-full rounded-lg bg-[#151c2c] hover:bg-custom-bg">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="text-6 font-medium">Total Users</span>
        <span>10.237</span>
        <span className="font-light">
          <span className="text-lime text-green-400">12% </span>more than
          previous month
        </span>
      </div>
    </div>
  );
};

export default Card;

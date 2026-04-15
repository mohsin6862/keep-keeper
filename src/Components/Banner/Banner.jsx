import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center space-y-5 mb-20">
      <h1 className="text-5xl text-[#1F2937] font-bold ">
        Friends to keep close in your life
      </h1>
      <p className="font-semibold text-[#64748B] max-w-[500px]  mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white font-semibold"><FaPlus></FaPlus> Add a Friend</button>
    </div>
  );
};

export default Banner;

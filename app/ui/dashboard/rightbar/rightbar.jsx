import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed ">
      <div className="relative bg-gradient-to-t from-custom-blue to-light-bg pt-5 pb-5 rounded-lg">
        <div className="absolute bottom-0 right-5">
          <Image
            className="object-contain opacity-20"
            src="/astronaut.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-6 ml-5 ">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-meduim text-xs text-custom-soft">
            How to use the new version of the admin dashboard?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2.5 flex items-center gap-2.5 bg-bg-button text-white border-none rounded-md w-max cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-custom-blue to-light-bg pt-5 pb-5 rounded-lg">
        <div className="flex flex-col gap-6 ml-5 ">
          <span className="font-bold ">🚀 Coming Soon</span>
          <h3 className="font-meduim text-xs text-custom-soft">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span>Boost your productivity</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2.5 flex items-center gap-2.5 bg-bg-button text-white border-none rounded-md w-max cursor-pointer">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

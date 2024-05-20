import Image from "next/image";
import React from "react";

const SingleUserPage = () => {
  return (
    <div className="flex gap-50 mt-5">
      <div className="flex-1 bg-light-bg p-5 rounded-lg font-bold text-custom-soft h-max">
        <div className="w-full h-300 relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="avatar" fill />
        </div>
        John Doe
      </div>
      <div className="flex-3 bg-light-bg p-5 rounded-lg ">
        <form className="flex flex-col">
          <label className="text-xs">Username</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="text"
            name="username"
            placeholder="John Doe"
          />
          <label className="text-xs">Email</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
          />
          <label className="text-xs">Password</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="password"
            name="password"
          />
          <label className="text-xs">Phone</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="phone"
            name="phone"
            placeholder="+123455"
          />
          <label className="text-xs">Address</label>
          <textarea
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            name="address"
            id="address"
            cols="30"
            rows="10"
            placeholder="New York"
          ></textarea>
          <label className="text-xs">Is Admin?</label>
          <select
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            name="cat"
            id="cat"
          >
            <option value={false} selected>
              Is Admin?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="text-xs">Is Active?</label>
          <select
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            name="cat"
            id="cat"
          >
            <option value={true} selected>
              Is Active?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="p-5 border-none cursor-pointer bg-teal-600 rounded-md mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;

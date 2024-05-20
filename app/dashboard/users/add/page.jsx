import React from "react";

const AddUserPage = () => {
  return (
    <div className="bg-light-bg p-5 rounded-lg mt-5 ">
      <form className="flex justify-between flex-wrap" action="">
        <input
          className="w-45 p-30 bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="w-45 p-30 bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className="w-45 p-30 bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          className="w-45 p-30 bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="phone"
          placeholder="phone"
          name="phone"
          required
        />
        <select
          className="w-45 p-30 bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          name="cat"
          id="cat"
        >
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          className="w-45 p-30 bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          name="cat"
          id="cat"
        >
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          className="p-30 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button
          className="w-full p-30 rounded cursor-pointer border-none bg-teal-600 text-custom-soft"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;

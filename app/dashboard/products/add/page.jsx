import React from "react";

const AddProductPage = () => {
  return (
    <div className="bg-light-bg p-5 rounded-lg mt-5 ">
      <form className="flex justify-between flex-wrap" action="">
        <input
          className="w-45 p-30 bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          className="w-45 p-30 bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          name="cat"
          id="cat"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          className="w-45 p-30 bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          className="w-45 p-30 bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="number"
          placeholder="stock"
          name="stock"
        />
        <input
          className="w-45 p-30 bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="number"
          placeholder="color"
          name="color"
        />
        <input
          className="w-45 p-30 bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          type="number"
          placeholder="size"
          name="size"
        />
        <textarea
          className="p-30 w-full bg-transparent text-custom-soft rounded-md border-2 border-custom-bg mb-30"
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Description"
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

export default AddProductPage;

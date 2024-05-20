import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="flex gap-50 mt-5">
      <div className="flex-1 bg-light-bg p-5 rounded-lg font-bold text-custom-soft h-max">
        <div className="w-full h-300 relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="avatar" fill />
        </div>
        Iphone
      </div>
      <div className="flex-3 bg-light-bg p-5 rounded-lg ">
        <form className="flex flex-col">
          <label className="text-xs">Title</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="text"
            name="title"
            placeholder="title"
          />
          <label className="text-xs">Price</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="number"
            name="price"
            placeholder="23"
          />
          <label className="text-xs">Stock</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="number"
            name="stock"
            placeholder="23"
          />
          <label className="text-xs">Color</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="text"
            name="color"
            placeholder="red"
          />
          <label className="text-xs">Size</label>
          <input
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            type="text"
            name="color"
            placeholder="23"
          />
          <label className="text-xs">Cat</label>
          <select
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            name="cat"
            id="cat"
          >
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label className="text-xs">Description</label>
          <textarea
            className="p-5 w-full bg-custom-blue text-custom-soft rounded-md border-2 border-custom-bg my-2.5"
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="description"
          ></textarea>

          <button className="p-5 border-none cursor-pointer bg-teal-600 rounded-md mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

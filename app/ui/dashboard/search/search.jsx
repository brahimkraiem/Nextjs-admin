import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-custom w-max">
      <MdSearch />
      <input placeholder={placeholder} className="bg-[#2e374a]" />
    </div>
  );
};

export default Search;

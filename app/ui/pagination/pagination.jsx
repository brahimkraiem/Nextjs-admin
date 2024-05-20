import React from 'react'

const Pagination = () => {
  return (
    <div className="p-2.5 flex justify-between">
      <button className="py-1.25 px-2.5 disabled:cursor-not-allowed" disabled>
        Previous
      </button>
      <button className="py-1.25 px-2.5">
        Next
      </button>
    </div>
  );
}

export default Pagination

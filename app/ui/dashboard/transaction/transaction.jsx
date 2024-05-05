import Image from "next/image";
import React from "react";

const Transaction = () => {
  return (
    <div className="bg-custom-bg rounded-2xl p-5 ">
      <h2 className="text-custom-soft mb-5 font-extralight">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                />
                Joe doe
              </div>
            </td>
            <td>
              <span className="rounded text-sm text-white p-1.25 bg-bg-pending ">
                Pending
              </span>
            </td>
            <td>12.02.2024</td>
            <td>$3.3</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                />
                Joe doe
              </div>
            </td>
            <td>
              <span className="rounded text-sm text-white p-1.25 bg-bg-done  ">
                Done
              </span>
            </td>
            <td>12.02.2024</td>
            <td>$3.3</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-2.5">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                />
                Joe doe
              </div>
            </td>
            <td>
              <span className="rounded text-sm text-white p-1.25 bg-bg-cancelled ">
                Canceled
              </span>
            </td>
            <td>12.02.2024</td>
            <td>$3.3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;

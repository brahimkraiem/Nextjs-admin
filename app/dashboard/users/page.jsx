"use client";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/pagination/pagination";
import Image from "next/image";
import Link from "next/link";

const Users = () => {
  return (
    <div className="p-5 bg-light-bg mt-5 rounded-md">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="bg-purple p-2.5 rounded-md">Add New</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">
              <div className="flex items-center gap-2.5">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">john@gmail.com</td>
            <td className="p-2.5">13.01.2022</td>
            <td className="p-2.5">Admin</td>
            <td className="p-2.5">active</td>
            <td className="p-2.5">
              <div className="flex gap-2.5">
                <Link href="/dashboard/users/test">
                  <button className="py-1.25 px-2.5 border-none cursor-pointer bg-teal-600 rounded-md">
                    View
                  </button>
                </Link>
                <button className="py-1.25 px-2.5 border-none cursor-pointer rounded-md bg-red-500 rounded-md">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};
export default Users;

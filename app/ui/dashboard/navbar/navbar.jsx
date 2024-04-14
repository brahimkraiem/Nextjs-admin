"use client";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center p-5 bg-[#182237]  ">
      <div>{pathname.split("/").pop()}</div>
      <div className="flex items-center">
        <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-custom">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-"
          />
        </div>
        <div className="flex gap-5 ml-2.5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

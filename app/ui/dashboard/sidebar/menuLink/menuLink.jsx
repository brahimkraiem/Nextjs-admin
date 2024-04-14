"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <Link
      className={`flex items-center gap-2.5 my-2.5 mx-0 hover:bg-[#2e374a] p-5 rounded-custom ${
        pathname === item.path && "bg-[#2e374a]"
      } `}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
export default MenuLink;

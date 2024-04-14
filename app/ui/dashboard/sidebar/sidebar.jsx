import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className="sticky top-2.5">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar.png"
          atl="avatar"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-bold">Brahim kraiem</span>
          <span className="text-xs text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map(({ title, list }) => (
          <li key={title}>
            <span className="text-xs text-[#b7bac1]">{title}</span>
            {list.map((item) => (
              <MenuLink item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex p-5 my-1.25 mx-0 items-center gap-2.5 rounded-custom cursor-pointer hover:bg-[#2e374a] w-full">
        <MdLogout /> Logout
      </button>
    </div>
  );
};
export default Sidebar;

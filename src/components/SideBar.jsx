import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Squares2X2Icon,
  CubeIcon,
  FolderIcon,
  TagIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/", icon: Squares2X2Icon },
  { name: "Products", href: "/Products", icon: CubeIcon },
  { name: "Categories", href: "/Categories", icon: FolderIcon },
  { name: "Orders", href: "/Orders", icon: TagIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 relative">
        <h1
          className={`text-xl font-bold ${
            collapsed ? "opacity-0 h-8" : "opacity-100"
          }`}
        >
          <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
            J
          </span>
          <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
            B
          </span>{" "}
          e
          <span
            className={`text-red-400 font-thin border-b-3 border-b-red-800 ${
              collapsed ? "hidden" : "opacity-100"
            }`}
          >
            S{" "}
            <span
              className={`text-white border-b-3 border-b-blue-800 ${
                collapsed ? "hidden" : "opacity-100"
              }`}
            >
              hop🛒
            </span>
          </span>
        </h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={` text-gray-400 hover:text-white ${
            collapsed ? "absolute left-auto ml-2" : ""
          }`}
        >
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-blue-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-blue-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-4 space-y-6">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-blue-400"
          >
            <item.icon
              className={`${collapsed ? "w-6 h-6" : "w-6 h-6 mr-3"}`}
            />
            {!collapsed && item.name}
          </a>
        ))}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-2 py-2 text-sm font-medium rounded-md hover:bg-red-500 text-left"
        >
          <ArrowRightStartOnRectangleIcon
            className={`${collapsed ? "w-6 h-6" : "w-6 h-6 mr-3"}`}
          />
          {!collapsed && "Logout"}
        </button>
      </nav>
    </div>
  );
}

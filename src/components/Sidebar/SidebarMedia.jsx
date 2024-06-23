import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronCompactUp, BsChevronDown } from "react-icons/bs";

const SidebarMedia = ({ title, sidebarStyle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      name: "Iklan",
      link: "/media_promosi/iklan",
    },
    {
      name: "Banner",
      link: "/media_promosi/banner",
    },
    {
      name: "Leaflet",
      link: "/media_promosi/leaflet",
    },
    {
      name: "Baliho",
      link: "/media_promosi/baliho",
    },
    {
      name: "Poster",
      link: "/media_promosi/poster",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-white my-10 border rounded-xl mx-10  dark:bg-gray-900 dark:text-white duration-200 sidebar-wrapper ${
        isSidebarOpen ? "" : "closed"
      } lg:border-r-2 border-b-2 lg:border-b-2  border-gray-300  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)] `}
    >
      <div className={`bg-white dark:bg-gray-900 w-64 mx-6 flex flex-col h-full py-4 ${sidebarStyle}`}>
        <div className={` flex justify-between items-center px-4 ${!isSidebarOpen ? "ml-0" : ""}`}>
          <div className="text-2xl font-bold mb-2 mx-auto">{title}</div>
        </div>
        <div className={` dark:bg-gray-900 transition-all duration-300 ${isSidebarOpen ? "" : "hidden"} ${isSidebarOpen ? "bg-white" : "bg-gray-800"} ${!isSidebarOpen ? "-ml-64 " : ""}`}>
          <ul className="text-lg">
            {menuItems.map((menuItem, index) => (
              <li key={index} className={`px-4 my-6 py-2 ${location.pathname === menuItem.link ? "bg-blue-400 rounded-lg dark:bg-gray-700" : "hover:bg-blue-400  hover:rounded-lg dark:hover:bg-gray-700 hover:text-white"}`}>
                <Link to={menuItem.link} className={`block ${location.pathname === menuItem.link ? "text-white ml-20 font-semibold dark:text-gray-200" : "text-gray-600 hover:text-white hover:font-semibold ml-20  dark:text-white"}`}>
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SidebarMedia.defaultProps = {
  title: "Media Promosi",
  sidebarStyle: "", // Add additional CSS classes here
};

export default SidebarMedia;

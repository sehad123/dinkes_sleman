import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronCompactUp, BsChevronDown } from "react-icons/bs";

const SidebarMenu = ({ title, sidebarStyle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      name: "Visi dan Misi",
      link: "/profil/visi_misi",
    },
    {
      name: "Struktur Organisasi",
      link: "/profil/organisasi",
    },
    {
      name: "Tugas dan Fungsi",
      link: "/profil/tugas_fungsi",
    },
    {
      name: "Dasar Hukum",
      link: "/profil/dasar_hukum",
    },
    {
      name: "Profil Kadinkes",
      link: "/profil/profil_kadinkes",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-white mt-10 mb-2 border rounded-xl mx-10  dark:bg-gray-900 dark:text-white duration-200 sidebar-wrapper ${
        isSidebarOpen ? "" : "closed"
      } lg:border-r-2 border-b-2 lg:border-b-2  border-gray-300  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)] `}
    >
      <div className={`bg-white dark:bg-gray-900 w-64 mx-6 flex flex-col h-full py-4  ${sidebarStyle}`}>
        <div className={` flex justify-between items-center px-4 mb-4 ${!isSidebarOpen ? "ml-0" : ""}`}>
          <div className="text-3xl  font-bold mx-auto ">{title}</div>

          {/* <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-400 focus:outline-none">
            {isSidebarOpen ? <BsChevronCompactUp /> : <BsChevronDown />}
          </button> */}
        </div>
        <div className={` dark:bg-gray-900 transition-all duration-300 ${isSidebarOpen ? "" : "hidden"} ${isSidebarOpen ? "bg-white" : "bg-gray-800"} ${!isSidebarOpen ? "-ml-64 " : ""}`}>
          <ul className="text-lg">
            {menuItems.map((menuItem, index) => (
              <li key={index} className={`px-4 my-6 py-2 ${location.pathname === menuItem.link ? "bg-blue-400 rounded-lg dark:bg-gray-400 " : "hover:bg-blue-400  hover:rounded-lg dark:hover:bg-gray-400 hover:text-white"}`}>
                <Link to={menuItem.link} className={`block ${location.pathname === menuItem.link ? "text-white dark:text-white font-semibold dark:text-gray-200" : "text-gray-600 hover:text-white hover:font-semibold  dark:text-white"}`}>
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

SidebarMenu.defaultProps = {
  title: "Profil",
  sidebarStyle: "", // Add additional CSS classes here
};

export default SidebarMenu;

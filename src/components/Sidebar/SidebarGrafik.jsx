import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const SidebarInfo = ({ title, sidebarStyle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // Menyimpan menu dropdown yang sedang dihover
  const [isHoveredSubMenu, setIsHoveredSubMenu] = useState(false); // Menyimpan status mouse di atas submenu
  const location = useLocation();

  const menuItems = [
    {
      name: "Piramida Penduduk",
      link: "/infografis/piramida",
    },
    {
      name: "Capaian TB ",
      link: "/infografis/batang",
    },

    {
      name: "Angka Kematian Ibu ",
      link: "/infografis/garis1",
    },

    {
      name: "Penderita Hipertensi",
      link: "/infografis/garis2",
    },
    {
      name: "Penderita Diabetes Melitus",
      link: "/infografis/garis3",
    },
    {
      name: "Stunting ",
      link: "/infografis/garis4",
    },
    {
      name: "Capaian Imunisasi ",
      link: "/infografis/tabel",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`my-10 lg:h-[500px] h-[500px]  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)] ${
        isSidebarOpen ? "" : "closed"
      } lg:border-r-2 border-b-2 lg:border-b-2  border-gray-300  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)] `}
    >
      {" "}
      <div className={`bg-white dark:bg-gray-900 w-64 mx-6 flex flex-col h-full py-4 ${sidebarStyle}`}>
        <div className={` flex justify-between items-center px-4 mb-2 ${!isSidebarOpen ? "ml-0" : ""}`}>
          <div className="text-2xl font-bold mx-auto">{title}</div>
        </div>
        <div className={` dark:bg-gray-900 transition-all duration-300 ${isSidebarOpen ? "" : "hidden"} ${isSidebarOpen ? "bg-white" : "bg-gray-800"} ${!isSidebarOpen ? "-ml-64 " : ""}`}>
          <ul className="text-lg mr-2">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`relative px-2 my-4 py-2 ${location.pathname === menuItem.link ? "bg-blue-400 rounded-lg dark:bg-gray-700" : "hover:bg-blue-400 hover:rounded-lg dark:hover:bg-gray-700"}`}
                onMouseEnter={() => setHoveredDropdown(menuItem.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link to={menuItem.link} className={`block ${location.pathname === menuItem.link ? "text-white font-semibold dark:text-gray-200" : "text-gray-600 hover:text-white dark:text-gray-400"}`}>
                  {menuItem.name}
                  {menuItem.dropdown && <BsChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
SidebarInfo.defaultProps = {
  title: "Data Infografis",
  sidebarStyle: "", // Add additional CSS classes here
};

export default SidebarInfo;

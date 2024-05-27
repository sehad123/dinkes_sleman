import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const SidebarUnduh = ({ title, sidebarStyle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // Menyimpan menu dropdown yang sedang dihover
  const [isHoveredSubMenu, setIsHoveredSubMenu] = useState(false); // Menyimpan status mouse di atas submenu
  const location = useLocation();

  const menuItems = [
    {
      name: "Laporan Tahunan",
      link: "/unduh/laporan_tahunan",
    },
    {
      name: "Bahan Pengembangan",
      link: "/unduh/##",
      dropdown: [
        {
          name: "Desa Siaga Aktif",
          link: "/unduh/siaga_aktif",
        },
        {
          name: "Perilaku Hidup Bersih dan Sehat",
          link: "/unduh/phbs",
        },
        {
          name: "Saka Bakti Husada",
          link: "/unduh/bakti_husada",
        },
        {
          name: "Kawasan Tanpa Rokok",
          link: "/unduh/ktr",
        },
        {
          name: "Sanitasi",
          link: "/unduh/sanitasi",
        },
      ],
    },
    {
      name: "Dokumen Kebijakan Germas",
      link: "/unduh/germas",
    },
    {
      name: "Penanggulangan Stunting",
      link: "/unduh/stunting",
    },
    {
      name: "Pengembangan UKS",
      link: "/unduh/uks",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`pb-[40px] dark:pb-[20px] bg-white dark:bg-gray-900 dark:text-white duration-200 sidebar-wrapper ${isSidebarOpen ? "" : "closed"} lg:border-r-2 border-b-2 lg:border-b-0 border-gray-300 `}>
      <div className={`bg-white dark:bg-gray-800 w-64 ml-10 flex flex-col h-full py-4  ${sidebarStyle}`}>
        <div className={`flex justify-between items-center px-4 mb-4 ${!isSidebarOpen ? "ml-0" : ""}`}>
          <div className="text-3xl mx-auto font-semibold">{title}</div>
          {/* <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-400 focus:outline-none">
            {isSidebarOpen ? <BsChevronCompactUp /> : <BsChevronDown />}
          </button> */}
        </div>
        <div className={` dark:bg-gray-900 transition-all duration-300 ${isSidebarOpen ? "" : "hidden"} ${isSidebarOpen ? "bg-white" : "bg-gray-800"} ${!isSidebarOpen ? "-ml-64 " : ""}`}>
          <ul className="text-lg mr-5">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`relative px-4 my-6 py-2 ${location.pathname === menuItem.link ? "bg-gray-300 rounded-lg dark:bg-gray-700" : "hover:bg-gray-300 hover:rounded-lg dark:hover:bg-gray-700"}`}
                onMouseEnter={() => setHoveredDropdown(menuItem.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link to={menuItem.link} className={`block ${location.pathname === menuItem.link ? "text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>
                  {menuItem.name}
                  {menuItem.dropdown && <BsChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
                </Link>
                {menuItem.dropdown && (hoveredDropdown === menuItem.name || isHoveredSubMenu) && (
                  <ul
                    className="absolute top-0 left-full w-max mt-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg py-1"
                    onMouseEnter={() => setIsHoveredSubMenu(true)}
                    onMouseLeave={() => setIsHoveredSubMenu(false)}
                  >
                    {menuItem.dropdown.map((submenuItem, submenuIndex) => (
                      <li key={submenuIndex} className="px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
                        <Link to={submenuItem.link} className={`block ${location.pathname === submenuItem.link ? "text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>
                          {submenuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SidebarUnduh.defaultProps = {
  title: "Unduh",
  sidebarStyle: "", // Add additional CSS classes here
};

export default SidebarUnduh;

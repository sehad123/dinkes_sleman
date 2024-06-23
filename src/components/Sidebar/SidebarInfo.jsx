import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const SidebarInfo = ({ title, sidebarStyle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [isHoveredSubMenu, setIsHoveredSubMenu] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Indikator Kinerja Utama", link: "/setiap_saat/iku" },
    {
      name: "Laporan",
      link: "#",
      dropdown: [
        { name: "Laporan Tahunan", link: "/setiap_saat/laporan_tahunan" },
        { name: "Laporan Kinerja", link: "/setiap_saat/lkjp" },
      ],
    },
    {
      name: "Layanan",
      link: "#",
      dropdown: [
        { name: "Standar Pelayanan Minimal", link: "/setiap_saat/spm" },
        { name: "Perjanjian Kinerja", link: "/setiap_saat/pk" },
      ],
    },
    { name: "Profil", link: "/setiap_saat/status" },
    {
      name: "Rencana",
      link: "#",
      dropdown: [
        { name: "Rencana Aksi", link: "/setiap_saat/ra" },
        { name: "Rencana Kerja Perangkat Daerah", link: "/setiap_saat/renja" },
        { name: "Rencana Strategis", link: "/setiap_saat/renstra" },
      ],
    },
    { name: "Peraturan Bupati", link: "/setiap_saat/perbup" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-white mt-10 border rounded-xl mx-10 dark:bg-gray-900 dark:text-white duration-200 sidebar-wrapper ${
        isSidebarOpen ? "" : "closed"
      } lg:border-r-2 border-b-2 lg:border-b-2 border-gray-300 drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]`}
    >
      <div className={`bg-white dark:bg-gray-900 w-64 mx-6 flex flex-col h-full py-4 ${sidebarStyle}`}>
        <div className={`flex justify-between items-center px-4 mb-2 ${!isSidebarOpen ? "ml-0" : ""}`}>
          <div className="text-2xl font-bold mx-auto">{title}</div>
        </div>
        <div className={`dark:bg-gray-900 transition-all duration-300 ${isSidebarOpen ? "" : "hidden"} ${isSidebarOpen ? "bg-white" : "bg-gray-800"} ${!isSidebarOpen ? "-ml-64" : ""}`}>
          <ul className="text-lg mr-5">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`relative px-4 py-2 my-6 ${location.pathname === menuItem.link ? "bg-blue-400 rounded-lg dark:bg-gray-700" : "hover:bg-blue-400 hover:font-semibold hover:rounded-lg dark:hover:bg-gray-700"}`}
                onMouseEnter={() => setHoveredDropdown(index)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  to={menuItem.link}
                  className={`block ${location.pathname === menuItem.link ? "text-white hover:text-white hover:font-semibold dark:hover:text-white font-semibold dark:text-gray-200" : "text-gray-600 hover:text-white dark:text-gray-400"}`}
                >
                  {menuItem.name}
                  {menuItem.dropdown && <BsChevronDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-200 ${hoveredDropdown === index ? "rotate-180" : ""}`} />}
                </Link>
                {menuItem.dropdown && hoveredDropdown === index && (
                  <ul className="mt-2 bg-white dark:bg-gray-800 border border-blue-400 dark:border-gray-600 rounded-lg shadow-lg py-1" onMouseEnter={() => setIsHoveredSubMenu(true)} onMouseLeave={() => setIsHoveredSubMenu(false)}>
                    {menuItem.dropdown.map((submenuItem, submenuIndex) => (
                      <li key={submenuIndex} className="px-4 py-2 hover:bg-gray-300 hover:rounded-lg">
                        <Link to={submenuItem.link} className={`block ${location.pathname === submenuItem.link ? "text-gray-500 dark:text-gray-200" : "text-gray-500 dark:text-gray-400"}`}>
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

SidebarInfo.defaultProps = {
  title: "Info Setiap Saat",
  sidebarStyle: "",
};

export default SidebarInfo;

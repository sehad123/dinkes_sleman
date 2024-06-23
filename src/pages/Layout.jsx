import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SidebarMenu from "../components/Sidebar/SidebarProfil"; // Import SidebarMenu
import SidebarUnduh from "../components/Sidebar/SidebarUnduh"; // Import SidebarMenu
import SidebarInfo from "../components/Sidebar/SidebarInfo"; // Import SidebarMenu
import SidebarMedia from "../components/Sidebar/SidebarMedia"; // Import SidebarMenu
import SidebarGrafik from "../components/Sidebar/SidebarGrafik"; // Import SidebarMenu
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarUnduhOpen, setIsSidebarUnduhOpen] = useState(true); // State to track sidebar unduh
  const [isSidebarInfoOpen, setIsSidebarInfoOpen] = useState(true); // State to track sidebar info
  const [isSidebarMediaOpen, setIsSidebarMediaOpen] = useState(true); // State to track sidebar media
  const [isSidebarGrafikOpen, setIsSidebarGrafikOpen] = useState(true); // State to track sidebar media

  // Check if current location is a profil page
  const isProfilPage = location.pathname.includes("/profil");
  // Check if current location is an unduh page
  const isUnduhPage = location.pathname.includes("/unduh");
  // Check if current location is an info page
  const isInfoPage = location.pathname.includes("/setiap_saat");
  // Check if current location is a media page
  const isMediaPage = location.pathname.includes("/media");
  // infografis
  const isGrafikPage = location.pathname.includes("/infografis");

  // profil
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to toggle sidebar unduh
  const toggleSidebarUnduh = () => {
    setIsSidebarUnduhOpen(!isSidebarUnduhOpen);
  };

  // Function to toggle sidebar info
  const toggleSidebarInfo = () => {
    setIsSidebarInfoOpen(!isSidebarInfoOpen);
  };

  // Function to toggle sidebar media
  const toggleSidebarMedia = () => {
    setIsSidebarMediaOpen(!isSidebarMediaOpen);
  };
  // Function to toggle sidebar grafuk
  const toggleSidebarGrafik = () => {
    setIsSidebarGrafikOpen(!isSidebarGrafikOpen);
  };

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col lg:items-start items-center md:flex-row">
        {/* Conditional rendering of SidebarMenu */}
        {isSidebarOpen && isProfilPage && <SidebarMenu />}
        {isSidebarUnduhOpen && isUnduhPage && <SidebarUnduh />}
        {isSidebarInfoOpen && isInfoPage && <SidebarInfo />}
        {isSidebarMediaOpen && isMediaPage && <SidebarMedia />}
        {isSidebarGrafikOpen && isGrafikPage && <SidebarGrafik />}
        <div className="flex-grow">
          <Outlet />
        </div>
        {/* Conditionally rendering sidebar toggle buttons */}
        {/* Fixed inline styles to adjust the position on smaller screens */}
        {isProfilPage && (
          <div className={`w-[10px] absolute top-[30px] ${!isSidebarOpen ? "left-0 mt-[100px]" : "lg:left-[290px] top-[460px] left-[330px]"} transition-all duration-300`}>
            <button onClick={toggleSidebar} className="lg:hidden text-4xl bg-gray-200 dark:bg-gray-800">
              {isSidebarOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
            </button>
          </div>
        )}
        {isUnduhPage && (
          <div className={`w-[10px] absolute top-[30px] ${!isSidebarUnduhOpen ? "left-0 mt-[100px]" : "lg:left-[290px] top-[480px] left-[330px]"} transition-all duration-300`}>
            <button onClick={toggleSidebarUnduh} className="lg:hidden md:flex text-4xl bg-gray-200 dark:bg-gray-800">
              {isSidebarUnduhOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
            </button>
          </div>
        )}
        {isGrafikPage && (
          <div className={`w-[10px] absolute top-[30px] ${!isSidebarGrafikOpen ? "left-0 mt-[100px]" : "lg:left-[290px] top-[500px] left-[330px]"} transition-all duration-300`}>
            <button onClick={toggleSidebarGrafik} className="lg:hidden md:flex bg-gray-200 text-4xl  dark:bg-gray-800 ">
              {isSidebarGrafikOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
            </button>
          </div>
        )}
        {isInfoPage && (
          <div className={`w-[10px] absolute top-[30px] ${!isSidebarInfoOpen ? "left-0 mt-[100px]" : "lg:left-[290px] top-[500px] left-[330px]"} transition-all duration-300`}>
            <button onClick={toggleSidebarInfo} className="lg:hidden md:flex text-4xl bg-gray-200 dark:bg-gray-800">
              {isSidebarInfoOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
            </button>
          </div>
        )}
        {isMediaPage && (
          <div className={`w-[10px] absolute top-[30px] ${!isSidebarMediaOpen ? "left-0 mt-[100px]" : "lg:left-[290px] top-[450px] left-[330px]"} transition-all duration-300`}>
            <button onClick={toggleSidebarMedia} className="lg:hidden md:flex bg-gray-200 text-4xl dark:bg-gray-800">
              {isSidebarMediaOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

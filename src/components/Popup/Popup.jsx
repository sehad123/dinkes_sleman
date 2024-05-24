import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../assets/logo.jpeg";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-70 blur-md"></div> {/* Blur background */}
          <div data-aos="fade-up" className="bg-gray-200 dark:bg-gray-900 rounded-md shadow-lg px-10 pt-5 max-w-sm relative z-10">
            <div className="grid grid-cols-1">
              <div>
                <h1 className="text-xl font-bold mt-4 pl-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Selamat Datang di Website
                </h1>
              </div>
              <div className="grid grid-cols-2 justify-start mt-6">
                <img src={Logo} alt="Logo" className="w-20 ml-5 mb-6 lg:mb-0" />
                <span className="-ml-10 pb-4 lg:pb-0 w-full text-xl mb-6 sm:mb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Dinas Kesehatan Sleman
                </span>
              </div>
              <IoCloseOutline className="absolute top-0 right-0 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setOrderPopup(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

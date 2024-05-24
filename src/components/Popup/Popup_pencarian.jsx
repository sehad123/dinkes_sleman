import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../assets/logo.jpeg";

const Popup_pencarian = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="bg-opacity-70 fixed top-0 left-0 h-full w-full flex justify-center items-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-70 blur-md"></div> {/* Blur background */}
          <div data-aos="fade-up" className="bg-gray-200 dark:bg-gray-900 rounded-md shadow-lg p-10 pt-5 max-w-sm relative z-10">
            <div className="">
              <div>
                <h1 className="text-xl font-bold pl-4 mt-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Pencarian tidak ditemukan
                </h1>
              </div>

              <IoCloseOutline className="absolute top-0 right-0 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setOrderPopup(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup_pencarian;

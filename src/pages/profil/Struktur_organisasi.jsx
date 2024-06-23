import React, { useEffect } from "react";
import Image from "../../assets/organisasi.png";

const StrukturOrganisasi = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);

  return (
    <div
      className="my-10 lg:h-[440px] h-[540px] lg:w-[90%] w-screen  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center -mt-7  w-max h-auto mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Struktur Organisasi
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer mr-10">
              <img src={Image} className="w-[750px] h-[350px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;

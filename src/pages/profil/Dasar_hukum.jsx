import React from "react";
import Image from "../../assets/dasar_hukum.png";

const Dasar_hukum = () => {
  return (
    <div className="lg:h-[500px] bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="py-10 dark:py-20">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-4 max-w-[600px] lg:ml-42 mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Dasar Hukum
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className=" cursor-pointer lg:ml-24">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dasar_hukum;

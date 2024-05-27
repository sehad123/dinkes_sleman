import React from "react";
import Image from "../../assets/organisasi.png";

const StrukturOrganisasi = () => {
  return (
    <div className="lg:h-[500px] lg:translate-x-0 translate-x-16 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Struktur Organisasi
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-12">
              <img src={Image} className="w-[750px] h-[350px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;

import React from "react";
import Image from "../../assets/hero/g5.png";

const Artikel5 = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Selamat Hari Raya Idul Fitri 1445 H{" "}
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image} className="w-[750px] h-[500px]" />
            </div>
          </div>
          <div className="container lg:px-48">
            <p data-aos="zoom-in">Kepala Dinas Kesehatan Kabupaten Sleman beserta seluruh jajaran menghaturkan Selamat Hari Raya Idul Fitri 1445 H. Mohon maaf lahir dan batin semoga kita senantiasa dilimpahkan keberkahan dan kesehatan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel5;

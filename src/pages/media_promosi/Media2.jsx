import React, { useEffect } from "react";
import Image from "../../assets/media_promosi/pr1.jpg";

const Media2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div className="lg:h-[500px] lg:-ml-20 lg:w-[1000px] bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 lg:ml-64 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Candak Mas Covid
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <img src={Image} className="w-[750px] h-auto" />
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-52">
              <iframe
                width="100%"
                height="503"
                src="https://www.youtube.com/embed/sfSThkbQ73k"
                title="CANDAK MAS COVID | Cari dan Kendalikan Masalah COVID 19"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="lg:w-[800px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media2;

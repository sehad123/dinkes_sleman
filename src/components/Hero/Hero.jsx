import React from "react";
import Image2 from "../../assets/hero/g4.jpeg";
import Image1 from "../../assets/hero/g5.png";
import Image3 from "../../assets/hero/g6.jpeg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "Tingkatkan Kapasitas Puskesmas, Dinkes Sleman Selenggarakan Orientasi Integrasi Pelayanan Kesehatan Primer",
    description: "Senin (22/4) Kepala Dinas Kesehatan Kabupaten Sleman, dr. Cahya Purnama, M.Kes membuka secara resmi Orientasi Integrasi Pelayanan Kesehatan Primer bagi...",
    link: "/artikel4",
  },
  {
    id: 2,
    img: Image1,
    title: "Selamat Hari Raya Idul Fitri 1445 H",
    description: "Kepala Dinas Kesehatan Kabupaten Sleman beserta seluruh jajaran menghaturkan Selamat Hari Raya Idul Fitri 1445 H. Mohon maaf lahir dan...",
    link: "/artikel5",
  },
  {
    id: 3,
    img: Image3,
    title: "Dialog Interaktif Tetap Sehat dan Bugar Saat Lebaran",
    description: "Mudik pada Hari Raya Idul Fitri merupakan fenomena yang umumnya terjadi di Indonesia. Kabupaten Sleman menjadi salah satu tujuan mudik...",
    link: "/artikel6",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden lg:w-[1000px] w-[350px] lg:ml-40 mx-auto lg:h-[370px] h-[700px] bg-gray-100 lg:border-4 border-8 mt-10 dark:mt-0 rounded-xl flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]">
      {/* background pattern */}
      <div className="h-[600px] w-[600px] bg-gray-200 dark:bg-gray-700 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 hover:cursor-pointer">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mx-3">
                {/* text content section */}
                <div className="flex flex-col justify-center mb-10 lg:w-[100%] gap-4 pt-1 mx-6 lg:mt-6 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="sm:text-xl lg:text-2xl mb-6 mt-1 font-bold">
                    <Link to={data.link} className=" hover:underline">
                      {data.title}
                    </Link>
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="lg:text-lg sm:text-lg">
                    {data.description}
                  </p>
                  <div data-aos="fade-up" className="mt-3" data-aos-duration="500" data-aos-delay="300">
                    <Link to={data.link} className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Lihat Detail
                    </Link>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 lg:ml-52 lg:mt-4">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <Link to={data.link}>
                      <img src={data.img} alt="" className="w-[300px] h-[300px] mt-10 lg:mt-20 mb-2 lg:mb-32 sm:h-[300px] sm:w-[300px] sm:scale-105 lg:scale-120 object-cover object-center mx-auto" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

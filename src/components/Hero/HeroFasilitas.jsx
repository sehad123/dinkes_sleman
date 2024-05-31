import React, { useState } from "react";
import Image1 from "../../assets/hero/ambulance.jpeg";
import Image2 from "../../assets/hero/bed.jpeg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Kapasitas Bed Rumah Sakit",
    link: "/artikel1",
  },
  {
    id: 2,
    img: Image2,
    title: "Sleman Emergency Service",
    link: "/artikel2", // tambahkan link
  },
];

const HeroFasilitas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative container overflow-hidden lg:w-[780px] w-[430px] lg:h-[350px] h-[300px] bg-white lg:border-4 border-8 mt-10 dark:mt-0 rounded-xl flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]">
      {/* background pattern */}
      <div className="lg:h-[600px] lg:w-[450px] w-[300px] h-[500px] absolute -top-1/2 -right-40 rounded-full rotate-45 -z-[8]" style={{ backgroundImage: `url(${ImageList[currentSlide].img})`, backgroundSize: "initial" }}></div>
      {/* HeroFasilitas section */}
      <div className="container pb-8 sm:pb-0 hover:cursor-pointer">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mx-3">
                {/* text content section */}
                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="sm:text-xl w-[350px]  lg:text-4xl -translate-x-10 font-bold">
                  <Link to={data.link} className="hover:underline">
                    {data.title}
                  </Link>
                </h1>
                {/* Removed image section */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroFasilitas;

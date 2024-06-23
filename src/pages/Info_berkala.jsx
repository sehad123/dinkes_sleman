import React from "react";
import kesehatan1 from "../assets/berkala/b1.jpg";
import kesehatan2 from "../assets/berkala/b2.jpg";
import kesehatan3 from "../assets/berkala/b3.jpg";
import kesehatan4 from "../assets/berkala/b4.jpg";
import kesehatan5 from "../assets/berkala/b5.jpg";
import kesehatan6 from "../assets/berkala/b6.png";
import kesehatan7 from "../assets/berkala/b7.jpg";
import Lt1 from "../assets/berkala/t1.jpg";
import Lt2 from "../assets/berkala/t2.jpg";
import germas1 from "../assets/berkala/germas1.png";
import germas2 from "../assets/berkala/germas2.png";
import germas3 from "../assets/berkala/germas3.png";
import germas4 from "../assets/berkala/germas4.png";
import lkjp1 from "../assets/berkala/lkjp1.jpg";
import lkjp2 from "../assets/berkala/lkjp2.jpg";
import lsk1 from "../assets/berkala/lsk1.jpg";
import lsk2 from "../assets/berkala/lsk2.jpg";
import Sertif from "../assets/berkala/sertifikat.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const KesehatanData = [
  {
    img: kesehatan1,
    link: "",
  },
  {
    img: kesehatan2,
    link: "",
  },
  {
    img: kesehatan3,
    link: "",
  },
  {
    img: kesehatan4,
    link: "",
  },
  {
    img: kesehatan5,
    link: "",
  },
  {
    img: kesehatan6,
    link: "",
  },
  {
    img: kesehatan7,
    link: "",
  },
];

const GermasData = [
  {
    img: germas1,
    link: "",
  },
  {
    img: germas2,
    link: "",
  },
  {
    img: germas3,
    link: "",
  },
  {
    img: germas4,
    link: "",
  },
];
const LKJPData = [
  {
    img: lkjp1,
    link: "",
  },
  {
    img: lkjp2,
    link: "",
  },
];
const LSKData = [
  {
    img: lsk1,
    link: "",
  },
  {
    img: lsk2,
    link: "",
  },
];
const LaporanTahunan = [
  {
    img: Lt1,
    link: "",
  },
  {
    img: Lt2,
    link: "",
  },
];

const Info_berkala = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" container dark:rounded-xl dark:mb-10  bg-white w-screen dark:bg-gray-900 dark:mt-10 dark:text-white duration-200">
      <div className="py-10">
        <div className="">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] lg:mx-auto ml-10">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Informasi Berkala
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in" className="lg:pl-16 px-16 lg:mx-auto  ">
            <p className="text-center font-bold text-lg">Profil Kesehatan</p>
            <Slider {...settings}>
              {KesehatanData.map((data, index) => (
                <Link key={index} to={data.link}>
                  <div className="my-6 cursor-pointer">
                    <img src={data.img} alt="" className="w-[300px] h-[300px]" />
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container grid grid-cols-1 pl-5 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <p className="font-bold text-lg text-center">Laporan Tahunan</p>
              <div data-aos="zoom-in" className="flex flex-wrap lg:justify-start ml-6 lg:ml-0">
                {LaporanTahunan.map((data, index) => (
                  <Link key={index} to={data.link} className="w-full md:w-auto">
                    <div className="my-6 cursor-pointer">
                      <img src={data.img} alt="" className="w-[250px] h-[300px] mx-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg text-center ">Laporan Kinerja Pemerintah (LKJP)</p>
              <div data-aos="zoom-in" className="flex flex-wrap lg:justify-start items-start ml-6 lg:ml-0 ">
                {LKJPData.map((data, index) => (
                  <Link key={index} to={data.link} className="w-full md:w-auto">
                    <div className="my-6 cursor-pointer">
                      <img src={data.img} alt="" className="w-[250px] h-[300px] mx-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:translate-x-80 lg:mt-20">
              <p className="font-bold text-lg text-center ">Laporan SPM Kesehatan</p>
              <div data-aos="zoom-in" className="flex flex-wrap justify-end ml-6 lg:ml-0">
                {LSKData.map((data, index) => (
                  <Link key={index} to={data.link} className="w-full md:w-auto">
                    <div className="my-6 cursor-pointer">
                      <img src={data.img} alt="" className="w-[250px] h-[300px] mx-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <div data-aos="zoom-in" className="px-16 ml-6 lg:ml-0 ">
            <p className="text-center font-bold text-lg">Gerakan Masyarakat Hidup Sehat (GERMAS)</p>
            <Slider {...settings}>
              {GermasData.map((data, index) => (
                <Link key={index} to={data.link}>
                  <div className="my-6 cursor-pointer">
                    <img src={data.img} alt="" className="w-[300px] h-[300px]" />
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div data-aos="zoom-in">
            <div className="my-6 cursor-pointer lg:ml-48">
              <img src={Sertif} className="w-[750px] h-[500px]" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Info_berkala;

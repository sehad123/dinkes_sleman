import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/merta1.jpg";
import Image2 from "../assets/merta2.jpg";
import Image3 from "../assets/merta3.jpg";

const MertaData = [
  {
    img: Image1,
    link: "/merta1",
  },
  {
    img: Image2,
    link: "/merta2",
  },
  {
    img: Image3,
    link: "https://covidtracer.slemankab.go.id/dashboard2/",
  },
];
const Info_sertamerta = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 lg:w-[90%] lg:mx-auto">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto lg:flex justify-center">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Informasi Serta Merta
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in" className="grid lg:grid-cols-3 lg:flex justify-center ml-5">
            {MertaData.map((data, index) => (
              <Link key={index} to={data.link}>
                <div className="my-6 cursor-pointer mx-2">
                  <img src={data.img} alt="" className="lg:w-[350px] w-[250px] h-[300px]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_sertamerta;

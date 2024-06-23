import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image1 from "../../assets/slide/husada.png";
import Image2 from "../../assets/slide/lapor.jpg";
import Image3 from "../../assets/slide/grafik1.jpg";
import Image4 from "../../assets/slide/wolly.jpg";
const TestimonialData = [
  {
    img: Image3,
    link: "https://dinkes.slemankab.go.id/wp-content/uploads/2024/03/IKM-sem-2-2023.jpg",
  },

  {
    img: Image2,
    link: "https://lapor.slemankab.go.id",
  },
  {
    img: Image1,
    link: "/jendela_husada",
  },
  {
    img: Image4,
    link: "/wolly_nyoman",
  },
];

const Other = () => {
  return (
    <>
      <div className="text-center mt-20 lg:mb-2 mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Informasi Lainnya
        </h1>
        {/* Dropdown untuk memilih bulan */}
      </div>
      <div className=" container px-1 py-5 -mb-24 lg:-translate-x-24">
        <div data-aos="fade-up" className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Highlighted image */}
          <div className="lg:col-span-1 lg:w-[550px] lg:ml-40 w-[350px] lg:mt-6">
            <Link to={TestimonialData[0].link} className="block">
              <img src={TestimonialData[0].img} alt="" className="w-screen h-auto lg:max-h-[400px] rounded-lg mb-4" />
            </Link>
          </div>

          {/* Other images */}
          <div className="sm:col-span-1 lg:w-[400px] w-[350px] grid grid-cols-2 gap-4 lg:translate-x-40 lg:translate-y-10">
            {TestimonialData.slice(1).map((data, index) => (
              <div key={index} className="w-full relative">
                <Link to={data.link} className="block">
                  <img src={data.img} alt="" className={`w-[200px] h-auto rounded-lg mb-4 ${index === 2 ? " transform lg:-translate-y-52 -translate-y-44" : index === 1 ? "transform lg:translate-x-2" : ""}`} />{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;

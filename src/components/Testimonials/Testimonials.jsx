import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Image1 from "../../assets/slide/husada.png";
import Image2 from "../../assets/slide/lapor.jpg";
import Image3 from "../../assets/slide/grafik1.jpg";
import Image4 from "../../assets/slide/wolly.jpg";

const TestimonialData = [
  {
    img: Image1,
    link: "/jendela_husada",
  },
  {
    img: Image2,
    link: "https://lapor.slemankab.go.id",
  },
  {
    img: Image3,
    link: "https://dinkes.slemankab.go.id/wp-content/uploads/2024/03/IKM-sem-2-2023.jpg",
  },
  {
    img: Image4,
    link: "/wolly_nyoman",
  },
];

const Testimonials = () => {
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
    <div className="py-10">
      <div className="container lg:w-[1220px] w-[420px] lg:ml-16 -ml-10">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] ml-20 lg:mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Informasi Tambahan
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => (
              <Link key={index} to={data.link}>
                <div className="my-6 ml-20 lg:ml-0 cursor-pointer">
                  <img src={data.img} alt="" className="w-[350px] h-[300px]" />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

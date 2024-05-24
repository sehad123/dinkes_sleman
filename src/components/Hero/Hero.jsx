import React from "react";
import Image1 from "../../assets/hero/g1.jpeg";
import Image2 from "../../assets/hero/g2.png";
import Image3 from "../../assets/hero/g3.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Implementasikan PKAT, Dinkes Sleman Raih Apresiasi Kemenkes RI",
    description: "Sebagai wujud apresiasi atas penyelenggaraan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT), Dinas Kesehatan Kabupaten Sleman sukses raih penghargaan dari Kementerian Kesehatan...",
    link: "/artikel1", // tambahkan link
  },
  {
    id: 2,
    img: Image2,
    title: "Empat Tenaga Kesehatan Sleman Raih Juara Nakesdan Tingkat DIY Tahun 2024",
    description: "Prestasi membanggakan kembali diraih Tenaga Kesehatan Kabupaten Sleman pada tahun 2024. Sebanyak empat orang sabet Juara I Tenaga Kesehatan Teladan...",
    link: "/artikel2", // tambahkan link
  },
  {
    id: 3,
    img: Image3,
    title: "Simulasi Bencana dalam Peringatan Hari Kesiapsiagaan Bencana (HKB)",
    description: "Dinas Kesehatan Kabupaten Sleman menyelenggarakan simulasi bencana. Agenda ini merupakan bagian dalam mendukung Peringatan Hari Kesiapsiagaan Bencana di Daerah Istimewa...",
    link: "/artikel3", // tambahkan link
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
    <div className="relative container overflow-hidden w-[430px] lg:w-screen min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 hover:cursor-pointer">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mx-3">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 mx-6 mb-6 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="sm:text-xl lg:text-2xl mb-6 font-bold">
                    <a href={data.link} className=" hover:underline">
                      {data.title}
                    </a>
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="lg:text-xl sm:text-lg">
                    {data.description}
                  </p>
                  <div data-aos="fade-up" className="mt-6" data-aos-duration="500" data-aos-delay="300">
                    <a href={data.link} className=" sm:hidden bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Lihat Detail
                    </a>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <a href={data.link}>
                      <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto" />
                    </a>
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

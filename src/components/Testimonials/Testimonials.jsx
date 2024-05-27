// import React from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import Image1 from "../../assets/slide/husada.png";
// import Image2 from "../../assets/slide/lapor.jpg";
// import Image3 from "../../assets/slide/grafik1.jpg";
// import Image4 from "../../assets/slide/wolly.jpg";

// const TestimonialData = [
//   {
//     img: Image1,
//     link: "/jendela_husada",
//   },
//   {
//     img: Image2,
//     link: "https://lapor.slemankab.go.id",
//   },
//   {
//     img: Image3,
//     link: "https://dinkes.slemankab.go.id/wp-content/uploads/2024/03/IKM-sem-2-2023.jpg",
//   },
//   {
//     img: Image4,
//     link: "/wolly_nyoman",
//   },
// ];

// const Testimonials = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10">
//       <div className="container lg:w-[1220px] w-[420px] lg:ml-16 -ml-10">
//         {/* header section */}
//         <div className="text-center mb-10 max-w-[600px] ml-20 lg:mx-auto">
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Informasi Tambahan
//           </h1>
//         </div>

//         {/* Testimonial cards */}
//         <div data-aos="zoom-in">
//           <Slider {...settings}>
//             {TestimonialData.map((data, index) => (
//               <Link key={index} to={data.link}>
//                 <div className="my-6 ml-20 lg:ml-0 cursor-pointer">
//                   <img src={data.img} alt="" className="w-[350px] h-[300px]" />
//                 </div>
//               </Link>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image1 from "../../assets/slide/husada.png";
// import Image2 from "../../assets/slide/lapor.jpg";
// import Image3 from "../../assets/slide/grafik1.jpg";
// import Image4 from "../../assets/slide/wolly.jpg";
// const TestimonialData = [
//   {
//     img: Image3,
//     link: "https://dinkes.slemankab.go.id/wp-content/uploads/2024/03/IKM-sem-2-2023.jpg",
//   },

//   {
//     img: Image2,
//     link: "https://lapor.slemankab.go.id",
//   },
//   {
//     img: Image1,
//     link: "/jendela_husada",
//   },
//   {
//     img: Image4,
//     link: "/wolly_nyoman",
//   },
// ];

// const Other = () => {
//   return (
//     <>
//       <div className="text-center mt-20 max-w-[600px] mx-auto">
//         <h1 data-aos="fade-up" className="text-3xl font-bold">
//           Informasi Lainnya
//         </h1>
//         {/* Dropdown untuk memilih bulan */}
//       </div>
//       <div className="container mx-auto px-4 py-10 ">
//         <div data-aos="fade-up" className="container w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {TestimonialData.map((data, index) => (
//             <Link key={index} to={data.link}>
//               <div className="my-6 lg:ml-0 cursor-pointer">
//                 <img src={data.img} alt="" className="w-[300px] h-[250px]" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Other;

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
      <div className="container px-6 py-5 -mb-24 lg:-translate-x-24">
        <div data-aos="fade-up" className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Highlighted image */}
          <div className="lg:col-span-1 lg:w-[550px] lg:ml-44 w-[350px] lg:mt-6">
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

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import promosi1 from "../../assets/promosi/p1.jpg";
import promosi2 from "../../assets/promosi/p2.png";
import promosi3 from "../../assets/promosi/p3.jpg";
import promosi4 from "../../assets/promosi/p4.jpg";

const Poster = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);
  const PromosiData = [
    {
      img: promosi1,
      link: "/media1",
    },
    {
      img: promosi2,
      link: "/media2",
    },
    {
      img: promosi3,
      link: "/media3",
    },
    {
      img: promosi4,
      link: "/media4",
    },
  ];

  return (
    <div
      className="my-10 lg:h-[500px] lg:w-[90%] w-screen  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="max-w-5xl ml-5 px-4 sm:px-6 lg:px-8 lg:ml-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PromosiData.map((data, index) => (
            <Link key={index} to={data.link}>
              <div className="my-6 cursor-pointer">
                <img src={data.img} alt="" className="w-[300px] h-auto" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poster;

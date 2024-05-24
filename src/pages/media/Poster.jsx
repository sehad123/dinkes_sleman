import React from "react";
import { Link } from "react-router-dom";
import promosi1 from "../../assets/promosi/p1.jpg";
import promosi2 from "../../assets/promosi/p2.png";
import promosi3 from "../../assets/promosi/p3.jpg";
import promosi4 from "../../assets/promosi/p4.jpg";

const Poster = () => {
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
    <div className="lg:h-[500px] bg-white py-10 dark:bg-gray-900 dark:text-white duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-24">
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

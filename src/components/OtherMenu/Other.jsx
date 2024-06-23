import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faComputer, faDatabase, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Menu1 = [
  {
    name: "Sleman Whistleblower System",
    link: "https://inspektorat.slemankab.go.id/whistleblowersystem/",
    icon: faComputer,
  },
  {
    name: "Fasilitas Kesehatan",
    link: "/fasilitas_kesehatan",
    icon: faHeartPulse,
  },
  {
    name: "Media Promosi Kesehatan",
    link: "/media_promosi/iklan",
    icon: faHeartCirclePlus,
  },
  {
    name: "Data & Infografis",
    link: "/infografis/piramida",
    icon: faDatabase,
  },
];

const Other = () => {
  return (
    <>
      <div className=" text-center mt-16 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Layanan Lainnya
        </h1>
        {/* Dropdown untuk memilih bulan */}
      </div>

      <div className="container mx-auto px-4 py-20 ">
        <div data-aos="fade-up" className="container w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {Menu1.map((content, index) => (
            <Link key={index} to={content.link} className="text-lg">
              <div
                style={{ width: "220px" }}
                className=" dark:bg-gray-900 p-4 drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.5)] bg-white border-4 min-h-[250px] rounded-xl lg:w-1/4 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
              >
                <div data-aos="zoom-in" className="flex flex-col items-center text-xl text-center text-green-900 dark:text-white ">
                  <FontAwesomeIcon icon={content.icon} className="text-6xl mb-10" />
                  {content.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Other;

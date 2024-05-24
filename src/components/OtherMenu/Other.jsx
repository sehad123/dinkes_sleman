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
    name: "Data dan Infografis",
    link: "/infografis/piramida",
    icon: faDatabase,
  },
];

const Other = () => {
  return (
    <div className="container mx-auto px-4 py-20 ">
      <div data-aos="fade" className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {Menu1.map((content, index) => (
          <Link key={index} to={content.link} className="text-lg">
            <div className="p-4 bg-green-400 h-32 rounded-xl flex items-center justify-center hover:bg-green-600 cursor-pointer">
              <div data-aos="zoom-in" className="flex items-center">
                <FontAwesomeIcon icon={content.icon} className="text-3xl mr-6" />
                {content.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Other;

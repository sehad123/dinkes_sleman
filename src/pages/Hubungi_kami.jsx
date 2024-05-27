import React from "react";
import Image2 from "../assets/zona_integrasi.jpeg";
import Image from "../assets/dinkes.jpeg";

const Hubungi_kami = () => {
  return (
    <div className=" lg:translate-x-0 translate-x-16 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold">
              Hubungi Kami
            </h1>
          </div>

          {/* Dasar Hukum section */}
          <h1 data-aos="fade-up" className="text-lg mb-12 font-bold text-center">
            {" "}
            Kantor Dinas Kesehatan Kabupaten Sleman :
          </h1>
          <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            <div className="flex justify-center">
              <img src={Image} className="w-[300px] h-auto" />
            </div>
            <ol className="mr-20 my-2 w-1/1 lg:-translate-x-24 translate-x-7">
              <li className="mb-2 ">Alamat : Jalan Roro Jonggrang No. 6, Beran, Tridadi, Sleman, Yogyakarta 55511</li>
              <li className="mb-2 ">Telp : (0274) 868409</li>
              <li className="mb-2 ">Fax : (0274) 868945</li>
              <li className="mb-2 ">Website : http://www.dinkes.slemankab.go.id</li>
              <li className="mb-2 ">E-mail : dinkes@slemankab.go.id</li>
            </ol>
          </div>

          {/* header section */}
          {/* <div className="lg:ml-20 my-4 lg:w-max">
          <p data-aos="fade-up" className="text-sm">
            Permohonan terkait informasi publik dapat mengakses e-ppid,
            <a href="https://ppid.slemankab.go.id" className="text-blue-400 ml-2">
              silakan klik di sini
            </a>
          </p>
        </div>
        <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="cursor-pointer">
            <img src={Image2} className="w-[80%] h-auto ml-10 lg:ml-20" alt="Perjanjian Kesehatan" />
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hubungi_kami;

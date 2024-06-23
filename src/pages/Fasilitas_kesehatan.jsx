import React, { useEffect, useState } from "react";
import puskesmas from "../assets/puskesmas.jpg";
import puskesmas2 from "../assets/puskesmas2.jpg";
import ses from "../assets/ses.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rs from "../assets/rumahsakit.jpg";
import fasilitas from "../assets/fasilitas.jpg";
import {
  faHeartPulse,
  faComputer,
  faDatabase,
  faHeartCirclePlus,
  faPlus,
  faHeart,
  faHospital,
  faHospitalAlt,
  faAmbulance,
  faPlusCircle,
  faShield,
  faEye,
  faPerson,
  faKitMedical,
  faBookMedical,
  faMedkit,
  faHouseChimney,
  faHouseChimneyMedical,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";
import { faHospitalSymbol } from "@fortawesome/free-solid-svg-icons/faHospitalSymbol";
import HeroFasilitas from "../components/Hero/HeroFasilitas";

const Fasilitas_kesehatan = () => {
  const [puskesmasData, setPuskesmasData] = useState([]);
  const [rumahSakitData, setRumahSakitData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [itemsPerPage] = useState(5);
  const [itemsPerPage2] = useState(5);
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  useEffect(() => {
    // Data Puskesmas
    const puskesmas = [
      { id: 1, nama: "Puskesmas Condongcatur", lokasi: "Jl. Ring Road Utara, Condongcatur" },
      { id: 2, nama: "Puskesmas Maguwoharjo", lokasi: "Jl. Raya Maguwoharjo" },
      { id: 3, nama: "Puskesmas Gamping I", lokasi: "Jl. Wates Km 5, Ambarketawang" },
      { id: 4, nama: "Puskesmas Gamping II", lokasi: "Jl. Wates Km 8, Banyuraden" },
      { id: 5, nama: "Puskesmas Godean I", lokasi: "Jl. Janti, Sidoagung" },
      { id: 6, nama: "Puskesmas Godean II", lokasi: "Jl. Yogya-Wates Km 8, Sidokarto" },
      { id: 7, nama: "Puskesmas Mlati I", lokasi: "Jl. Pramuka, Sendangadi" },
      { id: 8, nama: "Puskesmas Mlati II", lokasi: "Jl. Magelang Km 7, Tlogoadi" },
      { id: 9, nama: "Puskesmas Moyudan", lokasi: "Jl. Godean Km 13, Sumbersari" },
      { id: 10, nama: "Puskesmas Ngaglik I", lokasi: "Jl. Palagan Tentara Pelajar Km 9,5" },
      { id: 11, nama: "Puskesmas Ngaglik II", lokasi: "Jl. Kaliurang Km 9,5, Sardonoharjo" },
      { id: 12, nama: "Puskesmas Ngemplak I", lokasi: "Jl. Yogya-Magelang Km 10, Bimomartani" },
      { id: 13, nama: "Puskesmas Ngemplak II", lokasi: "Jl. Yogya-Magelang Km 14, Umbulmartani" },
      { id: 14, nama: "Puskesmas Seyegan", lokasi: "Jl. Yogya-Magelang Km 16, Margomulyo" },
      { id: 15, nama: "Puskesmas Sleman", lokasi: "Jl. Magelang Km 11, Tridadi" },
      { id: 16, nama: "Puskesmas Tempel I", lokasi: "Jl. Yogya-Magelang Km 18, Banyurejo" },
      { id: 17, nama: "Puskesmas Tempel II", lokasi: "Jl. Yogya-Magelang Km 21, Margorejo" },
    ];

    const rumahSakit = [
      { nama: "RSUP Dr. Sardjito", lokasi: "Jl. Kesehatan, Senoloan, Sinduadi, Mlati" },
      { nama: "RS PKU Muhammadiyah Yogyakarta", lokasi: "Jl. Lingkar Barat, Tamantirto, Kasihan" },
      { nama: "RS Nur Hidayah", lokasi: "Jl. Bantul KM 8, Murten, Bandungan, Banguntapan" },
      { nama: "RS Bethesda Yogyakarta", lokasi: "Jl. Jend. Sudirman No.70, Bener, Tegalrejo" },
      { nama: "RS Panti Rapih", lokasi: "Jl. Panembahan Senopati No.16, Prawiromajan, Ngemplak" },
      { nama: "RS Bunda Yogyakarta", lokasi: "Jl. Kenari No.61, Semaki, Umbulharjo" },
      { nama: "RS Ibu dan Anak Sadewa", lokasi: "Jl. Magelang KM 12, Mlati, Sleman" },
      { nama: "RS Anak dan Bunda Harapan Kita", lokasi: "Jl. Magelang KM 12.8, Mlati, Sleman" },
      { nama: "RS Umum Sariningsih", lokasi: "Jl. Kaliurang KM 7, Ngaglik, Sleman" },
      { nama: "RS Akademik UGM", lokasi: "Jl. Mayjen Sutoyo, Sleman" },
      { nama: "RS Aisyiyah PKU Muhammadiyah Yogyakarta", lokasi: "Jl. KH Ahmad Dahlan No.20, Yogyakarta" },
      { nama: "RS Mata 'Dr. Yap' Yogyakarta", lokasi: "Jl. Cik Di Tiro No.12, Terban, Gondokusuman, Yogyakarta" },
      { nama: "RS Grandmed Lubuk Linggau", lokasi: "Jl. Kaliurang KM 5.3, Mlati, Sleman" },
      { nama: "RS Siloam Yogyakarta", lokasi: "Jl. Laksda Adisucipto Km 6, Maguwoharjo, Depok, Sleman" },
      { nama: "RS Jogja International Hospital", lokasi: "Jl. Ringroad Utara, Trimulyo, Depok, Sleman" },
    ];

    setPuskesmasData(puskesmas);
    setRumahSakitData(rumahSakit);
  }, []);

  const Menu1 = [
    {
      name: "Klinik Utama",
      link: "https://inspektorat.slemankab.go.id/whistleblowersystem/",
      icon: faPlus,
    },
    {
      name: "Klinik Pratama",
      link: "/fasilitas_kesehatan",
      icon: faPlusCircle,
    },
    {
      name: "Optik",
      link: "/media_promosi/iklan",
      icon: faEye,
    },
    {
      name: "Perorangan",
      link: "/infografis/piramida",
      icon: faPerson,
    },
    {
      name: "Apotek",
      link: "/infografis/piramida",
      icon: faBookMedical,
    },
    {
      name: "Toko Obat",
      link: "/infografis/piramida",
      icon: faMedkit,
    },
    {
      name: "Lab Klinik",
      link: "/infografis/piramida",
      icon: faHouseChimneyMedical,
    },
    {
      name: "Rumah Sakit",
      link: "/infografis/piramida",
      icon: faHospital,
    },
    {
      name: "Puskesmas",
      link: "/infografis/piramida",
      icon: faHospitalSymbol,
    },
  ];
  // Menghitung indeks data yang akan ditampilkan pada halaman ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfLastItem2 = currentPage2 * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const indexOfFirstItem2 = indexOfLastItem2 - itemsPerPage2;
  const currentItems = puskesmasData.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems2 = rumahSakitData.slice(indexOfFirstItem2, indexOfLastItem2);

  // Mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate2 = (pageNumber) => setCurrentPage2(pageNumber);

  return (
    <div className="bg-white  dark:pl-24 dark:ml-0 dark:pr-4 dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <HeroFasilitas />
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 lg:grid-cols-1 mt-10 lg:ml-64">
            <div className="lg:w-[600px] w-[350px]">
              <h4 data-aos="zoom-in" className="font-bold text-[18px] my-10 text-center">
                Daftar Puskesmas
              </h4>
              <table data-aos="zoom-in" className="w-full border-collapse border border-gray-400">
                <thead className="bg-gray-300 dark:bg-gray-900">
                  <tr>
                    <th className="text-center border border-gray-400 px-4 py-2">No</th>
                    <th className="text-center border border-gray-400 px-4 py-2">Nama Puskesmas</th>
                    <th className="text-center border border-gray-400 px-4 py-2">Lokasi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((puskesmas, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-4 py-2">{indexOfFirstItem + index + 1}</td>
                      <td className="border border-gray-400 px-4 py-2">{puskesmas.nama}</td>
                      <td className="border border-gray-400 px-4 py-2">{puskesmas.lokasi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(puskesmasData.length / itemsPerPage) }, (_, i) => (
                  <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 px-3 py-1 rounded-full border border-gray-400 ${currentPage === i + 1 ? "bg-gray-300" : ""}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-[600px] w-[350px]">
              <h4 data-aos="zoom-in" className="font-bold text-[18px] my-10 text-center pt-20">
                Daftar Rumah Sakit
              </h4>
              <table data-aos="zoom-in" className="w-full border-collapse border border-gray-400">
                <thead className="bg-gray-300 dark:bg-gray-900">
                  <tr>
                    <th className="text-center border border-gray-400 px-4 py-2">No</th>
                    <th className="text-center border border-gray-400 px-4 py-2">Nama Rumah Sakit</th>
                    <th className="text-center border border-gray-400 px-4 py-2">Lokasi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems2.map((rumahSakit, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-4 py-2">{indexOfFirstItem2 + index + 1}</td>
                      <td className="border border-gray-400 px-4 py-2">{rumahSakit.nama}</td>
                      <td className="border border-gray-400 px-4 py-2">{rumahSakit.lokasi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(rumahSakitData.length / itemsPerPage2) }, (_, i) => (
                  <button key={i} onClick={() => paginate2(i + 1)} className={`mx-1 px-3 py-1 rounded-full border border-gray-400 ${currentPage2 === i + 1 ? "bg-gray-300" : ""}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="container lg:mx-auto lg:px-4 py-20 ">
            <h3 className="font-bold text-xl text-center mb-10"> Fasilitas Kesehatan</h3>
            <div data-aos="fade-up" className="container w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-4">
              {Menu1.map((content, index) => (
                <Link key={index} to={content.link} className="text-lg">
                  <div style={{ width: "220px" }} className=" dark:bg-gray-900 p-4 bg-white border-4 min-h-[80px] rounded-xl lg:w-1/6 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                    <div data-aos="fade-up" className="flex flex-row items-center text-xl text-center text-green-900 dark:text-white ">
                      {content.name}
                      <FontAwesomeIcon icon={content.icon} className="text-2xl ml-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fasilitas_kesehatan;

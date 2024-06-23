import React from "react";
import Artikel from "../../assets/hero/g1.jpeg";
import Artikel2 from "../../assets/hero/g2.png";
import Artikel3 from "../../assets/hero/g3.jpg";
import Artikel4 from "../../assets/hero/g4.jpeg";
import Artikel5 from "../../assets/hero/g5.png";
import Artikel6 from "../../assets/hero/g6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
  // Data untuk setiap konten
  const contents = [
    {
      id: 1,
      image: Artikel,
      title: "Implementasikan PKAT, Dinkes Sleman Raih Apresiasi Kemenkes RI",
      description: "Sebagai wujud apresiasi atas penyelenggaraan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT), Dinas Kesehatan Kabupaten Sleman sukses raih penghargaan dari Kementerian Kesehatan...",
      date: "13 May 2024",
      link: "/artikel1",
    },
    {
      id: 2,
      image: Artikel2,
      title: "Empat Tenaga Kesehatan Sleman Raih Juara Nakesdan Tingkat DIY Tahun 2024",
      description: "Prestasi membanggakan kembali diraih Tenaga Kesehatan Kabupaten Sleman pada tahun 2024. Sebanyak empat orang sabet Juara I Tenaga Kesehatan Teladan...",
      date: "12 May 2024",
      link: "/artikel2",
    },
    {
      id: 3,
      image: Artikel3,
      title: "Simulasi Bencana dalam Peringatan Hari Kesiapsiagaan Bencana (HKB)",
      description: "Dinas Kesehatan Kabupaten Sleman menyelenggarakan simulasi bencana. Agenda ini merupakan bagian dalam mendukung Peringatan Hari Kesiapsiagaan Bencana di Daerah Istimewa...",
      date: "26 April 2024",
      link: "/artikel3",
    },
    {
      id: 4,
      image: Artikel4,
      title: "Tingkatkan Kapasitas Puskesmas, Dinkes Sleman Selenggarakan Orientasi Integrasi Pelayanan Kesehatan Primer",
      description: "Senin (22/4) Kepala Dinas Kesehatan Kabupaten Sleman, dr. Cahya Purnama, M.Kes membuka secara resmi Orientasi Integrasi Pelayanan Kesehatan Primer bagi...",
      date: "24 April 2024",
      link: "/artikel4",
    },
    // {
    //   id: 5,
    //   image: Artikel5,
    //   title: "Selamat Hari Raya Idul Fitri 1445 H",
    //   description: "Kepala Dinas Kesehatan Kabupaten Sleman beserta seluruh jajaran menghaturkan Selamat Hari Raya Idul Fitri 1445 H. Mohon maaf lahir dan...",
    //   link: "/artikel5",
    //   date: "16 April 2024",
    // },
    // {
    //   id: 6,
    //   image: Artikel6,
    //   title: "Dialog Interaktif Tetap Sehat dan Bugar Saat Lebaran",
    //   description: "Mudik pada Hari Raya Idul Fitri merupakan fenomena yang umumnya terjadi di Indonesia. Kabupaten Sleman menjadi salah satu tujuan mudik...",
    //   link: "/artikel6",
    //   date: "4 April 2024",
    // },
  ];

  return (
    <>
      <div className="text-center mt-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Informasi Terbaru
        </h1>
        {/* Dropdown untuk memilih bulan */}
      </div>

      <div className=" min-h-[550px] flex flex-wrap justify-center items-center lg:py-12 py-0 px-8">
        {/* Mapping data untuk membuat container */}
        {contents.map((content) => (
          <div key={content.id} className="my-20 container w-full sm:w-1/1 lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Image section */}
              <div data-aos="zoom-in">
                <Link to={content.link}>
                  <img src={content.image} alt="" className="max-w-[350px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
                </Link>
              </div>

              {/* Text details section */}
              <div className="flex flex-col justify-center mx-auto gap-6 mt-4 sm:mt-0 w-[300px]">
                <Link to={content.link}>
                  <h1 data-aos="fade-up" className="lg:text-xl sm:text-2xl sm:translate-x-3 font-bold">
                    {content.title.length > 80 ? content.title.slice(0, 80) + "..." : content.title}
                  </h1>
                </Link>
                <Link to={content.link}>
                  <p data-aos="fade-up" className="text-gray-500 tracking-wide text-lg leading-5 dark:text-white">
                    {content.description}
                  </p>
                </Link>
                <div className="flex text-lg">
                  <p data-aos="fade-up" className="text-left">
                    <FontAwesomeIcon icon={faClock} />
                  </p>
                  <p data-aos="fade-up" className="ml-2">
                    {content.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;

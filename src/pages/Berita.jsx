// import React from "react";
// import Artikel from "../assets/hero/g1.jpeg";
// import Artikel2 from "../assets/hero/g2.png";
// import Artikel3 from "../assets/hero/g3.jpg";
// import Artikel4 from "../assets/hero/g4.jpeg";
// import Artikel5 from "../assets/hero/g5.png";
// import Artikel6 from "../assets/hero/g6.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";

// const Berita = () => {
//   // Data untuk setiap konten
//   const contents = [
//     {
//       image: Artikel,
//       title: "Implementasikan PKAT, Dinkes Sleman Raih Apresiasi Kemenkes RI",
//       description: "Sebagai wujud apresiasi atas penyelenggaraan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT), Dinas Kesehatan Kabupaten Sleman sukses raih penghargaan dari Kementerian Kesehatan...",
//       date: "13 May 2024",
//     },
//     {
//       image: Artikel2,
//       title: "Empat Tenaga Kesehatan Sleman Raih Juara Nakesdan Tingkat DIY Tahun 2024",
//       description: "Prestasi membanggakan kembali diraih Tenaga Kesehatan Kabupaten Sleman pada tahun 2024. Sebanyak empat orang sabet Juara I Tenaga Kesehatan Teladan...",
//       date: "12 May 2024",
//     },
//     {
//       image: Artikel3,
//       title: "Simulasi Bencana dalam Peringatan Hari Kesiapsiagaan Bencana (HKB)",
//       description: "Dinas Kesehatan Kabupaten Sleman menyelenggarakan simulasi bencana. Agenda ini merupakan bagian dalam mendukung Peringatan Hari Kesiapsiagaan Bencana di Daerah Istimewa...",
//       date: "26 April 2024",
//     },
//     {
//       image: Artikel4,
//       title: "Tingkatkan Kapasitas Puskesmas, Dinkes Sleman Selenggarakan Orientasi Integrasi Pelayanan Kesehatan Primer",
//       description: "Senin (22/4) Kepala Dinas Kesehatan Kabupaten Sleman, dr. Cahya Purnama, M.Kes membuka secara resmi Orientasi Integrasi Pelayanan Kesehatan Primer bagi...",
//       date: "24 April 2024",
//     },
//     {
//       image: Artikel5,
//       title: "Selamat Hari Raya Idul Fitri 1445 H",
//       description: "Kepala Dinas Kesehatan Kabupaten Sleman beserta seluruh jajaran menghaturkan Selamat Hari Raya Idul Fitri 1445 H. Mohon maaf lahir dan...",
//       date: "16 April 2024",
//     },
//     {
//       image: Artikel6,
//       title: "Dialog Interaktif Tetap Sehat dan Bugar Saat Lebaran",
//       description: "Mudik pada Hari Raya Idul Fitri merupakan fenomena yang umumnya terjadi di Indonesia. Kabupaten Sleman menjadi salah satu tujuan mudik...",
//       date: "4 April 2024",
//     },
//   ];

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 py-10">
//       <div data-aos="fade-up" className="container mx-auto">
//         {/* header section */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-bold">Daftar Berita</h1>
//         </div>

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3">
//           {/* Mapping data untuk membuat container */}
//           {contents.map((content, index) => (
//             <div data-aos="fade-up" key={index} className=" border border-gray-800 dark:border-white lg:h-[600px] h-[700px]">
//               {/* Image section */}
//               <div className="relative">
//                 <img src={content.image} alt="" className="w-full  lg:h-[300px] h-[420px] object-cover" />
//               </div>

//               {/* Text details section */}
//               <div className="py-6 px-4">
//                 <h4 className="font-bold">{content.title}</h4>
//                 <p className="text-gray-500 mt-2">{content.description}</p>
//                 <hr className="my-2" />
//                 <em>
//                   <small>Dibuat pada {content.date}</small>
//                 </em>
//                 <p className="lg:mt-4 mt-6">
//                   <Link className="p-2 bg-blue-700 text-white" to="/berita/dua-tersangka-illegal-logging-di-belitung-timur-berhasil-ditangkap-oleh-tim-operasi-gabungan">
//                     Selengkapnya
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Berita;

import React, { useState } from "react";
import Artikel from "../assets/hero/g1.jpeg";
import Artikel2 from "../assets/hero/g2.png";
import Artikel3 from "../assets/hero/g3.jpg";
import Artikel4 from "../assets/hero/g4.jpeg";
import Artikel5 from "../assets/hero/g5.png";
import Artikel6 from "../assets/hero/g6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Berita = () => {
  const [selectedMonth, setSelectedMonth] = useState(""); // State untuk menyimpan bulan yang dipilih
  const [selectedDays, setSelectedDays] = useState(""); // State untuk menyimpan bulan yang dipilih
  const [selectedYear, setSelectedYear] = useState(""); // State untuk menyimpan bulan yang dipilih

  // Data untuk setiap konten
  const contents = [
    {
      id: 1,
      image: Artikel,
      title: "Implementasikan PKAT, Dinkes Sleman Raih Apresiasi Kemenkes RI",
      description: "Sebagai wujud apresiasi atas penyelenggaraan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT), Dinas Kesehatan Kabupaten Sleman sukses raih penghargaan dari Kementerian Kesehatan...",
      date: "Senin, 13 Januari 2024",
      link: "/artikel1",
    },
    {
      id: 2,
      image: Artikel2,
      title: "Empat Tenaga Kesehatan Sleman Raih Juara Nakesdan Tingkat DIY Tahun 2024",
      description: "Prestasi membanggakan kembali diraih Tenaga Kesehatan Kabupaten Sleman pada tahun 2024. Sebanyak empat orang sabet Juara I Tenaga Kesehatan Teladan...",
      date: "Selasa, 12 Februari 2024",
      link: "/artikel2",
    },

    {
      id: 3,
      image: Artikel4,
      title: "Tingkatkan Kapasitas Puskesmas, Dinkes Sleman Selenggarakan Orientasi Integrasi Pelayanan Kesehatan Primer",
      description: "Senin (22/4) Kepala Dinas Kesehatan Kabupaten Sleman, dr. Cahya Purnama, M.Kes membuka secara resmi Orientasi Integrasi Pelayanan Kesehatan Primer bagi...",
      date: "Rabu, 24 Maret 2024",
      link: "/artikel4",
    },
    {
      id: 4,
      image: Artikel3,
      title: "Simulasi Bencana dalam Peringatan Hari Kesiapsiagaan Bencana (HKB)",
      description: "Dinas Kesehatan Kabupaten Sleman menyelenggarakan simulasi bencana. Agenda ini merupakan bagian dalam mendukung Peringatan Hari Kesiapsiagaan Bencana di Daerah Istimewa...",
      date: "Selasa, 26 April 2024",
      link: "/artikel3",
    },
    {
      id: 5,
      image: Artikel5,
      title: "Selamat Hari Raya Idul Fitri 1445 H",
      description: "Kepala Dinas Kesehatan Kabupaten Sleman beserta seluruh jajaran menghaturkan Selamat Hari Raya Idul Fitri 1445 H. Mohon maaf lahir dan...",
      date: "Kamis, 16 Maret 2024",
      link: "/artikel5",
    },
    {
      id: 6,
      image: Artikel6,
      title: "Dialog Interaktif Tetap Sehat dan Bugar Saat Lebaran",
      description: "Mudik pada Hari Raya Idul Fitri merupakan fenomena yang umumnya terjadi di Indonesia. Kabupaten Sleman menjadi salah satu tujuan mudik...",
      date: "Jumat, 4 April 2024",
      link: "/artikel6",
    },
  ];

  // Filter konten berdasarkan bulan yang dipilih
  const filteredContents = selectedMonth
    ? contents.filter((content) => {
        const month = new Date(content.date).getMonth();
        return month.toString() === selectedMonth;
      })
    : contents;

  // Fungsi untuk mengatur state ketika pengguna memilih bulan
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  // Filter konten berdasarkan hari yang dipilih
  const filteredContentsDay = selectedDays
    ? contents.filter((content) => {
        const day = new Date(content.date).getDay();
        return day.toString() === selectedDays;
      })
    : contents;

  // Fungsi untuk mengatur state ketika pengguna memilih hari
  const handleDayChange = (event) => {
    setSelectedDays(event.target.value);
  };
  // Filter konten berdasarkan tahun yang dipilih
  const filteredContentsYear = selectedYear
    ? contents.filter((content) => {
        const year = new Date(content.date).getFullYear();
        return year.toString() === selectedYear;
      })
    : contents;

  // Fungsi untuk mengatur state ketika pengguna memilih tahun
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);

  // Menghitung indeks konten untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Mengatur tampilan layar dan posisi pengguna ke paling atas
  };

  return (
    <div className="bg-white lg:translate-x-0 translate-x-16 dark:bg-gray-900 dark:text-white duration-200 py-10">
      <div data-aos="fade-up" className="container mx-auto">
        {/* header section */}
        <div className="text-center mb-5 lg:-translate-y-1 max-w-[600px] mx-auto"></div>
        {/* filter section */}
        <div className="flex justify-end items-center mb-5 lg:-translate-y-6 lg:ml-10 lg:mr-0 mr-4 lg:-space-x-24 lg:gap-2 gap-2">
          <div className="">
            <select className="border border-gray-500 rounded px-3 py-1 lg:mr-[100px] outline-none dark:text-gray-900" value={selectedDays} onChange={handleDayChange}>
              <option value="">Pilih Hari</option>
              <option value="0">Senin</option>
              <option value="1">Selasa</option>
              <option value="2">Rabu</option>
              <option value="3">Kamis</option>
              <option value="4">Jumat</option>
              <option value="5">Sabtu</option>
              <option value="6">Minggu</option>
              {/* Tambahkan opsi bulan lainnya sesuai kebutuhan */}
            </select>
          </div>
          <div className="">
            <select className="border border-gray-500 rounded px-3 py-1 lg:mr-[100px] outline-none dark:text-gray-900" value={selectedMonth} onChange={handleMonthChange}>
              <option value="">Pilih Bulan</option>
              <option value="0">Januari</option>
              <option value="1">Februari</option>
              <option value="2">Maret</option>
              <option value="3">April</option>
              <option value="4">Mei</option>
              {/* Tambahkan opsi bulan lainnya sesuai kebutuhan */}
            </select>
          </div>

          <div className="ml-0 mr-0">
            <select className="border border-gray-500 rounded px-3 py-1 lg:mr-[100px] outline-none dark:text-gray-900" value={selectedYear} onChange={handleYearChange}>
              <option value="">Pilih Tahun</option>
              <option value="0">2024</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
              <option value="4">2020</option>
              <option value="5">2019</option>
              <option value="6">2018</option>
              {/* Tambahkan opsi bulan lainnya sesuai kebutuhan */}
            </select>
          </div>
        </div>

        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1 lg:-translate-y-5">
          {/* Mapping data untuk membuat container */}
          {currentItems.map((content) => (
            <div
              data-aos="fade-up"
              key={content.id}
              className="border border-gray-800 dark:border-white lg:h-[220px] h-[200px] lg:w-[1000px] lg:p-4 lg:px-0 px-4 lg:ml-10"
              style={{ boxShadow: "10px 10px 12px rgba(0, 0, 0, 0.1)" }} // Menambahkan shadow
            >
              {/* Konten artikel */}
              <div className="relative">
                <Link to={content.link} target="_blank" rel="noopener noreferrer">
                  <img src={content.image} alt="" className="lg:w-[200px] w-[150px] lg:h-[180px] h-[150px] mt-5 lg:ml-3 pr-2 lg:mt-0 object-cover absolute lg:top-0 lg:left-0 " />
                </Link>
              </div>

              {/* Text details section */}
              <div className=" lg:pl-[220px] pl-[150px] pr-2">
                <h4 className="font-bold text-[12px] mt-2 lg:mt-0 lg:text-[20px]">
                  <Link to={content.link} target="_blank" rel="noopener noreferrer">
                    {content.title.length > 74 ? content.title.slice(0, 74) + "..." : content.title}
                  </Link>
                </h4>
                <p className="text-gray-500 mt-2 text-[9px] lg:text-[17px] dark:text-white">
                  <Link to={content.link} target="_blank" rel="noopener noreferrer">
                    {content.description}
                  </Link>
                </p>
                <hr className="my-2" />
                <div className="flex lg:block ">
                  <p className="lg:mt-4 text-[8px] lg:text-[14px] ">
                    <Link className=" lg:p-2 p-2 bg-blue-700 text-white rounded-full" to={content.link} target="_blank" rel="noopener noreferrer">
                      Selengkapnya
                    </Link>
                  </p>
                  <p className="lg:mt-5 lg:ml-0 ml-2 text-[7px] lg:text-[15px]">
                    <FontAwesomeIcon icon={faClock} />
                    <span> {content.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-5">
          <nav>
            <ul className="flex items-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className="mx-1">
                  <Link
                    to="#!"
                    onClick={() => paginate(i + 1)}
                    className={`${currentPage === i + 1 ? "text-blue-500 border-blue-500 border rounded-full px-3 py-1" : "text-gray-500"} hover:text-blue-700 hover:border-blue-700 border rounded-full px-3 py-1`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Berita;

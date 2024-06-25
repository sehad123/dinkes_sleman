import React, { useState, useEffect } from "react";
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
  const [selectedDays, setSelectedDays] = useState(""); // State untuk menyimpan hari yang dipilih
  const [selectedYear, setSelectedYear] = useState(""); // State untuk menyimpan tahun yang dipilih
  const [sortOrder, setSortOrder] = useState(""); // State untuk mengurutkan konten
  const [isMobile, setIsMobile] = useState(false); // State untuk mendeteksi tampilan mobile
  const [searchTitle, setSearchTitle] = useState(""); // State untuk menyimpan nilai pencarian judul

  useEffect(() => {
    // Fungsi untuk mendeteksi ukuran layar
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mengatur ukuran max untuk mobile
    };

    // Menambahkan event listener untuk resize
    window.addEventListener("resize", handleResize);

    // Memanggil handleResize saat komponen dimuat
    handleResize();

    // Membersihkan event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Data untuk setiap konten
  const contents = [
    {
      id: 1,
      image: Artikel,
      title: "Implementasikan PKAT, Dinkes Sleman Raih Apresiasi Kemenkes RI",
      description: "Sebagai wujud apresiasi atas penyelenggaraan Pemeriksaan Kesehatan Anak Terintegrasi (PKAT), Dinas Kesehatan Kabupaten Sleman sukses raih penghargaan dari Kementerian Kesehatan...",
      dateshow: "Senin, 13 Januari 2024",
      date: "2024-01-13",
      link: "/artikel1",
    },
    {
      id: 2,
      image: Artikel2,
      title: "Empat Tenaga Kesehatan Sleman Raih Juara Nakesdan Tingkat DIY Tahun 2024",
      description: "Prestasi membanggakan kembali diraih Tenaga Kesehatan Kabupaten Sleman pada tahun 2024. Sebanyak empat orang sabet Juara I Tenaga Kesehatan Teladan...",
      dateshow: "Selasa, 12 Februari 2024",
      date: "2024-02-12",
      link: "/artikel2",
    },
    {
      id: 3,
      image: Artikel4,
      title: "Dinkes Sleman Selenggarakan Orientasi Integrasi Pelayanan Kesehatan Primer",
      description: "Senin (22/4) Kepala Dinas Kesehatan Kabupaten Sleman, dr. Cahya Purnama, M.Kes membuka secara resmi Orientasi Integrasi Pelayanan Kesehatan Primer bagi...",
      dateshow: "Rabu, 24 Maret 2024",
      date: "2024-03-24",
      link: "/artikel4",
    },
    {
      id: 4,
      image: Artikel3,
      title: "Simulasi Bencana dalam Peringatan Hari Kesiapsiagaan Bencana (HKB)",
      description: "Dinas Kesehatan Kabupaten Sleman menyelenggarakan simulasi bencana. Agenda ini merupakan bagian dalam mendukung Peringatan Hari Kesiapsiagaan Bencana di Daerah Istimewa...",
      dateshow: "Selasa, 26 April 2024",
      date: "2024-04-26",
      link: "/artikel3",
    },
    {
      id: 5,
      image: Artikel5,
      title: "Selamat Hari Raya Idul Fitri 1445 H",
      description: "Kepala Dinas Kesehatan Kabupaten Sleman beserta seluruh jajaran menghaturkan Selamat Hari Raya Idul Fitri 1445 H. Mohon maaf lahir dan...",
      dateshow: "Kamis, 16 Maret 2024",
      date: "2024-03-16",
      link: "/artikel5",
    },
    {
      id: 6,
      image: Artikel6,
      title: "Dialog Interaktif Tetap Sehat dan Bugar Saat Lebaran",
      description: "Mudik pada Hari Raya Idul Fitri merupakan fenomena yang umumnya terjadi di Indonesia. Kabupaten Sleman menjadi salah satu tujuan mudik...",
      dateshow: "Jumat, 4 April 2024",
      date: "2024-04-04",
      link: "/artikel6",
    },
  ];

  const filteredContents = contents.filter((content) => {
    const yearMatch = selectedYear ? new Date(content.date).getFullYear().toString() === selectedYear : true;
    const monthMatch = selectedMonth ? (new Date(content.date).getMonth() + 1).toString() === selectedMonth : true;
    const titleMatch = searchTitle ? content.title.toLowerCase().includes(searchTitle.toLowerCase()) : true;
    return yearMatch && monthMatch && titleMatch;
  });
  
  const sortedContents = sortOrder
    ? [...filteredContents].sort((a, b) => {
        if (sortOrder === "Terbaru") {
          return new Date(b.date) - new Date(a.date);
        } else {
          return new Date(a.date) - new Date(b.date);
        }
      })
    : filteredContents;
  
  
  // Fungsi untuk mengatur state ketika pengguna memilih bulan
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Fungsi untuk mengatur state ketika pengguna memilih tahun
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Fungsi untuk mengatur state ketika pengguna memilih urutan
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchTitleChange = (event) => {
    setSearchTitle(event.target.value);
  };
  

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(sortedContents.length / itemsPerPage);

  // Menghitung indeks konten untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedContents.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Mengatur tampilan layar dan posisi pengguna ke paling atas
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 pt-10 lg:w-[90%] dark:lg:w-full lg:pl-20">
      <div data-aos="fade-up" className="container grid lg:grid-cols-2 grid-cols-1 justify-start items-start ">
        <div className="flex flex-col justify-end items-center mt-5 lg:-translate-y-6 lg:ml-10 ml-6 lg:mr-0 mr-4 lg:-space-x-24 lg:gap-2 gap-2 lg:-translate-x-36">
          <div className="lg:mr-48">
            <h1 className="font-bold mb-7 text-xl ml-10">Filter berita</h1>
            <div>
              <h1 className="font-bold mb-2 text-[15px]">Cari Judul</h1>
              <form>
              <input
  type="text"
  placeholder=""
  value={searchTitle}
  onChange={handleSearchTitleChange}
  className="w-[200px] mb-4 group-hover:w-[150px] transition-all duration-300 border border-gray-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-white text-black dark:border-gray-500 dark:bg-white dark:text-white"
/>

              </form>
              
            </div>
          </div>
          <div className="-mt-3">
            <h1 htmlFor="year-select" className="font-bold my-1 text-[15px]">Tahun</h1>
            <div className="relative inline-block w-[200px] lg:mr-[100px]">
              <select id="year-select" className="appearance-none w-full px-1 py-1 lg:px-3 bg-white dark:text-gray-900 border border-gray-500 rounded outline-none pr-10" value={selectedYear} onChange={handleYearChange}>
                {/* Options */}
                <option value="">Pilih Tahun</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <div className="w-px h-6 bg-gray-900"></div>
                <svg className="w-4 h-4 ml-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="my-2">
            <h1 className="font-bold my-1 text-[15px]">Bulan</h1>

            <div className="relative inline-block w-[200px] lg:mr-[100px]">
              <select id="month-select" className="appearance-none w-full px-1 py-1 lg:px-3 bg-white dark:text-gray-900 border border-gray-500 rounded outline-none pr-10" value={selectedMonth} onChange={handleMonthChange}>
                {/* Options */}
                <option value="">Pilih Bulan</option>
              <option value="1">Januari</option>
              <option value="2">Februari</option>
              <option value="3">Maret</option>
              <option value="4">April</option>
              <option value="5">Mei</option>
              <option value="6">Juni</option>
              <option value="7">Juli</option>
              <option value="8">Agustus</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">Desember</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <div className="w-px h-6 bg-gray-900"></div>
                <svg className="w-4 h-4 ml-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h1 htmlFor="sort-select" className="font-bold my-1 text-[15px]">Urutkan Berdasarkan</h1>
            <div className="relative inline-block w-[200px] lg:mr-[100px]">
              <select id="sort-select" className="appearance-none w-full px-1 py-1 lg:px-3 bg-white dark:text-gray-900 border border-gray-500 rounded outline-none pr-10" value={sortOrder} onChange={handleSortChange}>
                {/* Options */}
                <option value="">Pilih Urutan</option>
              <option value="Terbaru">Terbaru</option>
              <option value="Terlama">Terlama</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <div className="w-px h-6 bg-gray-900"></div>
                <svg className="w-4 h-4 ml-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
{/* 
          <button className="w-[200px]   h-[35px] pt-1 mb-20 transition-all duration-300 border rounded-lg mt-6 lg:-translate-x-12 px-2 focus:outline-none focus:border-1 text-gray-100 pb-3 focus:border-primary bg-blue-600  dark:border-gray-500 dark:bg-blue-600 dark:text-white">
            Tampilkan
          </button> */}
        </div>

        <div className="container grid grid-cols-1 mt-2 mb-4 gap-8 sm:grid-cols-1 lg:grid-cols-1 lg:-translate-x-[450px]">
          {/* Mapping data untuk membuat container */}
          {currentItems.map((content) => (
            <div
              data-aos="fade-up"
              key={content.id}
              className="border rounded-3xl dark:border-white lg:h-[210px] h-[190px] lg:w-[900px] w-[100%] lg:p-4 lg:px-0 px-4 mb-10 lg:ml-28"
              style={{ boxShadow: "10px 10px 12px rgba(0, 0, 0, 0.1)" }} // Menambahkan shadow
            >
              {/* Konten artikel */}
              <div className="relative">
                <Link to={content.link}>
                  <img src={content.image} alt="" className="lg:w-[180px] w-[150px] lg:h-[170px] h-[150px] mt-3 lg:ml-5 pr-2 lg:mt-0 object-cover absolute lg:top-0 lg:left-0 " />
                </Link>
              </div>

              {/* Text details section */}
              <div className=" lg:pl-[220px] pl-[150px] pr-2 w-[100%]lg:mt-0 mt-2">
              <p className="lg:flex text-[9px] lg:text-[15px] lg:mr-[470px]">
                <FontAwesomeIcon icon={faClock} />
                <span className="ml-2 -mt-1" data-date={content.date}> {content.dateshow}</span>
              </p>
                <h4 className="font-bold text-[9px] lg:mt-2 lg:text-[20px]">
                  <Link to={content.link}>{content.title.length > 74 ? content.title.slice(0, 74) + "..." : content.title}</Link>
                </h4>
                <p className="text-gray-500 mt-1 text-[9px] lg:text-[17px] dark:text-white">
                  <Link to={content.link}>{content.description.length > 130 ? content.description.slice(0, 120) + "..." : content.description}</Link>
                </p>
                <hr className="my-2" />
                <div className="translate-y-2">
                  <p className="-translate-y-4 text-[9px] mr-4 lg:text-[16px]">
                    <Link className=" text-blue-500 rounded-lg" to={content.link}>
                      Selengkapnya
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center lg:ml-[700px] mb-10 lg:-translate-x-20">
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
        )}
      </div>
    </div>
  );
};

export default Berita;

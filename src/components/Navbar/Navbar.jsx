// import React, { useState, useEffect } from "react";
// import Logo from "../../assets/logo.jpeg";
// import { IoMdSearch } from "react-icons/io";
// import { FaCaretDown, FaBars, FaHome, FaCaretRight } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import Popup from "../../components/Popup/Popup_pencarian";
// import { Link } from "react-router-dom";

// const Menu1 = [
//   {
//     name: "Profil",
//     link: "/profil/visi_misi",
//   },
//   {
//     name: "Layanan",
//     link: "/##",
//     dropdown: [
//       {
//         name: "Perijinan Kesehatan",
//         link: "/perijinan_kesehatan",
//       },
//       {
//         name: "Sertifikasi",
//         link: "/##",
//         dropdown: [
//           {
//             name: "Sertifikat Produksi Pangan Industri Rumah Tangga (SP-PIRT)",
//             link: "/sertifikat_produksi",
//           },
//           {
//             name: "Sertifikasi Laik Higiene Sanitasi Tempat Pengelolaan Pangan",
//             link: "/sertifikat_laik",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Berita",
//     link: "/berita",
//   },
//   {
//     name: "Agenda",
//     link: "/agenda",
//   },
//   {
//     name: "Info Publik",
//     link: "/###",
//     dropdown: [
//       {
//         name: "Informasi Setiap Saat",
//         link: "/setiap_saat/iku",
//       },
//       {
//         name: "Informasi Serta Merta",
//         link: "/serta_merta",
//       },
//       {
//         name: "Informasi Berkala",
//         link: "/berkala",
//       },
//     ],
//   },
//   {
//     name: "Galeri",
//     link: "/galeri",
//   },
//   {
//     name: "Unduh",
//     link: "/unduh/laporan_tahunan",
//   },
//   {
//     name: "Hubungi Kami",
//     link: "#",
//   },
//   {
//     name: "E-PPID",
//     link: "https://ppid.slemankab.go.id",
//   },
// ];

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState(null); // State untuk menampilkan hasil pencarian
//   const [orderPopup, setOrderPopup] = useState(false);

//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     Menu1.forEach((menuItem) => {
//       if (menuItem.link === currentPath || (menuItem.dropdown && menuItem.dropdown.some((subMenuItem) => subMenuItem.link === currentPath))) {
//         setActiveMenu(menuItem.link);
//       }
//     });
//   }, []);

//   const handleMenuClick = (link) => {
//     setActiveMenu(link);
//   };

//   const handleShopsyClick = () => {
//     // Arahkan pengguna ke halaman beranda
//     window.location.href = "/"; // Ganti "/home" dengan URL beranda Anda
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   // Fungsi untuk menghandle perubahan input pencarian
//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Fungsi untuk melakukan pencarian dan menampilkan hasilnya
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const result = Menu1.find((menuItem) => menuItem.name.toLowerCase().includes(searchQuery.toLowerCase()));
//     if (result) {
//       setSearchResult(result); // Menyimpan hasil pencarian
//       window.location.href = result.link; // Arahkan ke halaman yang ditemukan
//     } else {
//       setSearchResult("Pencarian tidak ditemukan");
//       setOrderPopup(true); // Tampilkan popup ketika pencarian tidak ditemukan
//       setTimeout(() => {
//         setOrderPopup(false); // Sembunyikan popup setelah 2 detik
//       }, 5000);
//     }
//   };
//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   const scrollToBottom = (e) => {
//     e.preventDefault(); // Menghentikan default behavior link
//     window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
//   };
//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 w-[500px] lg:w-[100%] dark:text-white duration-200 relative z-40">
//       {/* Upper Navbar */}
//       <div className="lg:px-10 bg-green-500 py-2 sm:h-[150px] lg:h-[130px]">
//         <div className="container mt-3 sm: flex justify-between items-center">
//           <div>
//             <Link to="#" onClick={handleShopsyClick} className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
//               <img src={Logo} alt="Logo" className="w-20 ml-5 mb-6 lg:mb-0" />
//               <p className="ml-5 sm:text-lg md:text-xl lg:text-3xl mb-6 sm:mb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                 Dinas Kesehatan Sleman
//               </p>
//             </Link>
//             {/* Hidden on small screens */}
//             <p className="hidden sm:block md:text-xl lg:text-xl lg:ml-[130px] sm:text-lg sm:ml-[130px] sm:-translate-y-14 transform lg:-translate-y-8" style={{ fontFamily: "Roboto, sans-serif" }}>
//               Website Resmi Dinas Kesehatan Sleman
//             </p>
//           </div>

//           <div className="flex justify-center items-center gap-2">
//             {/* Dark mode switch */}
//             <div className="mb-20 translate-x-10 lg:flex hidden md:hidden">
//               <DarkMode />
//             </div>
//             {/* Hamburger Icon (Hidden on Desktop) */}
//             <div className="md:hidden">
//               <button onClick={toggleMenu} className="text-dark focus:outline-none">
//                 <FaBars className="text-2xl sm:mb-10" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Lower Navbar (Desktop) */}
//       {/* ...Kode Anda */}

//       {/* Lower Navbar (Desktop) */}
//       <div className="hidden md:block">
//         <div className="">
//           <ul className="flex justify-center lg:gap-10 md:gap-8 text-[16px] py-2  bg-linear-gradient(90deg, #149fce 0%, #10e1d3 100%);" style={{ borderTop: "2px solid black", fontFamily: "Open Sans, sans-serif" }}>
//             <li className="relative group cursor-pointer">
//               <div className="relative group hidden sm:block ml text-3xl">
//                 <FaHome className="text-black group-hover:text-green-700 translate-y-1 dark:text-white" onClick={handleShopsyClick} />
//               </div>
//             </li>
//             {Menu1.map((menuItem, index) => (
//               <li
//                 key={index}
//                 className={`group relative cursor-pointer ${
//                   menuItem.link === activeMenu
//                     ? "bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 duration-200 text-white px-4 rounded-full"
//                     : "hover:bg-gradient-to-r hover:from-green-300 hover:to-green-500 hover:text-white hover:px-4 hover:rounded-full"
//                 }`}
//                 onClick={(e) => {
//                   handleMenuClick(menuItem.link);
//                   if (menuItem.name === "Hubungi Kami") {
//                     scrollToBottom(e);
//                   }
//                 }}
//               >
//                 <Link to={menuItem.link} className="flex items-center gap-[2px] py-2">
//                   {menuItem.name}
//                   <span>{menuItem.dropdown && <FaCaretDown className="transition-all duration-200" />}</span>
//                 </Link>
//                 {/* Dropdown Content */}
//                 {menuItem.dropdown && (
//                   <div className="group-hover:block absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                     <ul>
//                       {menuItem.dropdown.map((subMenuItem, subIndex) => (
//                         <li key={subIndex} className="relative cursor-pointer">
//                           <Link to={subMenuItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
//                             {subMenuItem.name}
//                             <span>{subMenuItem.dropdown && <FaCaretRight className="inline-block ml-1 transition-all duration-200" />}</span>
//                           </Link>
//                           {/* Nested Dropdown Content */}
//                           {subMenuItem.dropdown && (
//                             <div className="group-hover:block absolute left-full top-0 ml-2 mt-0 w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                               <ul>
//                                 {subMenuItem.dropdown.map((nestedMenuItem, nestedIndex) => (
//                                   <li key={nestedIndex} className="cursor-pointer">
//                                     <Link to={nestedMenuItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
//                                       {nestedMenuItem.name}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//             {/* Search Bar */}
//             <li className="relative group cursor-pointer">
//               <div className="relative group hidden sm:block ml text-xl mt-1/2">
//                 <form onSubmit={handleSearch}>
//                   {" "}
//                   {/* Tambahkan onSubmit pada form untuk menangani pencarian */}
//                   <input
//                     type="text"
//                     placeholder=""
//                     className="w-[40px] sm:w-[40px] group-hover:w-[150px] transition-all duration-300 rounded-full border border-gray-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//                     value={searchQuery}
//                     onChange={handleInputChange}
//                   />
//                   <IoMdSearch type="submit" className="text-gray-500 group-hover:text-primary absolute top-1/2 dark:text-white -translate-y-1/2 right-3 cursor-pointer" />
//                 </form>
//               </div>
//             </li>
//             {searchResult && typeof searchResult !== "string" && (
//               <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 z-50 bg-transparent p-4 rounded-md shadow-md">
//                 <Link to={searchResult.link}>{/* Tampilkan nama menu yang ditemukan */}</Link>
//               </div>
//             )}
//             {/* Tampilkan pesan jika pencarian tidak ditemukan */}
//             {searchResult === "Pencarian tidak ditemukan" && (
//               <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 z-50 bg-transparent w-[600px] rounded-md shadow-md">{orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}</div>
//             )}
//           </ul>
//         </div>
//       </div>
//       {/* Mobile Menu (Hidden on Desktop) */}
//       {showMenu && (
//         <div className="md:hidden">
//           <div className="container">
//             <ul className="flex flex-col items-center gap-3 py-2">
//               {Menu1.map((menuItem, index) => (
//                 <li
//                   key={index}
//                   className="group relative w-[400px] cursor-pointer hover:bg-slate-400 hover:px-4 hover:b"
//                   onClick={(e) => {
//                     handleMenuClick(menuItem.link);
//                     if (menuItem.name === "Hubungi Kami") {
//                       scrollToBottom(e);
//                     }
//                   }}
//                 >
//                   <Link to={menuItem.link} className="flex items-center justify-center gap-[2px] py-2">
//                     {menuItem.name}
//                     <span>{menuItem.dropdown && <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />}</span>
//                   </Link>
//                   {menuItem.dropdown && (
//                     <div className="absolute z-[9999] hidden group-hover:inline-block w-[200px] -translate-y-12 rounded-md bg-white p-2 text-black shadow-md">
//                       <ul>
//                         {menuItem.dropdown.map((subMenuItem, subIndex) => (
//                           <li key={subIndex} className="group relative cursor-pointer">
//                             <Link to={subMenuItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">
//                               {subMenuItem.name}
//                               <span className="">{subMenuItem.dropdown && <FaCaretDown className="transition-all duration-200 group-hover:rotate-0" />}</span>
//                             </Link>
//                             {subMenuItem.dropdown && (
//                               <div className="group-hover:block absolute top-14 -ml-2 mt-0 w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                                 <ul>
//                                   {subMenuItem.dropdown.map((nestedMenuItem, nestedIndex) => (
//                                     <li key={nestedIndex} className="cursor-pointer">
//                                       <Link to={nestedMenuItem.link} className="block w-full rounded-md p-2 hover:bg-primary/20">
//                                         {nestedMenuItem.name}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               ))}
//               {/* Search Bar (Always Visible) */}
//               <li className="relative group cursor-pointer">
//                 <div className="relative group ml text-xl mt-1/2">
//                   <form onSubmit={handleSearch}>
//                     <input
//                       type="text"
//                       placeholder=""
//                       className="w-[40px] sm:w-[40px] group-hover:w-[150px] transition-all duration-300 rounded-full border border-gray-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//                       value={searchQuery}
//                       onChange={handleInputChange}
//                     />
//                     <IoMdSearch type="submit" className="text-gray-500 group-hover:text-primary absolute top-1/2 dark:text-white -translate-y-1/2 right-3 cursor-pointer" />
//                   </form>
//                 </div>
//               </li>
//               {/* Popup for Search Result */}
//               {searchResult === "Pencarian tidak ditemukan" && (
//                 <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 z-50 bg-transparent w-[600px] rounded-md shadow-md">{orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}</div>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.jpeg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaBars, FaHome, FaCaretRight } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Popup from "../../components/Popup/Popup_pencarian";
import { Link } from "react-router-dom";

const Menu1 = [
  // {
  //   name: "Beranda",
  //   link: "/",
  // },
  {
    name: "Profil",
    link: "/profil/visi_misi",
  },
  {
    name: "Berita",
    link: "/berita",
  },
  {
    name: "Layanan",
    link: "/##",
    dropdown: [
      {
        name: "Perijinan Kesehatan",
        link: "/perijinan_kesehatan",
      },
      {
        name: "Unduh",
        link: "/unduh/laporan_tahunan",
      },
      {
        name: "Agenda",
        link: "/agenda",
      },
      {
        name: "Galeri",
        link: "/galeri",
      },

      // {
      //   name: "Sertifikasi",
      //   link: "/##",
      //   dropdown: [
      //     {
      //       name: "Sertifikat Produksi",
      //       link: "/sertifikat_produksi",
      //     },
      //     {
      //       name: "Sertifikasi Sanitasi",
      //       link: "/sertifikat_laik",
      //     },
      //     // {
      //     //   name: "Sertifikat Produksi Pangan Industri Rumah Tangga (SP-PIRT)",
      //     //   link: "/sertifikat_produksi",
      //     // },
      //     // {
      //     //   name: "Sertifikasi Laik Higiene Sanitasi Tempat Pengelolaan Pangan",
      //     //   link: "/sertifikat_laik",
      //     // },
      //   ],
      // },
    ],
  },

  {
    name: "Info Publik",
    link: "/###",
    dropdown: [
      {
        name: "Informasi Setiap Saat",
        link: "/setiap_saat/iku",
      },
      {
        name: "Informasi Serta Merta",
        link: "/serta_merta",
      },
      {
        name: "Informasi Berkala",
        link: "/berkala",
      },
    ],
  },
  {
    name: "Sertifikat",
    link: "/####",
    dropdown: [
      {
        name: "Sertifikat Produksi",
        link: "/sertifikat_produksi",
      },
      {
        name: "Sertifikat Sanitasi",
        link: "/sertifikat_laik",
      },
      // {
      //   name: "Sertifikat Produksi Pangan Industri Rumah Tangga (SP-PIRT)",
      //   link: "/sertifikat_produksi",
      // },
      // {
      //   name: "Sertifikasi Laik Higiene Sanitasi Tempat Pengelolaan Pangan",
      //   link: "/sertifikat_laik",
      // },
    ],
  },

  // {
  //   name: "Hubungi Kami",
  //   link: "#",
  // },
  {
    name: "E-PPID",
    link: "https://ppid.slemankab.go.id",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null); // State untuk menampilkan hasil pencarian
  const [orderPopup, setOrderPopup] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    Menu1.forEach((menuItem) => {
      if (menuItem.link === currentPath || (menuItem.dropdown && menuItem.dropdown.some((subMenuItem) => subMenuItem.link === currentPath))) {
        setActiveMenu(menuItem.link);
      }
    });
  }, []);

  const handleMenuClick = (link) => {
    setActiveMenu(link);
  };

  const handleShopsyClick = () => {
    // Arahkan pengguna ke halaman beranda
    window.location.href = "/"; // Ganti "/home" dengan URL beranda Anda
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Fungsi untuk menghandle perubahan input pencarian
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fungsi untuk melakukan pencarian dan menampilkan hasilnya
  const handleSearch = (e) => {
    e.preventDefault();
    const result = Menu1.find((menuItem) => menuItem.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (result) {
      setSearchResult(result); // Menyimpan hasil pencarian
      window.location.href = result.link; // Arahkan ke halaman yang ditemukan
    } else {
      setSearchResult("Pencarian tidak ditemukan");
      setOrderPopup(true); // Tampilkan popup ketika pencarian tidak ditemukan
      setTimeout(() => {
        setOrderPopup(false); // Sembunyikan popup setelah 2 detik
      }, 5000);
    }
  };
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const scrollToBottom = (e) => {
    e.preventDefault(); // Menghentikan default behavior link
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };
  return (
    <div className="lg:shadow-md bg-white lg:h-[95px] h-[150px] dark:bg-gray-900 w-max lg:w-[100%] dark:text-white duration-200 relative z-40">
      <div className="lg:hidden block lg:px-10 bg-green-500 py-2 sm:h-[150px] lg:h-[130px] h-[120px]">
        <div className="container mt-3 sm: flex justify-between items-center lg:translate-y-0 -translate-y-40">
          <div>
            <a href="#" onClick={handleShopsyClick} className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-20 ml-5 mb-6 lg:mb-0" />
              <p className="ml-5 sm:text-lg md:text-xl lg:text-3xl mb-6 sm:mb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Dinas Kesehatan Sleman
              </p>
            </a>
            {/* Hidden on small screens */}
            <p className="hidden sm:block md:text-xl lg:text-xl lg:ml-[130px] sm:text-lg sm:ml-[130px] sm:-translate-y-14 transform lg:-translate-y-8" style={{ fontFamily: "Roboto, sans-serif" }}>
              Website Resmi Dinas Kesehatan Sleman
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            {/* Dark mode switch */}
            <div className="lg:mb-20 mb-[400px] translate-x-10 ">
              <DarkMode />
            </div>
            {/* Hamburger Icon (Hidden on Desktop) */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-dark focus:outline-none">
                <FaBars className="text-2xl sm:mb-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar (Desktop) */}
      <div className="hidden md:block">
        <div className="">
          <ul className="flex justify-center lg:gap-10 md:gap-8 text-[16px] py-2  bg-linear-gradient(90deg, #149fce 0%, #10e1d3 100%);" style={{ borderTop: "2px solid black", fontFamily: "Open Sans, sans-serif" }}>
            <li className="relative group cursor-pointer">
              <div className="relative group hidden sm:block ml text-3xl">{/* <img src={Logo} alt="Logo" className="w-10 rounded-lg ml-5 mb-6 lg:mb-0" /> */}</div>
              <div className="container mt-3 sm: flex justify-between items-center">
                <div>
                  <Link to="#" onClick={handleShopsyClick} className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
                    <img src={Logo} alt="Logo" className="w-16 h-auto -mt-10 lg:mb-0" />
                    <p className="ml-2 sm:text-lg md:text-xl lg:text-xl sm:mb-10 w-[200px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Dinas Kesehatan Sleman
                    </p>
                  </Link>
                  {/* Hidden on small screens */}
                  {/* <p className="hidden sm:block md:text-xl lg:text-xl lg:ml-[130px] sm:text-lg sm:ml-[130px] sm:-translate-y-14 transform lg:-translate-y-8" style={{ fontFamily: "Roboto, sans-serif" }}>
                    Website Resmi Dinas Kesehatan Sleman
                  </p> */}
                </div>

                <div className="flex justify-center items-center gap-2">
                  {/* Dark mode switch */}

                  {/* Hamburger Icon (Hidden on Desktop) */}
                  <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-dark focus:outline-none">
                      <FaBars className="text-2xl sm:mb-10" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            {Menu1.map((menuItem, index) => (
              <li
                key={index}
                className={`group mt-4 relative cursor-pointer ${menuItem.link === activeMenu ? "underline" : ""} hover:underline`}
                onClick={(e) => {
                  handleMenuClick(menuItem.link);
                  if (menuItem.name === "Hubungi Kami") {
                    scrollToBottom(e);
                  }
                }}
              >
                <Link to={menuItem.link} className="flex items-center gap-[2px] py-2">
                  {menuItem.name}
                  <span>{menuItem.dropdown && <FaCaretDown className="transition-all duration-200" />}</span>
                </Link>
                {/* Dropdown Content */}
                {menuItem.dropdown && (
                  <div className="group-hover:block absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                    <ul>
                      {menuItem.dropdown.map((subMenuItem, subIndex) => (
                        <li key={subIndex} className="relative cursor-pointer">
                          <Link to={subMenuItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                            {subMenuItem.name}
                            <span>{subMenuItem.dropdown && <FaCaretRight className="inline-block ml-1 transition-all duration-200" />}</span>
                          </Link>
                          {/* Nested Dropdown Content */}
                          {subMenuItem.dropdown && (
                            <div className="group-hover:block absolute left-full top-0 ml-2 mt-0 w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                              <ul>
                                {subMenuItem.dropdown.map((nestedMenuItem, nestedIndex) => (
                                  <li key={nestedIndex} className="cursor-pointer">
                                    <Link to={nestedMenuItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                                      {nestedMenuItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {/* Search Bar */}
            <li className="relative group cursor-pointer">
              <div className="relative group hidden sm:block ml text-xl mt-1/2">
                <form onSubmit={handleSearch}>
                  {" "}
                  {/* Tambahkan onSubmit pada form untuk menangani pencarian */}
                  <input
                    type="text"
                    placeholder=""
                    className="w-[40px] sm:w-[40px] mt-4 group-hover:w-[150px] transition-all duration-300 rounded-full border border-gray-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                  <IoMdSearch type="submit" className="text-gray-500 mt-2 group-hover:text-primary absolute top-1/2 dark:text-white -translate-y-1/2 right-3 cursor-pointer" />
                </form>
              </div>
            </li>
            {searchResult && typeof searchResult !== "string" && (
              <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 z-50 bg-transparent p-4 rounded-md shadow-md">
                <Link to={searchResult.link}>{/* Tampilkan nama menu yang ditemukan */}</Link>
              </div>
            )}
            {/* Tampilkan pesan jika pencarian tidak ditemukan */}
            {searchResult === "Pencarian tidak ditemukan" && (
              <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 z-50 bg-transparent w-[600px] rounded-md shadow-md">{orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}</div>
            )}
            <div className="mb-20 translate-x-16 lg:flex hidden md:hidden">
              <DarkMode />
            </div>
          </ul>
        </div>
      </div>
      {/* Mobile Menu (Hidden on Desktop) */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <div className="container">
            <ul className="flex flex-col items-center gap-3 py-2">
              {Menu1.map((menuItem, index) => (
                <li
                  key={index}
                  className="group relative w-[400px] cursor-pointer hover:bg-slate-400 hover:px-4 hover:b"
                  onClick={(e) => {
                    handleMenuClick(menuItem.link);
                    if (menuItem.name === "Hubungi Kami") {
                      scrollToBottom(e);
                    }
                  }}
                >
                  <Link to={menuItem.link} className="flex items-center justify-center gap-[2px] py-2">
                    {menuItem.name}
                    <span>{menuItem.dropdown && <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />}</span>
                  </Link>
                  {menuItem.dropdown && (
                    <div className="absolute z-[9999] hidden group-hover:inline-block w-[200px] -translate-y-12 rounded-md bg-white p-2 text-black shadow-md">
                      <ul>
                        {menuItem.dropdown.map((subMenuItem, subIndex) => (
                          <li key={subIndex} className="group relative cursor-pointer">
                            <Link to={subMenuItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">
                              {subMenuItem.name}
                              <span className="">{subMenuItem.dropdown && <FaCaretDown className="transition-all duration-200 group-hover:rotate-0" />}</span>
                            </Link>
                            {subMenuItem.dropdown && (
                              <div className="group-hover:block absolute top-14 -ml-2 mt-0 w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                                <ul>
                                  {subMenuItem.dropdown.map((nestedMenuItem, nestedIndex) => (
                                    <li key={nestedIndex} className="cursor-pointer">
                                      <Link to={nestedMenuItem.link} className="block w-full rounded-md p-2 hover:bg-primary/20">
                                        {nestedMenuItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              {/* Search Bar (Always Visible) */}
              <li className="relative group cursor-pointer">
                <div className="relative group ml text-xl mt-1/2">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder=""
                      className="w-[40px] sm:w-[40px] group-hover:w-[150px] transition-all duration-300 rounded-full border border-gray-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                      value={searchQuery}
                      onChange={handleInputChange}
                    />
                    <IoMdSearch type="submit" className="text-gray-500 group-hover:text-primary absolute top-1/2 dark:text-white -translate-y-1/2 right-3 cursor-pointer" />
                  </form>
                </div>
              </li>
              {/* Popup for Search Result */}
              {searchResult === "Pencarian tidak ditemukan" && (
                <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 z-50 bg-transparent w-[600px] rounded-md shadow-md">{orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}</div>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

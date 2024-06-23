import React, { useEffect } from "react";

const Sanitasi = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 2.5;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);
  return (
    <div
      className="my-10 lg:h-[500px] lg:w-[90%] w-screen border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="flex items-center justify-center w-max container">
          <div className="lg:w-[600px] w-[380px]">
            <h4 className="font-bold text-[19px] my-5 text-center ">Bahan Pengembangan Sanitasi Total Berbasis Masyarakat</h4>
            <table className="lg:w-full w-[94%] border-collapse border border-gray-400 mb-10">
              <thead className="bg-gray-300 dark:bg-gray-900">
                {" "}
                <tr>
                  <th className="text-center border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 dark:bg-gray-900 z-10">No</th>
                  <th className="text-center border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 dark:bg-gray-900 z-10">Nama</th>
                  <th className="text-center border border-gray-400 px-4 py-2 sticky top-0 bg-gray-300 dark:bg-gray-900 z-10">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <a className="" href="#">
                      Perbup Sleman Nomor 4 Tahun 2020 tentang Sanitasi Total Berbasis Masyarakat
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div data-aos="zoom-in">
          <div className="my-6 cursor-pointer lg:ml-40 lg:mt-20">
            <iframe
              width="100%"
              height="503"
              src="https://www.youtube.com/embed/A6Xi_1qIJk8"
              title="Cita Mas Jajar Plus Vaksinasi Cegah Covid-19"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="lg:w-[800px]"
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sanitasi;

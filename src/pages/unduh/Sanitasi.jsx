import React from "react";

const Sanitasi = () => {
  return (
    <div className="lg:h-[500px] ml-32 lg:ml-0 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto">
      <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="flex items-center justify-center w-max container">
          <div className="lg:w-[600px] w-[380px]">
            <h4 className="font-bold text-[19px] my-10 text-center ">Bahan Pengembangan Sanitasi Total Berbasis Masyarakat</h4>
            <table className="w-full border-collapse border border-gray-400">
              <thead className="bg-gray-300 dark: bg-gray-900">
                <tr>
                  <th className="text-left border border-gray-400 px-4 py-2">No</th>
                  <th className="text-left border border-gray-400 px-4 py-2">Nama</th>
                  <th className="text-left border border-gray-400 px-4 py-2">Aksi</th>
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
        <div data-aos="zoom-in">
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
        </div>
      </div>
    </div>
  );
};

export default Sanitasi;

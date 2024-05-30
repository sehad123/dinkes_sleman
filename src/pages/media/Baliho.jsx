import React from "react";

const Baliho = () => {
  return (
    <div className="bg-white lg:translate-x-0 translate-x-16 py-10 dark:bg-gray-900 dark:pb-[70px] dark:text-white duration-200">
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[700px] w-[380px]">
          <h4 className="font-bold text-[16px] mb-4 text-center">BALIHO</h4>
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
                    Cegah Stunting pada Anak
                  </a>
                </td>{" "}
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Inovasi Sleman Sigap Kendali dan Atasi Tuberkulosis (SIKAT TB)
                  </a>
                </td>{" "}
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Inovasi Sleman Sakti Tingkatkan Universal Health Coverage
                  </a>
                </td>{" "}
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Inovasi Sleman Emergency Services (SES)
                  </a>
                </td>{" "}
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Cegah Anemia pada Remaja
                  </a>
                </td>{" "}
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Baliho;

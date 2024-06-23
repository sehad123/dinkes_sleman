import React, { useEffect } from "react";

const Iklan = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  return (
    <div
      className="my-10 lg:h-[500px] lg:w-[90%] w-screen  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[600px] w-[380px]">
          <h4 className="font-bold text-[19px] my-5 text-center">Iklan Layanan Masyarakat</h4>
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
                    Sleman Emergency Services (SES)
                  </a>
                </td>
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
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Inovasi Pengendalian Konsumsi Rokok Gerakan Keluarga Sehat Bebas Asap Rokok (GASBRO Mobile)
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Upaya Wujudkan Universal Health Coverage
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Sanitasi Total Berbasis Masyarakat (STBM) di Kabupaten Sleman
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">6</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Inovasi Tolong Tangani dan Fasilitasi Bumil dan Balita dari Risiko Tinggi (TOTALITAS BESTI)
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">7</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Inovasi Layanan Masyarakat Tangguh Sehat Jiwa (MATA HATI)
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">8</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Sertifikat Produksi Pangan Industri Rumah Tangga (SP PIRT)
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">9</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Ayo Lakukan GERMAS
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">10</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Yuk Cegah Diabetes Mellitus
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">11</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Cegah Stunting itu Penting!
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">12</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Cegah Anemia dengan GETAR Thala
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">13</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Cegah dan Kendalikan Hipertensi sejak Dini
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
    </div>
  );
};

export default Iklan;

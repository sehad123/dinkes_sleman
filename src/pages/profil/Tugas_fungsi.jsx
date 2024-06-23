import React, { useEffect } from "react";

const TugasFungsi = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);
  return (
    <div
      className="my-10 lg:h-[440px] lg:w-[90%] w-screen  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-screen overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="container ">
        <div className="container">
          {/* header section */}
          <div className="text-center mt-5 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Tugas dan Fungsi
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in" className="mt-5 text-justify">
            <p>Dinas Kesehatan mempunyai tugas membantu Bupati melaksanakan urusan pemerintahan dan tugas pembantuan di bidang kesehatan.</p>
            <p className="mt-5"> - Dinas Kesehatan dalam melaksanakan tugas mempunyai fungsi:</p>
            <div className="ml-6 mx-auto text-justify">
              <table className="w-full border-collapse mb-10">
                <tbody>
                  <tr>
                    <td className=" px-1 text-center">a.</td>
                    <td className=" px-1  ">Penyusunan rencana kerja Dinas Kesehatan;</td>
                  </tr>
                  <tr>
                    <td className=" px-1 text-center">b.</td>
                    <td className=" px-1  ">Perumusan kebijakan teknis urusan pemerintahan bidang kesehatan;</td>
                  </tr>
                  <tr>
                    <td className=" px-1  pb-7 text-center">c.</td>
                    <td className=" px-1  ">Pelaksanaan, pelayanan, pembinaan, dan pengendalian urusan pemerintahan bidang kesehatan;</td>
                  </tr>
                  <tr>
                    <td className=" px-1 text-center">d.</td>
                    <td className=" px-1  ">Evaluasi dan pelaporan pelaksanaan urusan pemerintahan bidang kesehatan;</td>
                  </tr>
                  <tr>
                    <td className=" px-1   text-center">e.</td>
                    <td className=" px-1  ">Pelaksanaan kesekretariatan dinas; dan</td>
                  </tr>
                  <tr>
                    <td className=" px-1   text-center">f.</td>
                    <td className=" px-1  ">Pelaksanaan tugas lain yang diberikan oleh Bupati sesuai tugas dan fungsinya dan/atau sesuai dengan ketentuan peraturan perundangundangan.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TugasFungsi;

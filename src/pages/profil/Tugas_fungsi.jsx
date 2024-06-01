import React from "react";

const TugasFungsi = () => {
  return (
    <div
      className="lg:translate-x-0 translate-x-20 lg:h-[440px] lg:w-[850px] w-[480px]  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-[600px] my-10 overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="container py-10 dark:py-20">
        <div className="container">
          {/* header section */}
          <div className="text-center -mt-5 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Tugas dan Fungsi
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in" className="mt-5">
            <p>Dinas Kesehatan mempunyai tugas membantu Bupati melaksanakan urusan pemerintahan dan tugas pembantuan di bidang kesehatan.</p>
            <p className="mt-5"> - Dinas Kesehatan dalam melaksanakan tugas mempunyai fungsi:</p>
            <ol className="pl-5">
              <li>a. Penyusunan rencana kerja Dinas Kesehatan;</li>
              <li>b. Perumusan kebijakan teknis urusan pemerintahan bidang kesehatan;</li>
              <li>c. Pelaksanaan, pelayanan, pembinaan, dan pengendalian urusan pemerintahan bidang kesehatan;</li>
              <li>d. Evaluasi dan pelaporan pelaksanaan urusan pemerintahan bidang kesehatan;</li>
              <li>e. Pelaksanaan kesekretariatan dinas; dan</li>
              <li>f. Pelaksanaan tugas lain yang diberikan oleh Bupati sesuai tugas dan fungsinya dan/atau sesuai dengan ketentuan peraturan perundangundangan.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TugasFungsi;

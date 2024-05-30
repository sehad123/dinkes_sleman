import React from "react";

const TugasFungsi = () => {
  return (
    <div className="bg-white lg:h-[480px] lg:translate-x-0 translate-x-16 dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-10 dark:py-20">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Tugas dan Fungsi
            </h1>
          </div>

          {/* Testimonial cards */}
          <div data-aos="zoom-in">
            <p>Dinas Kesehatan mempunyai tugas membantu Bupati melaksanakan urusan pemerintahan dan tugas pembantuan di bidang kesehatan.</p>
            <p>Dinas Kesehatan dalam melaksanakan tugas mempunyai fungsi:</p>
            <ol>
              <li>a. penyusunan rencana kerja Dinas Kesehatan;</li>
              <li>b. perumusan kebijakan teknis urusan pemerintahan bidang kesehatan;</li>
              <li>c. pelaksanaan, pelayanan, pembinaan, dan pengendalian urusan pemerintahan bidang kesehatan;</li>
              <li>d. evaluasi dan pelaporan pelaksanaan urusan pemerintahan bidang kesehatan;</li>
              <li>e. pelaksanaan kesekretariatan dinas; dan</li>
              <li>f. pelaksanaan tugas lain yang diberikan oleh Bupati sesuai tugas dan fungsinya dan/atau sesuai dengan ketentuan peraturan perundangundangan.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TugasFungsi;

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const Garis1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  const canvasRef1 = useRef(null);

  useEffect(() => {
    // Membuat grafik garis menggunakan Chart.js
    const drawLineChart2 = () => {
      const canvas = canvasRef1.current;
      const ctx = canvas.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2017", "2018", "2019", "2020", "2021"],
          datasets: [
            {
              label: "AKI",
              borderColor: "orange",
              data: [56, 58, 42, 50, 59],
              fill: false,
            },
            {
              label: "Jumlah Kematian Ibu",
              borderColor: "blue",
              data: [8, 6, 7, 8, 8],
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Jumlah dan Angka Kematian Ibu Tahun 2016 - 2021",
            },
          },
        },
      });
    };

    drawLineChart2();
  }, []);
  return (
    <div
      className="lg:translate-x-0 translate-x-20 my-10 lg:h-[500px] h-[400px] lg:w-[850px] w-[480px]  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="text-center mt-10 w-[400px] mx-auto">
        <h1 data-aos="fade-up" className="text-xl font-bold">
          Jumlah dan Angka Kematian Ibu Tahun 2016 - 2021
        </h1>
      </div>
      <div data-aos="fade-up" className="my-10 mx-auto w-[400px] lg:w-[500px]">
        <canvas ref={canvasRef1} width={800} height={500} />
      </div>
    </div>
  );
};

export default Garis1;

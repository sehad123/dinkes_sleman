import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const Batang = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  const canvasRef1 = useRef(null);

  useEffect(() => {
    // Membuat grafik batang menggunakan Chart.js
    const drawBarChart = () => {
      const canvas = canvasRef1.current;
      const ctx = canvas.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
          datasets: [
            {
              label: "Target",
              backgroundColor: "orange",
              data: [1080, 1412, 1814, 2047, 2546, 2012],
            },
            {
              label: "Cases",
              backgroundColor: "blue",
              data: [846, 1016, 1116, 776, 822, 654],
            },
            {
              label: "Persentase",
              backgroundColor: "red",
              data: [79, 96, 62, 38, 20, 40],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "INFOGRAFIS CAPAIAN 5 PROGRAM KESEHATAN PRIORITAS NASIONAL",
            },
          },
        },
      });
    };

    drawBarChart();
  }, []);
  return (
    <div className="ml-32 lg:ml-0 lg:h-[550px] bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto">
      <div className="text-center mt-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-xl font-bold">
          Capaian TB Tahun 2017 - 2021
        </h1>
      </div>
      <div data-aos="fade-up" className="my-10 mx-auto w-[400px] lg:w-[500px]">
        <canvas ref={canvasRef1} width={800} height={500} />
      </div>
    </div>
  );
};

export default Batang;

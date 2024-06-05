// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js";

// const Piramida = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
//   }, []);
//   useEffect(() => {
//     // Menggambar piramida penduduk menggunakan Chart.js
//     const drawPopulationPyramid = () => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");

//       // Data penduduk laki-laki dan perempuan per kelompok umur
//       const malePopulation = [1000, 1200, 1300, 1400, 1500, 1400, 1300, 1200, 1100, 1000, 900, 800, 700];
//       const femalePopulation = [950, 1100, 1200, 1300, 1400, 1350, 1250, 1150, 1050, 950, 850, 750, 650];

//       // Labels umur dengan rentang interval 10 tahun
//       const ageLabels = ["0-4", "10-14", "20-24", "30-34", "40-44", "50-54", "60-64", "70-74"];

//       new Chart(ctx, {
//         type: "horizontalBar",
//         data: {
//           labels: ageLabels,
//           datasets: [
//             {
//               label: "Perempuan",
//               backgroundColor: "red",
//               data: femalePopulation.map((value) => -value), // Negative value for displaying bars on the left side
//             },
//             {
//               label: "Laki-laki",
//               backgroundColor: "blue",
//               data: malePopulation,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             title: {
//               display: true,
//               text: "Piramida Penduduk",
//             },
//           },
//           scales: {
//             x: {
//               stacked: true,
//               ticks: {
//                 callback: (value) => Math.abs(value), // Remove negative sign from x-axis ticks
//               },
//               title: {
//                 display: true,
//                 text: "Jumlah Penduduk",
//               },
//             },
//             y: {
//               stacked: true,
//               title: {
//                 display: true,
//                 text: "Rentang Umur",
//               },
//             },
//           },
//         },
//       });
//     };

//     drawPopulationPyramid();
//   }, []);

//   const canvasRef = useRef(null);

//   return (
//     <div
//       className="lg:translate-x-0 translate-x-20 my-10 lg:h-[500px] h-[400px] lg:w-[850px] w-[480px]  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       {" "}
//       <div className="text-center mt-10 w-[400px] mx-auto">
//         <h1 data-aos="fade-up" className="text-xl font-bold">
//           Piramida Penduduk Menurut Golongan Umur di Kabupaten Sleman Tahun 2021
//         </h1>
//       </div>
//       <div data-aos="fade-up" className="my-10 mx-auto w-[400px] lg:w-[500px]">
//         <canvas ref={canvasRef} width={800} height={500} />
//       </div>
//     </div>
//   );
// };

// export default Piramida;

import React, { useEffect } from "react";
import Chart from "chart.js";

const PopulationPyramid = () => {
  useEffect(() => {
    const data = {
      labels: ["0-4", "10-14", "20-24", "30-34", "40-44", "50-54", "60-64", "70-74"],
      males: [1000, 1200, 1300, 1400, 1500, 1400, 1300, 1200, 1100, 1000, 900, 800, 700],
      females: [950, 1100, 1200, 1300, 1400, 1350, 1250, 1150, 1050, 950, 850, 750, 650],
    };

    const ctx = document.getElementById("populationChart");
    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Female",
            data: data.females.map((value) => -value), // Negative values to make it left-aligned
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Male",
            data: data.males,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                callback: function (value) {
                  return Math.abs(value);
                },
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div
      className="lg:translate-x-0 translate-x-20 my-10 lg:h-[500px] h-[400px] lg:w-[850px] w-[480px]  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="text-center mt-10 w-[400px] mx-auto">
        <h1 data-aos="fade-up" className="text-xl font-bold">
          Piramida Penduduk Menurut Golongan Umur di Kabupaten Sleman Tahun 2021
        </h1>
      </div>
      <div data-aos="fade-up" className="my-10 mx-auto w-[400px] lg:w-[500px]">
        <canvas id="populationChart" width={800} height={500} />
      </div>
    </div>
  );
};
export default PopulationPyramid;

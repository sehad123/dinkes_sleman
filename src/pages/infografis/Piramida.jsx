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
//               label: "Laki-laki",
//               backgroundColor: "blue",
//               data: malePopulation,
//             },
//             {
//               label: "Perempuan",
//               backgroundColor: "red",
//               data: femalePopulation.map((value) => -value), // Negative value for displaying bars on the left side
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
//     <div className="lg:h-[500px] bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto">
//       <div className="text-center mt-10 max-w-[600px] mx-auto">
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

import React from "react";

const Piramida = () => {
  return <div>Piramida</div>;
};

export default Piramida;

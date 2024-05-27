// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js";

// const Garis2 = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
//   }, []);
//   const canvasRef1 = useRef(null);

//   useEffect(() => {
//     // Membuat grafik garis menggunakan Chart.js
//     const drawLineChart1 = () => {
//       const canvas = canvasRef1.current;
//       const ctx = canvas.getContext("2d");

//       new Chart(ctx, {
//         type: "line",
//         data: {
//           labels: ["2019", "2020", "2021"],
//           datasets: [
//             {
//               label: "Pelayanan Kesehatan Penderita Hipertensi",
//               borderColor: "blue",
//               data: [80, 60, 63],
//               fill: false,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             title: {
//               display: true,
//               text: "Pelayanan Kesehatan Penderita Hipertensi tahun 2019-2021",
//             },
//           },
//           scales: {
//             x: {
//               display: true,
//               title: {
//                 display: true,
//                 text: "Tahun",
//               },
//             },
//             y: {
//               display: true,
//               title: {
//                 display: true,
//                 text: "Persentase",
//               },
//             },
//           },
//         },
//       });
//     };

//     drawLineChart1();
//   }, []);
//   return (
//     <div className="lg:h-[500px] bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-y-auto">
//       <div className="text-center mt-10 max-w-[600px] mx-auto">
//         <h1 data-aos="fade-up" className="text-xl font-bold">
//           Pelayanan Kesehatan Penderita Hipertensi tahun 2019-2021
//         </h1>
//       </div>
//       <div data-aos="fade-up" className="my-10 mx-auto w-[400px] lg:w-[500px]">
//         <canvas ref={canvasRef1} width={800} height={500} />
//       </div>
//     </div>
//   );
// };

// export default Garis2;

import React from "react";

const Garis2 = () => {
  return <div>Garis2</div>;
};

export default Garis2;

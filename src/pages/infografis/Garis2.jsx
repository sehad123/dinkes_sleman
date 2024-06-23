import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";

const Garis2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  const canvasRef1 = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [minYear, setMinYear] = useState(2019);
  const [maxYear, setMaxYear] = useState(2021);

  const allData = {
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        label: "Pelayanan Kesehatan Penderita Hipertensi",
        borderColor: "blue",
        data: [80, 60, 63],
        fill: false,
      },
    ],
  };

  const filterDataByYear = (data, minYear, maxYear) => {
    const startIndex = data.labels.indexOf(String(minYear));
    const endIndex = data.labels.indexOf(String(maxYear)) + 1;

    const filteredLabels = data.labels.slice(startIndex, endIndex);
    const filteredDatasets = data.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.slice(startIndex, endIndex),
    }));

    return { labels: filteredLabels, datasets: filteredDatasets };
  };

  useEffect(() => {
    const canvas = canvasRef1.current;
    const ctx = canvas.getContext("2d");

    const filteredData = filterDataByYear(allData, minYear, maxYear);

    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: filteredData,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Pelayanan Kesehatan Penderita Hipertensi tahun 2019-2021",
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Tahun",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Persentase",
            },
          },
        },
      },
    });

    setChartInstance(newChartInstance);
  }, [minYear, maxYear]);

  const handleMinYearChange = (e) => {
    setMinYear(parseInt(e.target.value));
  };

  const handleMaxYearChange = (e) => {
    setMaxYear(parseInt(e.target.value));
  };

  return (
    <div
      className="lg:h-[530px] h-[500px] lg:w-[90%] w-screen border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="text-center mt-5 w-screen lg:w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-xl font-bold">
          Pelayanan Penderita Hipertensi
        </h1>
        <div className="flex mt-4 px-10 items-center space-x-2">
          <label htmlFor="minYear" className="text-sm font-medium text-gray-700 dark:text-white">
            From
          </label>
          <select
            id="minYear"
            name="minYear"
            value={minYear}
            onChange={handleMinYearChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {[2019, 2020, 2021].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label htmlFor="maxYear" className="text-sm font-medium text-gray-700 dark:text-white">
            To
          </label>
          <select
            id="maxYear"
            name="maxYear"
            value={maxYear}
            onChange={handleMaxYearChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {[2019, 2020, 2021].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div data-aos="fade-up" className="my-10 mx-auto w-screen lg:w-[500px]">
        <canvas ref={canvasRef1} width={800} height={500} />
      </div>
    </div>
  );
};

export default Garis2;

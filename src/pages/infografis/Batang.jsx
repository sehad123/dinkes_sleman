import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";

const Batang = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);

  const canvasRef1 = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [minYear, setMinYear] = useState(2016);
  const [maxYear, setMaxYear] = useState(2021);

  const allData = {
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
      type: "bar",
      data: filteredData,
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
      <div className="text-center mt-10 w-screen lg:w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-xl font-bold">
          Capaian TB Tahun 2017 - 2021
        </h1>
        <div className="flex items-center space-x-2 px-10">
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
            {[2016, 2017, 2018, 2019, 2020, 2021].map((year) => (
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
            {[2016, 2017, 2018, 2019, 2020, 2021].map((year) => (
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

export default Batang;

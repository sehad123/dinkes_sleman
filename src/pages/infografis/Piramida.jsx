import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";

const PopulationPyramid = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);

  const [chartInstance, setChartInstance] = useState(null);
  const canvasRef = useRef(null);
  const [minAge, setMinAge] = useState("0-4");
  const [maxAge, setMaxAge] = useState("70-74");

  const allData = {
    labels: ["0-4", "10-14", "20-24", "30-34", "40-44", "50-54", "60-64", "70-74"],
    males: [1000, 1200, 1300, 1400, 1500, 1400, 1300, 1200],
    females: [950, 1100, 1200, 1300, 1400, 1350, 1250, 1150],
  };

  const filterDataByAgeGroup = (data, minAge, maxAge) => {
    const startIndex = data.labels.indexOf(minAge);
    const endIndex = data.labels.indexOf(maxAge) + 1;

    const filteredLabels = data.labels.slice(startIndex, endIndex);
    const filteredMales = data.males.slice(startIndex, endIndex);
    const filteredFemales = data.females.slice(startIndex, endIndex);

    return {
      labels: filteredLabels,
      males: filteredMales,
      females: filteredFemales,
    };
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const filteredData = filterDataByAgeGroup(allData, minAge, maxAge);

    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: filteredData.labels,
        datasets: [
          {
            label: "Female",
            data: filteredData.females.map((value) => -value), // Negative values to make it left-aligned
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Male",
            data: filteredData.males,
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

    setChartInstance(newChartInstance);
  }, [minAge, maxAge]);

  const handleMinAgeChange = (e) => {
    setMinAge(e.target.value);
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(e.target.value);
  };

  return (
    <div
      className="lg:h-[530px] h-[500px] lg:w-[90%] w-screen border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="text-center mt-10 w-screen lg:w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-2xl font-bold">
          Piramida Penduduk Menurut Golongan Umur Tahun 2021
        </h1>
      </div>
      <div data-aos="fade-up" className="my-6 mx-auto w-screen lg:w-[500px]">
        <canvas ref={canvasRef} width={800} height={500} />
      </div>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="minAge" className="text-sm font-medium text-gray-700 dark:text-white">
            From
          </label>
          <select
            id="minAge"
            name="minAge"
            value={minAge}
            onChange={handleMinAgeChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {allData.labels.map((ageGroup) => (
              <option key={ageGroup} value={ageGroup}>
                {ageGroup}
              </option>
            ))}
          </select>
          <label htmlFor="maxAge" className="text-sm font-medium text-gray-700 dark:text-white">
            To
          </label>
          <select
            id="maxAge"
            name="maxAge"
            value={maxAge}
            onChange={handleMaxAgeChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {allData.labels.map((ageGroup) => (
              <option key={ageGroup} value={ageGroup}>
                {ageGroup}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PopulationPyramid;

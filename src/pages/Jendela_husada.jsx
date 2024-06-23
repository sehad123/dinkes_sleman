import React, { useEffect } from "react";
import husada from "../assets/husada/h1.jpg";
import husada2 from "../assets/husada/h2.jpeg";
import husada3 from "../assets/husada/h3.jpg";
import husada4 from "../assets/husada/h4.jpg";
import husada5 from "../assets/husada/h5.jpg";
import husada6 from "../assets/husada/h6.jpg";
import husada7 from "../assets/husada/h7.jpg";
import husada8 from "../assets/husada/h8.jpg";
import husada9 from "../assets/husada/h9.jpg";

const Jendela_husada = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Bergulir ke paling atas saat halaman dimuat
  }, []);
  // Data untuk setiap konten
  const contents = [
    {
      image: husada,
      title: "Jendela Husada Edisi 23",
    },
    {
      image: husada2,
      title: "Jendela Husada Edisi 22",
    },
    {
      image: husada3,
      title: "Jendela Husada Edisi 21",
    },
    {
      image: husada4,
      title: "Jendela Husada Edisi 20",
    },
    {
      image: husada5,
      title: "Jendela Husada Edisi 19",
    },
    {
      image: husada6,
      title: "Jendela Husada Edisi 18",
    },
    {
      image: husada7,
      title: "Jendela Husada Edisi 17",
    },
    {
      image: husada8,
      title: "Jendela Husada Edisi 16",
    },
    {
      image: husada9,
      title: "Jendela Husada Edisi 15",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 py-10">
      <div data-aos="fade-up" className="container mx-auto">
        {/* header section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Jendela Husada</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {/* Mapping data untuk membuat container */}
          {contents.map((content, index) => (
            <div data-aos="fade-up" key={index} className="dark:border-white lg: lg:h-[400px] h-[530px]">
              {/* Image section */}
              <div className="relative">
                <img src={content.image} alt="" className="w-[330px]  lg:h-auto h-[420px] object-cover" />
              </div>

              {/* Text details section */}
              <div className="py-2 mr-10">
                <h4 className="font-bold text-center">{content.title}</h4>

                {/* <p className="mt-3">
                  <a className="p-2 bg-blue-700 text-white" href="/berita/dua-tersangka-illegal-logging-di-belitung-timur-berhasil-ditangkap-oleh-tim-operasi-gabungan">
                    Lihat Detail
                  </a>
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jendela_husada;

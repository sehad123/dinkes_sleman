import React from "react";
import footerLogo from "../../assets/logo.jpeg";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  // width: "100%",
};

const FooterLinks = [
  {
    title: "Alamat : Jl. Rorojonggrang No.6, Beran, Tridadi, Sleman, Daerah Istimewa Yogyakarta (55511)",
    link: "/#",
  },
  {
    title: "Telp : (0274) 868409",
    link: "/#about",
  },
  {
    title: "Fax : (0274) 868409",
    link: "/#contact",
  },
  {
    title: "Email: dinkes@slemankab.go.id",
    link: "/#blog",
  },
  {
    title: " web: http://dinkes.slemankab.go.id",
    link: "/#blog",
  },
];
const FooterPengunjung = [
  {
    title: "Total visitors:      1497862",
    link: "/#",
  },
  {
    title: "Visitor today : 44",
    link: "/#about",
  },
  {
    title: "Visitor yesterday : 381",
    link: "/#about",
  },
  {
    title: "Visitor last week : 1921",
    link: "/#about",
  },
  {
    title: "Visitor per day : 268",
    link: "/#about",
  },
  {
    title: "visitor currently online : 3",
    link: "/#contact",
  },
  {
    title: "Counter starts on : 3 January 2011",
    link: "/#blog",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={BannerImg} className="w-full lg:w-[100%] text-white dark:-mt-6 dark:border-t border-white">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-4 lg:pl-0 pl-6 pr-6 ">
            <h1 className="lg:text-xl sm:w-[500px] sm:text-2xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" width={40} className="lg:max-w-[50px] sm:max-w-[25px]" />
              Dinas Kesehatan Sleman
            </h1>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6684357739055!2d110.35396307486903!3d-7.718679092299305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58ca23acf74b%3A0x4288252dd3a41611!2sDinas%20Kesehatan%20Kabupaten%20Sleman!5e0!3m2!1sen!2sid!4v1715754790719!5m2!1sen!2sid"
              height="250"
              style={{ border: 0, width: "100%" }} // width: 100% untuk tampilan desktop
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:max-w-[400px] sm:max-w-[320px]" // Batasi lebar hingga 320px pada layar kecil
            ></iframe>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="ml-6 mt-2 lg:ml-32 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:mr-6 sm:-translate-x-6 md:grid-cols-3 gap-6 md:gap-10">
              <div>
                <div className="py-8 w-[300px] ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Kontak</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 w-max lg:translate-x-48">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Statistik Pengunjung</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterPengunjung.map((link) => (
                      <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Arrow up button */}
      <div className="fixed bottom-10 right-10 bg-white p-3 rounded-full shadow-lg cursor-pointer" onClick={scrollToTop}>
        <FaArrowUp className="text-primary text-2xl" />
      </div>
    </div>
  );
};

export default Footer;

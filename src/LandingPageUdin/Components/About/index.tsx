import React from "react";
import Satuan from "./Satuan";
// import Promotion from "./Promotion";
// import UdinPay from "./UdinPay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  {
    src: "/images/budiarie.png",
    quote: `Kopdes Merah Putih Menjadi Momentum Peningkatan Kesejahteraan Masyarakat`,
    author: "- Menteri Koperasi Budi Arie Setiadi",
  },
  {
    src: "/images/prabowo.png",
    quote: `Koperasi sebagai pilar utama ekonomi kerakyatan`,
    author: "- Presiden RI",
  },
  {
    src: "/images/zulhas.png",
    quote: `Kopdes Merah Putih, Bangun Desa, Indonesia Jaya`,
    author: "- Menteri Koordinator Bidang Pangan Zulkifli Hasan",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const About: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto  h-auto bg-white  mt-16">
      <div className="grid mb-[50px] rounded-[16px] bg-white lg:rounded-[32px] md:rounded-[10px]  md:h-[320px] lg:h-[550px] opacity-100 md:grid-cols-2 grid-cols-1 gap-10 items-center lg:mx-[56px] mx-[16px] md:mx-[32px]">
        <div className="font-poppins md:text-left pt-[20px] md:pt-0 ">
          <h1 className="lg:text-[25px] font-poppins font-semibold text-[18px]  text-[#2C5C52] ">Tentang Koperasi Desa/Kelurahan Merah Putih</h1>
          <p className="lg:text-[18px] lg:mt-[20px] mt-[16px]  text-[14px] pe-[24px] text-justify ">
            Undang-Undang 1945 Pasal 33 menegaskan bahwa perekonomian Indonesia disusun atas usaha bersama yang didasarkan pada asas kekeluargaan. Presiden Republik Indonesia sangat mendukung segala upaya untuk menggerakkan koperasi di
            seluruh Indonesia, mencerminkan komitmen pemerintah dalam memperkuat ekonomi kerakyatan.
          </p>

          <p className="lg:text-[18px] lg:mt-[20px] mt-[16px]  text-[14px] pe-[24px] text-justify ">
            Pembentukan Koperasi Desa/Kelurahan Merah Putih didorong oleh kebutuhan untuk meningkatkan kesejahteraan ekonomi masyarakat desa melalui pendekatan ekonomi kerakyatan yang berbasis pada prinsip gotong royong, kekeluargaan, dan
            saling membantu.
          </p>

          <p className="lg:text-[18px] lg:mt-[20px] mt-[16px]  text-[14px] pe-[24px] text-justify">
            Dalam retreat kepala daerah di Akmil Magelang pada 21-28 Februari 2025, Presiden Prabowo menekankan pentingnya pembentukan Koperasi Desa sebagai upaya untuk meningkatkan ketahanan pangan.
          </p>

          <p className="lg:text-[18px] lg:mt-[20px] mt-[16px]  text-[14px] pe-[24px] text-justify ">
            Pada Rapat Terbatas di Istana Negara pada 3 Maret 2025, Presiden RI mengumumkan peluncuran 80.000 koperasi desa dengan nama Koperasi Desa/Kelurahan Merah Putih, yang akan dilakukan pada Hari Koperasi Nasional pada 12 Juli 2025.
            Inisiatif ini bertujuan untuk memperkuat ekonomi desa dan meningkatkan kesejahteraan masyarakat melalui koperasi.
          </p>
        </div>

        <div className="lg:w-[588px]   md:w-[300px]   h-full ">
          <Slider {...settings}>
            {sliderImages.map((item, index) => (
              <div key={index} className="">
                <img src={item.src} alt={`slide-${index}`} className="w-full h-full object-contain" />
                <div className=" text-center bg-white/80 p-4 rounded-t-xl">
                  <p className="text-[#2C5C52] font-semibold italic text-[14px] md:text-[16px] lg:text-[18px]">"{item.quote}"</p>
                  <p className="text-[#2C5C52] text-[12px] md:text-[14px] lg:text-[16px]">{item.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Satuan />
      {/* <Promotion /> */}
      {/* <UdinPay /> */}
    </section>
  );
};

export default About;

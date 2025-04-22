import Marquee from "react-fast-marquee";

const logos = [
  "/logo/Logo_Kemenko_Pangan.png",
  "/logo/kemnkop.png",
  "/logo/bpkp.png",
  "/logo/pajak.png",
  "/logo/kemenkes.png",
  "/logo/kelautan.png",
  "/logo/pengayoman.png",
  "/logo/kemensos.png",
  "/logo/bumn.png",
  "/logo/badangizi.png",
  "/logo/komdigi.png",
  "/logo/pangan.png",
];

// const logos2 = ["/logo/kelautan.png", "/logo/pengayoman.png", "/logo/sosial.png", "/logo/bumn.png", "/logo/badangizi.png", "/logo/komdigi.png"];

const LogoMarquee = () => {
  return (
    <section className="bg-white py-6 mt-24">
      <h2 className="text-center font-bold text-[#2C5C52] text-lg md:text-2xl mb-8 hidden md:block">Satuan Tugas Koperasi Desa/Kelurahan Merah Putih</h2>
      <h2 className="text-center font-bold text-[#2C5C52] text-lg md:text-2xl mb-8  block md:hidden">
        Satuan Tugas Koperasi <br />
        Desa/Kelurahan Merah Putih
      </h2>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex min-w-full justify-evenly items-center gap-10">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className="h-[80px] w-[80px] me-12 object-contain" />
          ))}
        </div>
      </Marquee>

      {/* <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex justify-center gap-6">
          {logos2.map((logo, index) => (
            <img key={index} src={logo} alt={``} className="h-[80px] w-[80px]  object-contain" />
          ))}
        </div>
      </Marquee> */}
    </section>
  );
};

export default LogoMarquee;

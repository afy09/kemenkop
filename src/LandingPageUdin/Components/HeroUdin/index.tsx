import React, { useEffect, useState } from "react";

interface NavbarProps {
  handleMenuClick: (page: string) => void;
}

const targetDate = new Date("2025-07-12T00:00:00");
const HeroUdin: React.FC<NavbarProps> = ({ handleMenuClick }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        src="/video/videoalam.mp4" // taruh video di public/videos/
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-4xl">
          Hitung Mundur Peluncuran Koperasi <br /> Desa/Kelurahan Merah Putih <br /> 12 Juli 2025
        </h1>

        <div className="flex gap-6 md:gap-8  mt-8 text-3xl md:text-5xl font-bold">
          <div className="flex flex-col items-center bg-white rounded-lg px-4 py-2 bg-opacity-30">
            <span>{countdown.days}</span>
            <span className="text-sm font-medium">Hari</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg px-4 py-2 bg-opacity-30">
            <span>{countdown.hours}</span>
            <span className="text-sm font-medium">Jam</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg px-4 py-2 bg-opacity-30">
            <span>{countdown.minutes}</span>
            <span className="text-sm font-medium ">Menit</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg px-4 py-2 bg-opacity-30">
            <span>{countdown.seconds}</span>
            <span className="text-sm font-medium">Detik</span>
          </div>
        </div>

        <button onClick={() => alert("Daftar Sekarang")} className="mt-10 bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg py-3 px-8 rounded-full">
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
};

export default HeroUdin;

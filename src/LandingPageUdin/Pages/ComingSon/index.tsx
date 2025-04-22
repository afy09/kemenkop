import React, { useState, useEffect, useMemo } from "react";
import { BgCamingson } from "../../Assets/Images";
import Footer from "../../Components/Footer";

const CamingSon: React.FC = () => {
  // Set the target date to 57 days from now
  const targetDate = useMemo(() => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + 57 * 24 * 60 * 60 * 1000);
    return futureDate;
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeLeft(targetDate: Date) {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={BgCamingson}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="h-[500px] lg:w-[724px] md:w-[550px] lg:h-[500px] md:h-[700px] flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-8">
            <h1 className="relative text-4xl font-bold md:text-[56px] lg:text-[80px] text-[40px]">
              <span className="absolute inset-0 mt-[3px] text-[#F15A24]">
                Segera Hadir fitur
              </span>
              <span className="relative text-[#252525]">
                Segera Hadir fitur
              </span>
            </h1>

            <h2 className="relative text-4xl font-bold mt-2 md:mt-[30px] lg:mt-[60px] md:text-[56px] lg:text-[80px] text-[40px]">
              <span className="absolute inset-0 mt-[3px] text-[#F15A24]">
                Terbaru kami!
              </span>
              <span className="relative text-[#252525]">Terbaru kami!</span>
            </h2>
          </div>
          <p className="lg:text-[18px] text-[18px] font-poppins text-gray-600 mb-8 lg:mt-[32px]">
            Nantikan halaman baru untuk pengalaman lebih seru. Tetap bersama
            kami dan nikmati perubahan luar biasa ini!
          </p>
          <div className="w-full max-w-md p-6 bg-red-600 rounded-3xl shadow-lg flex justify-center items-center gap-4">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-sm md:text-lg">Hari</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-sm md:text-lg">Jam</div>
            </div>
            <span className="text-4xl md:text-5xl text-white">:</span>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-sm md:text-lg">Menit</div>
            </div>
            <span className="text-4xl md:text-5xl text-white">:</span>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-sm md:text-lg">Detik</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative">
        <Footer />
      </div>
    </section>
  );
};

export default CamingSon;

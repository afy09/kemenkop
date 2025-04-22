import React from "react";

// import { iconSosmed, ImageGoogleStore, ImagePlayStore, Logo } from "../../Assets/Images";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={`${className || "bg-[#ffff]"} bg-opacity-10 lg:pt-[50px] md:pt-[50px] pt-[25px] lg:p-3 px-[24px] lg:px-[40px] border-t border-[#2C5C52]`}>
      {/* Rest of your footer code */}
      <div className="mx-auto md:flex justify-between border-b pb-6">
        {/* Logo and Social Icons */}
        <div className="flex flex-col   items-start lg:gap-0  gap-5 md:gap-0 ">
          <div className="w-full md:w-[80%] h-full  ">
            <img src="/images/logofother.png" alt="Logo" className=" object-contain" />
          </div>
        </div>

        {/* Features and Contact Information on Mobile */}

        {/* Contact Information */}
        <div className="flex   flex-col gap-2 mt-2 lg:mt-0 text-left w-full md:w-[250px] lg:w-auto max-sm:text-center">
          <h3 className="text-[#2C5C52] text-[12px] lg:text-[20px] font-bold">Satuan Tugas Koperasi Desa/Kelurahan Merah Putih</h3>
          <div className="text-[#252525] space-y-2 text-[11px] ">
            <div className="flex">
              <p className="text-[11px] ml-[5px] md:ml-[5px] lg:text-[16px] lg:w-[400px] w-full md:w-[200px] ">
                Graha Mandiri Lt.3, Jl. Imam Bonjol No.61, RT.8/RW.4, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-6 text-black  font-poppins text-[9px] md:text-base">
        <p>© 2025 Kementerian Koperasi Republik Indonesia | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

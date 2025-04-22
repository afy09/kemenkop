import React from "react";
import { IconClose, IconHamberger } from "../../Assets/Icons";

interface NavbarProps {
  currentPage: string;
  isMenuOpen: boolean;
  handleMenuClick: (page: string) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MENU_ITEMS = ["Beranda", "Tentang", "Model", "Manfaat", "Jenis", "Pertanyaan", "Regulasi", "Kontak"];

const Navbar: React.FC<NavbarProps> = ({ currentPage, isMenuOpen, handleMenuClick, setIsMenuOpen }) => {
  const renderMenuItems = () =>
    MENU_ITEMS.map((item) => (
      <div key={item} className={`px-2 border-b-2  ${currentPage === item ? "border-lime-500 w-[150px] lg:w-auto" : "border-transparent"} flex items-center gap-1 cursor-pointer`} onClick={() => handleMenuClick(item)}>
        <div className={`text-base ${currentPage === item ? "text-lime-500 font-semibold" : "text-[#1a1a1a] font-medium"}`}>{item}</div>
      </div>
    ));

  return (
    <header className="w-full  lg:px-10 px-5 md:px-7 py-4 bg-white shadow top-0 left-0 z-50 flex items-center justify-between relative">
      <div className="text-black flex gap-3 items-center">
        <img className="h-12 z-50" src="/images/logo.png" alt="Logo" />

        <div className="flex flex-col text-start  font-semibold">
          <span> Koperasi Desa/Kelurahan</span>
          <span>Merah Putih</span>
        </div>
      </div>

      <div className="flex items-center">
        <button className="lg:hidden ml-4 transition-transform duration-300 ease-in-out z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <IconClose /> : <IconHamberger />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10">{renderMenuItems()}</nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full bg-white rounded-b-[16px] shadow-lg z-40 lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
          style={{
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}>
          <div className="space-y-6 pl-[20px] md:pl-[30px] pt-[96px] pb-4 font-poppins text-[18px]">{renderMenuItems()}</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

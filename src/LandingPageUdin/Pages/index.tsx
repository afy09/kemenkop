import React, { useState, useRef } from "react";
import HeroUdin from "../Components/HeroUdin";
import Fitur from "../Components/About";
import About from "../Components/Fitur";
import Help from "../Components/Help";
import Footer from "../Components/Footer";
import CamingSon from "./ComingSon";
import Navbar from "../Components/Navbar";
import Manfaat from "../Components/Manfaat";
import MerchantBisnis from "../Components/merchantBisnis";

const HEADER_HEIGHT = 96;
const LandingPageUdin: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showComingSon, setShowComingSon] = useState(false);

  const berandaRef = useRef<HTMLDivElement>(null);
  const fiturRef = useRef<HTMLDivElement>(null);
  const tentangKamiRef = useRef<HTMLDivElement>(null);
  const manfaatRef = useRef<HTMLDivElement>(null);
  const bantuanRef = useRef<HTMLDivElement>(null);
  const MerchantBisnisRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (page: string) => {
    if (page === "Merchant Bisnis") {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    setCurrentPage(page);
    setShowComingSon(page === "Download");

    setTimeout(() => {
      const targetRef = {
        Beranda: berandaRef,
        Tentang: fiturRef,
        Model: tentangKamiRef,
        Manfaat: manfaatRef,
        Bantuan: bantuanRef,
      }[page];

      if (targetRef?.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop - HEADER_HEIGHT,
          behavior: "smooth",
        });
      }
    }, 100); // Memberi waktu agar komponen bisa update sebelum scroll

    setIsMenuOpen(false);
  };

  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="fixed top-0 left-0 w-full z-40 bg-white">
        <Navbar currentPage={currentPage} isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <section className="pt-[80px] grid grid-cols-1">
        {showComingSon ? (
          <CamingSon />
        ) : currentPage === "Merchant Bisnis" ? (
          <div ref={MerchantBisnisRef}>
            <MerchantBisnis />
          </div>
        ) : (
          <>
            <div ref={berandaRef}>
              <HeroUdin handleMenuClick={handleMenuClick} />
            </div>
            <div ref={fiturRef}>
              <Fitur />
            </div>
            <div ref={tentangKamiRef}>
              <About />
            </div>
            <div ref={manfaatRef}>
              <Manfaat />
            </div>

            <div ref={bantuanRef}>
              <Help />
            </div>
            <Footer />
          </>
        )}
      </section>
    </section>
  );
};

export default LandingPageUdin;

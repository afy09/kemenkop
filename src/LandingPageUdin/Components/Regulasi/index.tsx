import React from "react";

const Regulasi = () => {
  const regulations = [
    "Undang-Undang Nomor 25 Tahun 1992 tentang Perkoperasian",
    "Undang-Undang Nomor 59 Tahun 2024 tentang Rencana Pembangunan Jangka Panjang Nasional Tahun 2025–2045",
    "Peraturan Pemerintah Nomor 7 Tahun 2021 tentang Kemudahan, Pelindungan dan Pemberdayaan Koperasi dan Usaha Mikro, Kecil dan Menengah",
    "Peraturan Pemerintah Nomor 11 Tahun 2021 tentang Badan Usaha Milik Desa",
    "Peraturan Presiden Nomor 12 Tahun 2025 tentang Rancangan Pembangunan Jangka Menengah Nasional tahun 2025–2029",
    "Instruksi Presiden Republik Indonesia Nomor 9 Tahun 2025 tentang Percepatan Pembentukan Koperasi Desa/Kelurahan Merah Putih",
    "Peraturan Menteri Desa Pembangunan Daerah Tertinggal dan Transmigrasi No 7 Tahun 2023 tentang Prioritas Penggunaan Dana Desa tahun 2024",
    "Keputusan Menteri Koperasi Nomor 9 Tahun 2025 tentang Satuan Tugas Pembentukan Koperasi Desa Merah Putih",
    "Surat Edaran Menteri Desa dan Pembangunan Daerah Tertinggal dan Transmigrasi Nomor 6 Tahun 2025 tentang Petunjuk Teknis Percepatan Pelaksanaan Pembentukan Kopdes Merah Putih",
    "Surat Edaran Menteri Koperasi No 1 Tahun 2025 Tata Cara Pembentukan Koperasi Desa Merah Putih",
    "Petunjuk Pelaksanaan Menteri Koperasi Republik Indonesia Nomor 1 Tahun 2025 Tentang Pembentukan Koperasi Desa/Kelurahan Merah Putih",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border rounded-lg overflow-hidden shadow-lg">
        {/* Title Section */}
        <div className="bg-lime-500 text-white font-semibold p-4 md:p-6">
          <h2 className="text-lg md:text-xl lg:text-2xl text-center md:text-left">Regulasi atau Dasar Hukum Koperasi Desa/Kelurahan Merah Putih</h2>
        </div>

        {/* Regulations List */}
        <div className="bg-white p-4 md:p-6 space-y-3">
          {regulations.map((regulation, index) => (
            <div key={index} className="text-sm md:text-base border-b pb-4 hover:text-lime-500 cursor-pointer">
              {regulation}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regulasi;

"use client";

import Image from "next/image";
import DivisionCarousel from "./DivisionCorousel";

export default function Header() {
  const logo =
    "https://cdn.kibrispdr.org/data/759/logo-nganjuk-png-42.png";

  return (
    <div className="py-1 w-full text-white flex flex-col items-center justify-center relative overflow-hidden md:pt-20 pt-22">
      {/* Efek cahaya latar belakang */}
      <div className="absolute inset-0  pointer-events-none"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 text-center md:text-left">
        {/* Bagian kiri: Logo */}
        <div className="relative flex-shrink-0">
          <div className="bg-white/10 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={logo}
              alt="Logo MAN 1 Nganjuk"
              width={180}
              height={180}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Bagian kanan: Teks deskripsi */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-100 uppercase">
            MAN 1 Nganjuk
          </h2>
          <p className="mt-4 text-lg text-gray-200 leading-relaxed">
            Madrasah Aliyah Negeri 1 Nganjuk merupakan lembaga pendidikan Islam unggulan 
            yang berkomitmen mencetak generasi berprestasi, berkarakter, dan berakhlakul karimah. 
            Dengan perpaduan antara ilmu pengetahuan modern dan nilai-nilai religius, 
            MAN 1 Nganjuk terus berkembang menjadi madrasah yang inovatif dan berdaya saing tinggi.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition">
              Lihat Profil Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* Tambahan komponen bawah jika ingin (misal DivisionCarousel) */}
      {/* <div className="absolute bottom-10 w-full flex justify-center">
        <DivisionCarousel />
      </div> */}
    </div>
  );
}
// 
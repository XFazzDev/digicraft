"use client";

import Image from "next/image";
import background from "../../public/background.jpg";
import logo from "../../public/logo.png";

export default function Landing() {
  return (
    <div className="">
      <div className="absolute h-screen w-full z-10 inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-[#1a1a1a]"></div>
      <main className="relative min-h-screen text-white overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-20 bg-fixed"
          style={{
            backgroundImage: "url('https://akcdn.detik.net.id/community/media/visual/2025/06/29/melihat-lebih-dekat-sekolah-rakyat-di-sentra-handayani-jaktim-1751179722558_169.jpeg?w=700&q=90')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 sm:px-10 md:px-20 py-12 gap-10">
          {/* Left Side (Text) */}
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-xs sm:text-sm md:text-base text-slate-100 font-semibold tracking-wider uppercase mb-2">Hallo Warga Mansanga</h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight mb-4">
              Selamat Datang di Web Ekstrakurikuler <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Digicraft</span>
            </h1>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
              Web ini merupakan official dari{" "}
              <a href="#" className="text-sky-400 hover:underline">
                @digicraft.mansanga
              </a>
              , yang merupakan organisasi sekolah{" "}
              <a href="#" className="text-sky-400 hover:underline">
                MAN 1 Nganjuk
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <button className="bg-yellow-400 hover:scale-110 hover:cursor-pointer text-slate-800 font-semibold py-4 px-10 sm:px-12 rounded-xl transition-all duration-300 text-lg sm:text-base shadow-md">Read More!</button>
              <button className="border-2 border-white/50 backdrop-blur-xs hover:scale-110 hover:cursor-pointer text-slate-100 font-semibold py-4 px-10 sm:px-12 rounded-xl transition-all duration-300 text-lg sm:text-base">
                Read More!
              </button>
            </div>
          </div>

          {/* Right Side (Logo) */}
          <div className="flex justify-center md:justify-end w-full md:w-auto pt-15 sm:pt-0">
            <Image src={logo} alt="Logo Digicraft" width={280} height={280} className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500" priority />
          </div>
        </div>
      </main>
    </div>
  );
}

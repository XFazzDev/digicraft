"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Header from "./Header";

const logo = "https://aqiqohkita.com/logo/images/logo-man-1-nganjuk.jpg";

const divisionsData = [
  {
    name: "Branding",
    icon: logo,
    description: "Bertanggung jawab untuk membangun dan memelihara citra Digicraft, mengelola identitas visual, dan menciptakan materi promosi yang menarik dan kohesif.",
  },
  {
    name: "Bisnis",
    icon: logo,
    description: "Fokus pada pengembangan model pendapatan, pencarian peluang sponsorship, dan monetisasi proyek digital yang dihasilkan oleh anggota organisasi.",
  },
  {
    name: "PDD",
    icon: logo,
    description: "Divisi inti yang menangani pengembangan website, aplikasi, analisis data, serta memastikan semua infrastruktur dan data digital berjalan lancar dan aman.",
  },
  {
    name: "Humas",
    icon: logo,
    description: "Menjembatani komunikasi antara Digicraft dengan pihak internal (sekolah) dan eksternal (media, partner). Mengelola media sosial dan hubungan masyarakat.",
  },
  {
    name: "KKP",
    icon: logo,
    description: "Divisi kreatif yang berfokus pada produksi konten visual, seperti videografi, desain grafis, dan pembuatan produk digital kreatif lainnya.",
  },
];

const DivisionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate items untuk infinite effect
  const duplicatedDivisions = [...divisionsData, ...divisionsData, ...divisionsData];

  // Deteksi ukuran layar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsPerPage = isMobile ? 1 : 3;
  const totalCards = divisionsData.length;
  const totalDuplicatedCards = duplicatedDivisions.length;

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      // Jika mencapai akhir data asli, reset ke awal tanpa animasi
      if (newIndex >= totalCards) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 700);
        return newIndex;
      }

      return newIndex;
    });
  }, [totalCards]);

  const goToPrevious = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;

      // Jika mencapai awal data asli, reset ke akhir tanpa animasi
      if (newIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(totalCards - 1);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 700);
        return newIndex;
      }

      return newIndex;
    });
  }, [totalCards]);

  // Calculate transforms
  const mobileTransformOffset = `-${currentIndex * 100}%`;
  const desktopTransformOffset = `-${currentIndex * (100 / cardsPerPage)}%`;

  // Handle indicator click
  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#232320] w-full py-8 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Judul */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text bg-gradient-to-r from-slate-100 via-yellow-200 to-yellow-400 text-transparent">DEVISI</h2>

          {/* ===== MOBILE VIEW (infinite carousel 1 card) ===== */}
          <div className="md:hidden relative">
            {/* Tombol kiri */}
            <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-30 transition-all duration-300 transform hover:scale-110" aria-label="Previous slide">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Container carousel mobile */}
            <div className="overflow-hidden w-full px-12">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${mobileTransformOffset})`,
                  transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
                }}
              >
                {duplicatedDivisions.map((divisi, index) => (
                  <div key={`${divisi.name}-${index}`} className="w-full flex-shrink-0 px-2">
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105">
                      <div className="mb-4">
                        <Image src={divisi.icon} alt={divisi.name} width={80} height={80} className="object-contain filter drop-shadow-[0_0px_10px_rgba(255,255,0,0.5)]" />
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-300 mb-3">{divisi.name}</h3>
                      <p className="text-gray-200 text-base mb-4 flex-grow">{divisi.description}</p>
                      <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors duration-300">Lihat Detail</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol kanan */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-30 transition-all duration-300 transform hover:scale-110 hover:cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* ===== DESKTOP VIEW (infinite carousel 3 cards) ===== */}
          <div className="hidden md:flex relative items-center justify-center">
            {/* Tombol kiri */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-30 transition-all duration-300 transform hover:scale-110 hover:cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Container carousel desktop */}
            <div className="overflow-hidden w-full px-4">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${desktopTransformOffset})`,
                  transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
                }}
              >
                {duplicatedDivisions.map((divisi, index) => {
                  // Calculate actual index for focus effect
                  const actualIndex = index % totalCards;
                  const middleOffset = Math.floor(cardsPerPage / 2);
                  const displayIndex = (currentIndex + middleOffset) % totalCards;
                  const isFocused = actualIndex === displayIndex;

                  return (
                    <div
                      key={`${divisi.name}-${index}`}
                      className={`flex-shrink-0 px-4 transition-all duration-700 ease-in-out transform ${isFocused ? "scale-105 opacity-100" : "scale-95 opacity-60"}`}
                      style={{ width: `${100 / cardsPerPage}%` }}
                    >
                      <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center h-full">
                        <div className="mb-4">
                          <Image src={divisi.icon} alt={divisi.name} width={80} height={80} className="object-contain filter drop-shadow-[0_0px_10px_rgba(255,255,0,0.5)]" />
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-300 mb-3">{divisi.name}</h3>
                        <p className="text-gray-200 text-base mb-4 flex-grow">{divisi.description}</p>
                        <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors duration-300">Lihat Detail</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tombol kanan */}
            <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-30 transition-all duration-300 transform hover:scale-110" aria-label="Next slide">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Indikator Carousel */}
          <div className="flex justify-center mt-10 space-x-3">
            {divisionsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`block h-3 w-3 rounded-full transition-all duration-300 ${idx === currentIndex % totalCards ? "bg-yellow-400 scale-125" : "bg-gray-600 hover:bg-gray-400"}`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <Header />
      </section>
      <div className="relative -top-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#232320" d="M0,288L80,266.7C160,245,320,203,480,208C640,213,800,267,960,282.7C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      </div>
    </div>
  );
};

export default DivisionCarousel;

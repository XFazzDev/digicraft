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

const teamsData = [
  { name: "UI/UX", slogan: "Mendesain pengalaman digital yang memikat.", icon: logo },
  { name: "Frontend", slogan: "Membangun antarmuka yang interaktif dan responsif.", icon: logo },
  { name: "Backend", slogan: "Mengelola logika dan data di balik layar.", icon: logo },
  { name: "Mobile", slogan: "Menghadirkan solusi dalam genggaman.", icon: logo },
  { name: "Game Dev", slogan: "Menciptakan dunia virtual yang seru.", icon: logo },
  { name: "AI & Data", slogan: "Mengolah data, membentuk kecerdasan.", icon: logo },
  { name: "Cybersecurity", slogan: "Menjaga keamanan digital organisasi.", icon: logo },
  { name: "DevOps", slogan: "Mengintegrasikan pengembangan dan operasional.", icon: logo },
  { name: "Content Creator", slogan: "Menyampaikan pesan melalui media kreatif.", icon: logo },
  { name: "Design", slogan: "Visual yang kuat, pesan yang jelas.", icon: logo },
  { name: "Video Editing", slogan: "Menghidupkan cerita lewat gambar bergerak.", icon: logo },
  { name: "Social Media", slogan: "Menghubungkan Digicraft dengan dunia.", icon: logo },
  { name: "Research", slogan: "Menelusuri ide dan solusi inovatif.", icon: logo },
  { name: "Public Relations", slogan: "Menjaga citra dan komunikasi organisasi.", icon: logo },
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
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#232320" d="M0,288L80,266.7C160,245,320,203,480,208C640,213,800,267,960,282.7C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg> */}
      </div>
      <section className="bg-[#232320] py-20 px-6 sm:px-10 lg:px-24 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Judul */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent tracking-tight">VISI & MISI DIGICRAFT</h2>

          {/* Visi */}
          <div className="bg-white/5 backdrop-blur-md border border-yellow-400/20 rounded-3xl p-8 sm:p-10 shadow-xl mb-16 transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Visi</h3>
            <p className="text-gray-200 text-lg leading-relaxed">Menjadi organisasi digital yang inovatif, kreatif, dan berdampak dalam pengembangan teknologi serta pemberdayaan generasi muda di era digital.</p>
          </div>

          {/* Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Mengembangkan keterampilan digital anggota melalui proyek nyata dan pelatihan intensif.",
              "Mendorong kolaborasi lintas divisi untuk menciptakan solusi teknologi yang relevan.",
              "Menjadi wadah ekspresi kreatif dalam bidang desain, konten, dan pengembangan digital.",
              "Menjalin kemitraan strategis dengan pihak eksternal untuk memperluas dampak organisasi.",
            ].map((misi, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-yellow-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center shadow-md">{i + 1}</div>
                  <p className="text-gray-200 text-base leading-relaxed">{misi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="bg-[#232320] py-20 px-6 sm:px-10 lg:px-24 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent tracking-tight">List Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamsData.map((team, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:border-yellow-400 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Image src={team.icon} alt={team.name} width={60} height={60} className="object-contain filter drop-shadow-[0_0px_10px_rgba(255,255,0,0.5)]" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">{team.name}</h3>
                  <p className="text-gray-200 text-sm">{team.slogan}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-10 px-6 sm:px-10 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Info Sekolah */}
          <div>
            <Image src={logo} alt="Logo MAN 1 Nganjuk" width={80} height={80} className="mb-4" />
            <h4 className="text-lg font-bold text-yellow-300 mb-2">DIGICRAFT MAN 1 NGANJUK</h4>
            <p className="text-sm leading-relaxed">
              Telp: 0358551547
              <br />
              Fax: 0358551547
              <br />
              WhatsApp: -<br />
              Email:{" "}
              <a href="mailto:mansanganjuk@gmail.com" className="text-yellow-400 hover:underline">
                mansanganjuk@gmail.com
              </a>
            </p>
          </div>

          {/* Profil */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4">Profil</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Visi dan Misi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Sejarah
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Sambutan Kepala
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Video
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4">Alamat</h4>
            <p className="text-sm leading-relaxed">
              Jl. KH. Abdul Fattah, Kertosono, Bogo, Nglawak,
              <br />
              Kec. Kertosono, Kabupaten Nganjuk,
              <br />
              Jawa Timur 64315
            </p>
          </div>
        </div>

        {/* Social & Links */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400">
              Peta Situs
            </a>
            <a href="#" className="hover:text-yellow-400">
              Kontak
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-500">© 2025 MAN 1 NGANJUK. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default DivisionCarousel;

"use client";

import Head from "next/head";

interface DivisiPageProps {
  title: string;
}

export default function DivisiPage({ title }: DivisiPageProps): any {
  const logo =
    "https://akcdn.detik.net.id/community/media/visual/2025/06/29/melihat-lebih-dekat-sekolah-rakyat-di-sentra-handayani-jaktim-1751179722558_169.jpeg?w=700&q=90";

  return (
    <>
      <Head>
        <title>Halaman {title} | Digicraft</title>
      </Head>

      {/* Landing Section with Background Image */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        {/* Overlay gradasi */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white absolute inset-0 bg-black/90">
          <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
            Halaman <span className="text-white">{title}</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Jelajahi peran, visi, misi, dan anggota dari setiap divisi Digicraft
            yang membentuk masa depan digital.
          </p>
          <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
            Lihat Detail Divisi
          </button>
        </div>
      </section>

      {/* Konten Tambahan */}
      <section className="bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white px-6 py-20 space-y-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
            Visi
          </h2>
          <p className="text-lg text-gray-300">
            Menjadi wadah pengembangan keterampilan digital yang inovatif dan
            berkelanjutan bagi pelajar Indonesia, serta mendorong kolaborasi
            kreatif yang berdampak positif bagi komunitas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
            Misi
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
            <li>Mendorong pembuatan aplikasi, website, dan konten digital yang bermanfaat.</li>
            <li>Menumbuhkan semangat eksplorasi teknologi baru seperti AI, IoT, dan game dev.</li>
            <li>Menjadi ruang kerja sama antaranggota untuk proyek kreatif dan kompetisi.</li>
            <li>Mengintegrasikan prinsip etis dan berkelanjutan dalam setiap karya digital.</li>
            <li>Memberikan pelatihan, mentoring, dan ruang ekspresi bagi setiap anggota.</li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
            Anggota Divisi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Fazz", role: "Ketua Divisi", skills: "Web Dev, Plugin Minecraft" },
              { name: "Rani", role: "Wakil Ketua", skills: "UI/UX, Desain Grafis" },
              { name: "Dimas", role: "Anggota", skills: "Game Dev, Unity" },
              { name: "Sinta", role: "Anggota", skills: "Frontend, Next.js" },
              { name: "Yusuf", role: "Anggota", skills: "Backend, PHP" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">Keahlian: {member.skills}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
            Tujuan Divisi
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
            <li>Meningkatkan literasi digital di kalangan pelajar.</li>
            <li>Menjadi incubator ide kreatif berbasis teknologi.</li>
            <li>Mewujudkan proyek nyata yang berdampak sosial.</li>
            <li>Menyiapkan anggota untuk kompetisi dan karier digital.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

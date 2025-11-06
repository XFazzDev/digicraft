import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Menambahkan konfigurasi Image untuk domain eksternal
    images: {
        // Daftarkan domain tempat gambar di-host
        domains: ['aqiqohkita.com', 'cdn.kibrispdr.org'],
    },
    
    /* config options here */
    // Konfigurasi lainnya:
    reactCompiler: true,
};

export default nextConfig;
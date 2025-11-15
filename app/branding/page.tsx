import React from "react";
import Navbar from "@/app/components/Navbar";
import Landing from "@/app/components/Landing";
import DivisionCarousel from "@/app/components/DivisionCorousel";
import RootLayout from "../layout";
import DivisiPage from "../components/Devisi";

export const metadata = {
  title: "Branding - Digicraft",
  description: "Halaman branding untuk Digicraft",
};

const Page = () => {
  return (
    <RootLayout>
      <Navbar />
      <DivisiPage />
    </RootLayout>
  );
};

export default Page;

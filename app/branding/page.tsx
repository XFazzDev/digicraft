import React from "react";
import Navbar from "@/app/components/Navbar";
import Landing from "@/app/components/Landing";
import DivisionCarousel from "@/app/components/DivisionCorousel";
import RootLayout from "../layout";

export const metadata = {
  title: "Branding - Digicraft",
  description: "Halaman branding untuk Digicraft",
};

const Page = () => {
  return (
    <RootLayout>
      <Navbar />
      <Landing />
      <DivisionCarousel />
    </RootLayout>
  );
};

export default Page;

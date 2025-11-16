import React from "react";
import Navbar from "@/app/components/Navbar";
import Landing from "@/app/components/Landing";import DivisiPage from "../components/Devisi";
import RootLayout from "../layout";

export const metadata = {
    title: "Bisnis - Digicraft",
    description: "Halaman bisnis untuk Digicraft",
  };

const Page = () => {
  return (
    <RootLayout>
      <Navbar />
      <DivisiPage title="Bisnis" />
    </RootLayout>
  );
};

export default Page;

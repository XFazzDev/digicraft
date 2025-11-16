import React from "react";
import Navbar from "@/app/components/Navbar";
import Landing from "@/app/components/Landing";
import DivisiPage from "../components/Devisi";
import RootLayout from "../layout";

export const metadata = {
  title: "Marketing - Digicraft",
  description: "Halaman marketing untuk Digicraft",
};

const Page = () => {
  return (
    <RootLayout>
      <Landing />
      <DivisiPage title="Marketing" />
    </RootLayout>
  );
};

export default Page;

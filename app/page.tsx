import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import DivisionCorousel from "./components/DivisionCorousel";
import RootLayout from "./layout";

export const metadata = {
  title: "Digicraft",
  description: "Digicraft MAN 1 Nganjuk",
}; 

export default function Home() {
  return (
    <RootLayout>
      <Landing />
      <DivisionCorousel />
      {/* <Header /> */}
    </RootLayout>
  );
}

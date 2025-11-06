import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import DivisionCorousel from "./components/DivisionCorousel";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <DivisionCorousel />
      {/* <Header /> */}
    </>
  );
}

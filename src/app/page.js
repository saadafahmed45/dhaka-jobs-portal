import Image from "next/image";

import CatagoryList from "./components/CatagoryList";
import FutureJob from "./components/FutureJob";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FutureJob />
      <CatagoryList />
    </div>
  );
}

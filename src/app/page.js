import Image from "next/image";

import CatagoryList from "./components/CatagoryList";
import FutureJob from "./components/FutureJob";
import Hero from "./components/Hero";
import JobsCatagory from "./jobs/page";
import Jobs from "./jobs/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Jobs />
      <CatagoryList />
    </div>
  );
}

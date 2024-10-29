import Image from "next/image";

import CatagoryList from "./components/CatagoryList";
import FutureJob from "./components/FutureJob";
import Hero from "./components/Hero";
import JobsCatagory from "./jobs/page";
import Jobs from "./jobs/page";
import Ctg from "./components/ctg";
import loading from "./loading";
import { Suspense } from "react";
import SearchJobs from "./components/SearchJobs";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchJobs />
      <CatagoryList />
      <Suspense fallback={<loading />}>
        <Jobs />
      </Suspense>
      <Ctg />
    </div>
  );
}

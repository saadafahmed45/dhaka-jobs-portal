"use client";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchJobs from "./components/SearchJobs";
import FindJob from "./find-job/page";
import CatagoryList from "./components/CatagoryList";
import { MainContext } from "./Context/Contex";
import Hero from "./components/Hero";
import Jobs from "./jobs/page";
import ReviewPage from "./components/Review";

export default function Home() {
  const { handleSearch, quary, onSearchClick, filteredJobs } =
    useContext(MainContext);
  return (
    <div>
      <Hero />
      <CatagoryList />
      <Jobs />
      <ReviewPage />
      {/* <SearchJobs /> */}
      {/* <FindJob /> */}
    </div>
  );
}

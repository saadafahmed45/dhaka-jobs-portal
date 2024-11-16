'use client'
import React, { useContext } from "react";
import SectionHeader from "../components/SectionHeader";
import JobCard from "../components/JobCard";
import SkeletonCard from "../components/SkeletonCard";
import { MainContext } from "../Context/Contex";
import SearchJobs from "../components/SearchJobs";

const FindJob = () => {

  const { filteredJobs } =
    useContext(MainContext);

  const jobs = filteredJobs;


  // if (!jobs || jobs.length === 0) {
  //   return (
  //     <div className="px-8  py-10 ">
  //       <SectionHeader
  //         sectionHeader="Find Jobs"
  //         sectionPera="No jobs available at the moment. Please check back later."
  //       />

  //       <div className="" >
  //         {/* Render multiple skeleton cards to indicate loading */}
  //         {[...Array(2)].map((_, index) => (
  //           <SkeletonCard key={index} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="px-8 md:px-24 py-10 space-y-4">
      {/* <SectionHeader
        sectionHeader="Find Jobs"
        sectionPera="To choose your trending job dream & to make future bright."
      /> */}

      <SearchJobs />
      {
        jobs.length === 0 && <div className="p-4 text-center">
          <h2 >No jobs available at the moment. Please check back later."</h2>
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default FindJob;

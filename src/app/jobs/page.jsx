"use client";

import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SectionHeader from "../components/SectionHeader";
import { jobsApi } from "../api/jobsApi";
import SkeletonCard from "../components/SkeletonCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(6);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // fetch("/data/jobs.json")
    fetch(`https://dhaka-jobs-server.onrender.com/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
    setLoader(false);
  }, []);
  // console.log(jobs);
  // if (loader === true) {
  //   return (
  //     <div className="py-10">
  //       <SectionHeader
  //         sectionHeader="Future Jobs"
  //         sectionPera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia."
  //       />
  //       <SkeletonCard />
  //     </div>
  //   );
  // }
  return (
    <div className="px-8 md:px-24 py-10 space-y-4">
      <SectionHeader
        sectionHeader="Future Jobs"
        sectionPera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        {jobs.slice(0, dataLength).map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => setDataLength(jobs.length)}
          className={
            dataLength === jobs.length
              ? "hidden"
              : "btn  outline text-slate-800"
          }
          // className="btn  outline text-slate-800"
        >
          {" "}
          see all jobs
        </button>
      </div>
    </div>
  );
};

export default Jobs;

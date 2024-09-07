"use client";

import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SectionHeader from "../components/SectionHeader";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);

  return (
    <div className="px-8 md:px-24 py-16 space-y-4">
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

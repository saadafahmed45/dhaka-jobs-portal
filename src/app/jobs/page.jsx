"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import SectionHeader from "../components/SectionHeader";
// import jobsDataLoad, { jobsApi } from "../api/jobsApi";
import SkeletonCard from "../components/SkeletonCard";

const Jobs = async () => {
  const [jobs, setJobs] = useState([]);

  // const [dataLength, setDataLength] = useState(6);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("https://dhaka-jobs-server.onrender.com/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoader(false);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(jobs);
  if (loader == true) {
    return (
      <div className="py-10">
        <SectionHeader
          sectionHeader="Future Jobs"
          sectionPera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia."
        />
        <SkeletonCard />
      </div>
    );
  }

  // const jobs = await jobsDataLoad();
  return (
    <div className="px-8 md:px-24 py-10 space-y-4">
      <SectionHeader
        sectionHeader="Future Jobs"
        sectionPera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
      <div className="text-center">
        {/* <button
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
        </button> */}
      </div>
    </div>
  );
};

export default Jobs;

"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { getStoredJobApplication } from "../utility/localStorage";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`/data/jobs.json/`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storeJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //   const appliedJobs = jobs.filter((job) => storeJobsIds.includes(job.id));
      //   console.log(jobs, storeJobsIds, appliedJobs);
      const jobsApplied = [];
      for (const id of storeJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      console.log(jobs, jobsApplied, storeJobsIds);
    }
  }, []);

  return (
    <div className="px-16 md:24 ">
      <div>
        <SectionHeader sectionHeader="Applied Jobs" />
      </div>
      {/* wapper  */}
      <div className=" flex justify-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Find By:
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>On Site</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

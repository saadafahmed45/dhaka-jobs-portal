"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";

const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  useEffect(() => {
    fetch(`https://dhaka-job-portal-server.vercel.app/applied`)
      .then((res) => res.json())
      .then((data) => setAppliedJob(data));
  }, []);
  const {
    _id,
    job_title,
    job_description,
    company_name,
    salary,
    location,
    job_type,
    remote_or_onsite,
    experiences,
    educational_requirements,
    company_logo_link,
  } = appliedJob;

  return (
    <div className="px-12 md:24 ">
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
      <div className="space-y-4">
        {appliedJob.map((job) => (
          <div
            key={appliedJob._id}
            className="card flex card-side bg-base-100 shadow-xl "
          >
            <div className="card-body ">
              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h3 className="text-xl">{job.jobData.company_name}</h3>
                  <h2 className="card-title">{job.jobData.job_title}</h2>
                  <h3> {job.jobData.job_type}</h3>
                  <div className="flex gap-6">
                    <h3> {job.jobData.location}</h3>
                    <h3> {job.jobData.remote_or_onsite}</h3>
                    <h3> {job.jobData.salary}</h3>
                  </div>
                </div>
                <div className=" ">
                  <h3> {job.appliedContact.name}</h3>
                  <h3> {job.appliedContact.email}</h3>
                  <button className="btn btn-primary"> download CV</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

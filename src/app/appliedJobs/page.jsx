"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetching data from the server
  useEffect(() => {
    fetch(`https://dhaka-jobs-server.onrender.com/applied`)
      .then((res) => res.json())
      .then((data) => {
        setAppliedJobs(data);
        setFilteredJobs(data); // Initially show all jobs
      });
  }, []);

  // Handle filter change
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
    if (filterType === "All") {
      setFilteredJobs(appliedJobs);
    } else if (filterType === "Remote") {
      setFilteredJobs(appliedJobs.filter((job) => job.jobData.remote_or_onsite.toLowerCase() === "remote"));
    } else if (filterType === "Onsite") {
      setFilteredJobs(appliedJobs.filter((job) => job.jobData.remote_or_onsite.toLowerCase() === "onsite"));
    }
    else if (filterType === "Hybrid") {
      setFilteredJobs(appliedJobs.filter((job) => job.jobData.remote_or_onsite.toLowerCase() === "Hybrid"));
    }
  };

  return (
    <div className="px-6 md:px-12 lg:px-24 py-8">
      {/* Section Header */}
      <SectionHeader sectionHeader="Applied Jobs" />

      {/* Filter Dropdown */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <button
            className="btn btn-outline btn-primary"
            onClick={() => document.getElementById("filterDropdown").classList.toggle("hidden")}
          >
            Filter By: {filter}
          </button>
          <ul
            id="filterDropdown"
            className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg p-2 hidden z-10"
          >
            <li>
              <button
                onClick={() => handleFilterChange("All")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilterChange("Remote")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Remote
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilterChange("Onsite")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Onsite
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilterChange("Hybrid")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Hybrid
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Applied Jobs List */}
      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-600">No applied jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job._id}
              className="card bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
            >
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <img
                  src={job.jobData.company_logo_link}
                  alt={`${job.jobData.company_name} Logo`}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.jobData.company_name}
                </h3>
                <h2 className="text-xl font-bold text-blue-600">
                  {job.jobData.job_title}
                </h2>
                <p className="text-sm text-gray-600">
                  Type: <span className="font-medium">{job.jobData.job_type}</span> |{" "}
                  Location: <span className="font-medium">{job.jobData.location}</span> |{" "}
                  Mode: <span className="font-medium">{job.jobData.remote_or_onsite}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Salary: <span className="font-medium">{job.jobData.salary}</span>
                </p>
              </div>

              {/* Applicant Info & Actions */}
              <div className="text-right">
                <p className="text-gray-800 font-medium">
                  {job.appliedContact.name}
                </p>
                <p className="text-gray-600">{job.appliedContact.email}</p>
                <button className="btn btn-primary mt-2">Download CV</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;

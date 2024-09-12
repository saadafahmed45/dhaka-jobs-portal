"use client";
import SectionHeader from "@/app/components/SectionHeader";
import { saveJobApplication } from "@/app/utility/localStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";

const JobDetails = ({ params }) => {
  const router = useRouter();

  const id = params.id;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`/data/jobs.json/`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const idInt = parseInt(id);

  const jobSingle = jobs.find((job) => job.id === idInt);
  // console.log(jobs);
  // console.log("single jobs", jobSingle);

  const handleApplyJob = () => {
    // Save the job application (could be localStorage or any state)
    // saveJobApplication(idInt);

    // Redirect to the application page with the job ID
    router.push(`/apply/${idInt}`);
  };
  return (
    <div className="px-6 py-4 lg:px-24 md:py-12">
      <SectionHeader sectionHeader="Job Details" />
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 dark:bg-gray-100 dark:text-gray-800"
      >
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link
              href={"/"}
              rel="noopener noreferrer"
              title="Back to homepage"
              className="hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 dark:text-gray-600"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href={"/jobs"}
              rel="noopener noreferrer"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Jobs
            </Link>
          </li>

          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize underline  cursor-default"
            >
              Job Details
            </Link>
          </li>
        </ol>
      </nav>
      {/* <h1> JobDetails : {id}</h1> */}
      <div className="grid items-center  gap-4 md:grid-cols-4">
        {/* fast  */}
        <div className="border col-span-3 p-8">
          <div className="space-y-6">
            <h3>
              <span className="font-bold ">Job Description:</span>{" "}
              {jobSingle?.job_description}
            </h3>
            <h3>
              <span className="font-bold ">Job Responsibility:</span>{" "}
              {jobSingle?.job_responsibility}
            </h3>
            <div className="py-4 space-y-2">
              <h3 className="font-bold ">Educational Requirements </h3>
              <span>{jobSingle?.educational_requirements}</span>
            </div>
            <div className=" space-y-2">
              <h3 className="font-bold ">Experiences </h3>
              <span>{jobSingle?.experiences}</span>
            </div>
          </div>
        </div>
        {/* second  */}
        <div className="border  col-span-3 md:col-span-1  p-4 bg-blue-200">
          <div className=" space-y-2">
            <div className="border-b border-blue-500 py-2 ">
              <h3 className="font-bold text-md">Job Details:</h3>
            </div>

            <div className="flex items-center gap-1">
              <span>
                {" "}
                <AiOutlineDollar />
              </span>
              <h3>
                {" "}
                <span className="font-bold">Salary:</span> {jobSingle?.salary}
              </h3>
            </div>

            <div className="flex items-center content-center  gap-1 ">
              <span>
                {" "}
                <AiOutlineDollar />
              </span>
              <h3>
                {" "}
                <span className="font-bold">Job Title:</span>{" "}
                {jobSingle?.job_title}
              </h3>
            </div>
          </div>

          {/* contact  */}

          <div className=" space-y-2 p-4">
            <div className="border-b border-blue-500 py-2 ">
              <h3 className="font-bold text-md">Contact Information:</h3>
            </div>

            <div className="flex items-center gap-1">
              <span>
                {" "}
                <AiOutlineDollar />
              </span>
              <h3>
                {" "}
                <span className="font-bold">Phone:</span>{" "}
                {jobSingle?.contact_information.phone}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <span>
                {" "}
                <AiOutlineDollar />
              </span>
              <h3>
                {" "}
                <span className="font-bold">Email:</span>{" "}
                {jobSingle?.contact_information.email}
              </h3>
            </div>
            <div className="flex items-center content-center  gap-1 ">
              <span>
                {" "}
                <AiOutlineDollar />
              </span>
              <h3>
                {" "}
                <span className="font-bold">Job Title:</span>{" "}
                {jobSingle?.contact_information.address}
              </h3>
            </div>
          </div>
          <button className="btn w-full btn-primary" onClick={handleApplyJob}>
            {" "}
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

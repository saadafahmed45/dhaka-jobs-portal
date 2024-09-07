"use client";
import SectionHeader from "@/app/components/SectionHeader";
import { saveJobApplication } from "@/app/utility/localStorage";
import React, { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";

const JobDetails = ({ params }) => {
  const id = params.id;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`/data/jobs.json/`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const idInt = parseInt(id);
  const jobSingle = jobs.find((job) => job.id === idInt);
  console.log(jobs);
  // console.log("single jobs", jobSingle);
  // const {
  //   logo,
  //   job_title,
  //   job_description,
  //   company_name,
  //   salary,
  //   location,
  //   job_type,
  //   remote_or_onsite,
  //   experiences,
  //   educational_requirements,
  // job_responsibility,
  // contact_information,
  // } = job;

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast.success("Apply the Job", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className="px-6 lg:px-24 py-12">
      <SectionHeader sectionHeader="Job Details" />
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

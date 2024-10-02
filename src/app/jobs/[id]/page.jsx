"use client";
import SectionHeader from "@/app/components/SectionHeader";
import SkeletonCard from "@/app/components/SkeletonCard";
import { saveJobApplication } from "@/app/utility/localStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";

const JobDetails = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `https://dhaka-job-portal-server.vercel.app/jobs/${id}`
        );
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 p-16">
        <div className="py-4 rounded shadow-lg w-full px-12 animate-pulse dark:bg-gray-50">
          <div className="flex p-4 space-x-4 sm:px-8">
            <div className="flex-shrink-0 w-36 h-36 rounded-full dark:bg-gray-300"></div>
            <div className="flex-1 py-2 space-y-4">
              <div className="w-full h-12 rounded dark:bg-gray-300"></div>
              <div className="w-5/6 h-8 rounded dark:bg-gray-300"></div>
            </div>
          </div>
          <div className="p-4 space-y-4 sm:px-8">
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-full h-4 rounded dark:bg-gray-300"></div>
            <div className="w-full h-4 rounded dark:bg-gray-300"></div>
            <div className="w-3/4 h-4 rounded dark:bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  // if (!job) {
  //   return <p>Job details not found.</p>;
  // }

  const {
    _id,
    job_title,
    job_description,
    company_name,
    salary,
    company_logo_link,
    job_responsibility,
    experiences,
    educational_requirements,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    router.push(`/apply/${_id}`);
  };

  return (
    <div className="px-6 py-4 lg:px-24 md:py-8">
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 dark:bg-gray-100 dark:text-gray-800"
      >
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link href="/" title="Back to homepage" className="hover:underline">
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
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="/jobs"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Jobs
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <span className="flex items-center px-1 capitalize cursor-default">
              Job Details
            </span>
          </li>
        </ol>
      </nav>

      <div className="grid items-center gap-4 md:grid-cols-4">
        <div className="col-span-3 p-4">
          <div className="space-y-6">
            <div className="flex gap-4 shadow p-10 border-sm">
              <img
                className="w-1/3"
                src={company_logo_link}
                alt={company_name}
              />
              <div>
                <h2 className="text-xl font-bold">{company_name}</h2>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Job Description:</h3> {job_description}
            </div>
            <div>
              <h3 className="font-bold">Job Responsibility:</h3>{" "}
              {job_responsibility}
            </div>
            <div>
              <h3 className="font-bold">Educational Requirements:</h3>{" "}
              {educational_requirements}
            </div>
            <div>
              <h3 className="font-bold">Experiences:</h3> {experiences}
            </div>
          </div>
        </div>

        <div className="border col-span-3 md:col-span-1 p-4 bg-blue-200">
          <div className="space-y-2">
            <div className="border-b border-blue-500 py-2">
              <h3 className="font-bold text-md">Job Details:</h3>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineDollar />
              <h3>
                <span className="font-bold">Salary:</span> {salary}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineDollar />
              <h3>
                <span className="font-bold">Job Title:</span> {job_title}
              </h3>
            </div>
          </div>

          <div className="space-y-2 p-4">
            <div className="border-b border-blue-500 py-2">
              <h3 className="font-bold text-md">Contact Information:</h3>
            </div>
            {contact_information?.phone && (
              <div className="flex items-center gap-1">
                <AiOutlineDollar />
                <h3>
                  <span className="font-bold">Phone:</span>{" "}
                  {contact_information.phone}
                </h3>
              </div>
            )}
            {contact_information?.email && (
              <div className="flex items-center gap-1">
                <AiOutlineDollar />
                <h3>
                  <span className="font-bold">Email:</span>{" "}
                  {contact_information.email}
                </h3>
              </div>
            )}
            {contact_information?.address && (
              <div className="flex items-center gap-1">
                <AiOutlineDollar />
                <h3>
                  <span className="font-bold">Address:</span>{" "}
                  {contact_information.address}
                </h3>
              </div>
            )}
          </div>
          <button className="btn w-full btn-primary" onClick={handleApplyJob}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

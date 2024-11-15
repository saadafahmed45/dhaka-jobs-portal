"use client";
import SectionHeader from "@/app/components/SectionHeader";
import SkeletonCard from "@/app/components/SkeletonCard";
import { saveJobApplication } from "@/app/utility/localStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDollar, AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
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
          `https://dhaka-jobs-server.onrender.com/jobs/${id}`
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

  // if (loading) {
  //   return <h2>hello </h2>;
  // }

  if (!job) {
    return <p className="text-center text-gray-500">Job details not found.</p>;
  }

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
    imageUrl,
  } = job;

  const handleApplyJob = () => {
    router.push(`/apply/${_id}`);
  };

  return (
    <div className="px-6 py-6 lg:px-24 md:py-10">
      {/* Breadcrumb Navigation */}
      <nav className="w-full p-4 dark:bg-gray-100 dark:text-gray-800">
        <ol className="flex h-8 space-x-2">
          <li>
            <Link href="/" className="hover:underline text-blue-600">
              Home
            </Link>
          </li>
          <li> / </li>
          <li>
            <Link href="/jobs" className="hover:underline text-blue-600">
              Jobs
            </Link>
          </li>
          <li> / </li>
          <li className="text-gray-500">Job Details</li>
        </ol>
      </nav>

      {/* Job Details Section */}
      <div className="grid items-start gap-6 md:grid-cols-4">
        {/* Left Section - Job Info */}
        <div className="col-span-3 p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center gap-6 mb-6">
            {/* Company Logo */}
            <img
              className="w-24 h-24 object-cover rounded-full border"
              src={imageUrl || "/default-logo.png"}
              alt={company_name}
            />
            <div>
              <h2 className="text-2xl font-semibold">{company_name}</h2>
              <p className="text-gray-600">{job_title}</p>
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">Job Description:</h3>
              <p className="text-gray-700">{job_description}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Job Responsibility:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {job_responsibility.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Educational Requirements:</h3>
              <p className="text-gray-700">{educational_requirements}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Experiences:</h3>
              <p className="text-gray-700">{experiences}</p>
            </div>
          </div>
        </div>

        {/* Right Section - Job Details & Contact Info */}
        <div className="col-span-1 p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="font-bold text-lg border-b pb-2">Job Details:</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <AiOutlineDollar className="text-blue-600" />
                <span className="font-medium">Salary:</span> {salary}
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineDollar className="text-blue-600" />
                <span className="font-medium">Job Type:</span> {job.job_type}
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineDollar className="text-blue-600" />
                <span className="font-medium">Location:</span> {job.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg border-b pb-2">Contact Information:</h3>
            <div className="mt-4 space-y-3">
              {contact_information?.phone && (
                <div className="flex items-center gap-2">
                  <AiOutlinePhone className="text-blue-600" />
                  <span>{contact_information.phone}</span>
                </div>
              )}
              {contact_information?.email && (
                <div className="flex items-center gap-2">
                  <AiOutlineMail className="text-blue-600" />
                  <span>{contact_information.email}</span>
                </div>
              )}
              {contact_information?.address && (
                <div className="flex items-center gap-2">
                  <AiOutlineHome className="text-blue-600" />
                  <span>{contact_information.address}</span>
                </div>
              )}
            </div>
          </div>

          <button
            className="btn w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onClick={handleApplyJob}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

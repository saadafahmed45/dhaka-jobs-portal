// "use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    job_description,
    company_name,
    salary,
    location,
    job_type,
    remote_or_onsite,
    posted_time,
    imageUrl,
    skills = ["Adobe XD", "Figma", "Photoshop"], // Example skills
  } = job;

  return (
    <div className="shadow-lg p-6 border rounded-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
      {/* Company Logo and Name */}
      <div className="flex items-start gap-4 mb-4">
        <img
          className="h-16 w-16 rounded-lg object-cover"
          src={imageUrl}
          alt={company_name}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{company_name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CiLocationOn />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Job Title (Clickable) */}
      <Link href={`/jobs/${_id}`} passHref>
        <h2 className="text-xl font-bold text-blue-600 mb-2 hover:underline cursor-pointer">
          {job_title}
        </h2>
      </Link>

      {/* Job Type and Posted Time */}
      <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <BsBookmark />
          {job_type}
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineAccessTime />
          {posted_time || "A few minutes ago"}
        </span>
      </div>

      {/* Job Description */}
      <p className="text-gray-600 mb-4">{job_description.slice(0, 80)}...</p>

      {/* Skills Badges */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary and Apply Button */}
      <div className="flex justify-between items-center">
        <div className="text-blue-600 text-lg font-semibold">
          {salary ? `$${salary}/Hour` : "N/A"}
        </div>
        <Link
          href={`/apply/${_id}`}
          className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

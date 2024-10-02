// "use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

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
    experiences,
    educational_requirements,
    company_logo_link,
  } = job;

  return (
    <div>
      <div className="shadow-sm p-6 border rounded-lg space-y-3">
        <div className="flex justify-between items-center">
          <img
            className="h-24 rounded w-1/2 object-contain object-center"
            src={company_logo_link}
            alt="content"
          />
          <div className="flex gap-2">
            <Link
              href={`/jobs/${_id}`}
              className=" text-[20px] p-2 outline-none shadow  bg-blue-200 text-blue-700 rounded-full  hover:bg-blue-700 hover:text-white"
            >
              <BsBookmark />
            </Link>
            <Link
              href={`/jobs/${_id}`}
              className=" text-[20px] p-2 outline-none shadow  bg-blue-200 text-blue-700 rounded-full  hover:bg-blue-700 hover:text-white"
            >
              <MdOutlineArrowOutward />
            </Link>
          </div>
        </div>
        <h3 className="text-gray-900 text-md font-medium">{company_name}</h3>
        <h2 className="text-xl text-gray-900 font-semibold">{job_title}</h2>
        <h2 className="text-md text-gray-600 font-semibold">
          {job_description.slice(0, 50)}
        </h2>
        {/* job type */}
        <div className="flex gap-4">
          <div className="badge text-blue-500 badge-outline">{job_type}</div>
          <div className="badge text-blue-500 badge-outline">
            {remote_or_onsite}
          </div>
        </div>
        {/* location and salary */}
        <div className="flex gap-6">
          <h3 className="flex items-center gap-2">
            <span>
              <CiLocationOn />
            </span>{" "}
            {location}
          </h3>
          <h3 className="flex items-center gap-2">
            <span>
              <AiOutlineDollar />
            </span>{" "}
            {salary}
          </h3>
        </div>
        {/* button */}
      </div>
    </div>
  );
};

export default JobCard;

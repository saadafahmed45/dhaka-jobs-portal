import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    job_description,
    company_name,
    salary,
    location,
    job_type,
    remote_or_onsite,
    experiences,
    educational_requirements,
  } = job;
  return (
    <div>
      <div class="shadow-sm p-6 border rounded-lg space-y-3">
        <img
          class="h-24 rounded w-1/2 object-contain object-center"
          src={logo}
          alt="content"
        />
        <h2 class="text-lg text-gray-900 font-semibold  ">{job_title}</h2>
        <h3 class=" text-gray-600 text-md font-medium ">{company_name}</h3>
        {/* job typ  */}
        <div className="flex gap-4">
          <div className="badge text-blue-500 badge-outline">{job_type}</div>
          <div className="badge text-blue-500 badge-outline">
            {remote_or_onsite}
          </div>
        </div>
        {/* location and salary  */}
        <div className="flex gap-6">
          <h3 className="flex items-center gap-2">
            <span>
              {" "}
              <CiLocationOn />
            </span>{" "}
            {location}
          </h3>
          <h3 className="flex items-center gap-2">
            <span>
              {" "}
              <AiOutlineDollar />
            </span>{" "}
            {salary}
          </h3>
        </div>
        {/* btn  */}
        <button className="btn bg-blue-700 text-white hover:text-blue-700 hover:bg-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Job;

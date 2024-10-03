"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "../components/SectionHeader";

const PostJobs = () => {
  const { register, handleSubmit } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    // Convert minSalary and maxSalary to a single salary range field
    const salaryRange = `${data.minSalary}-${data.maxSalary}`;

    // Create the final data object, excluding minSalary and maxSalary
    const { minSalary, maxSalary, ...rest } = data; // Exclude minSalary and maxSalary
    const jobData = {
      ...rest,
      salary: salaryRange, // Add the combined salary range
    };
    console.log(jobData);

    // Post the data to the server
    fetch("https://dhaka-job-portal-server.vercel.app/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Post data", data);
      })
      .catch((error) => {
        console.error("Error adding job:", error);
      });
    alert("posted");
  };

  return (
    <div className="px-4 lg:px-24 py-8 bg-slate-200">
      <div>
        <SectionHeader sectionHeader={"Post a job"} />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* input section  start */}
            <div>
              <label className="text-gray-700" htmlFor="job_title">
                Job Title:
              </label>
              <input
                {...register("job_title")}
                placeholder="Title"
                id="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700" htmlFor="company_name">
                Company Name:
              </label>
              <input
                {...register("company_name")}
                placeholder="Type here"
                id="company_name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* Location: */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Location:
              </label>
              <input
                {...register("location")}
                placeholder="Type here"
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* Remote or Onsite: */}
            <div>
              <label className="text-gray-700" htmlFor="remote_or_onsite">
                Remote or Onsite:
              </label>
              <select
                defaultValue={"default"}
                {...register("remote_or_onsite")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option disabled value={"default"}>
                  Select a Catagory
                </option>
                <option value="Remote">Remote</option>
                <option value="On Site">Onsite</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700" htmlFor="job_type">
                Job Type:
              </label>
              <select
                defaultValue={"default"}
                {...register("job_type")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option disabled value={"default"}>
                  Select a Catagory
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            {/* experiences */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Experiences:
              </label>
              <input
                {...register("experiences")}
                placeholder="Type here"
                id="experiences"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <label htmlFor="minSalary">Minimum Salary:</label>
                <input
                  {...register("minSalary")}
                  type="text"
                  id="minSalary"
                  placeholder="22k"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label htmlFor="maxSalary">Maximum Salary:</label>
                <input
                  {...register("maxSalary")}
                  type="text"
                  id="maxSalary"
                  placeholder="150k"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* educational_requirements: */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Educational Requirements:
              </label>
              <input
                {...register("educational_requirements")}
                placeholder="Type here"
                id="educational_requirements"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* contact_information: */}

            {/* email   */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Email:
              </label>
              <input
                {...register("contact_information.email")}
                placeholder="Type email"
                id="email"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* phone   */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                phone:
              </label>
              <input
                {...register("contact_information.phone")}
                placeholder="Type phone number"
                id="number"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* phone   */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                address:
              </label>
              <input
                {...register("contact_information.address")}
                placeholder="Type address"
                id="text"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* Company Logo:   */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Company Logo:
              </label>
              <input
                {...register("company_logo_link")}
                placeholder="Type logo link"
                id="text"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* Job Description: */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Job Description:
              </label>
              <textarea
                {...register("job_description")}
                placeholder="Type here"
                id="job_description"
                type="text"
                className="block w-full h-32 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            {/* job_responsibility */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Job Responsibility:
              </label>
              <textarea
                {...register("job_responsibility")}
                placeholder="Type here"
                id="job_responsibility"
                type="text"
                className="block w-full h-32 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* input section  end */}
          </div>
          {/* btn */}
          <div className="mt-4">
            <button className="bg-slate-400 btn btn-success" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;

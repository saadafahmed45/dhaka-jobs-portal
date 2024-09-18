"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
const ApplyJob = ({ params }) => {
  const id = params.id;

  const [jobSingle, setJobs] = useState([]);
  useEffect(() => {
    fetch(`https://dhaka-job-portal-server.vercel.app/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // const idInt = parseInt(id);

  // const jobSingle = jobs.find((job) => job.id === idInt);

  // console.log(jobSingle);

  const { register, handleSubmit } = useForm();

  // Function to handle form submission

  const onSubmit = (data) => {
    const appliedData = {
      appliedContact: data,
      jobData: jobSingle,
    };
    console.log(appliedData);

    // Post the data to the server
    fetch("https://dhaka-jobs-server.onrender.com/applied", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appliedData),
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
    <div className=" py-8 px-6 md:px-16 ">
      <div className="flex justify-center items-center space-y-4 py-4">
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md ">
          <div className="mt-2">
            <a
              href="#"
              className="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline"
              tabIndex="0"
              role="link"
            >
              {jobSingle?.job_title}
            </a>
            <p className="mt-2 text-gray-600 ">{jobSingle?.job_description}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="text-blue-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {jobSingle?.salary}
            </a>

            <div className="flex items-center">
              <img
                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt="avatar"
              />
              <a
                className="font-bold text-gray-700 cursor-pointer "
                tabIndex="0"
                role="link"
              >
                {/* {jobSingle?.contact_information.email} */}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* applied contact info  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 justify-items-cente gap-8 ">
          {/* input section  start */}
          <div>
            <label className="text-gray-700" htmlFor="job_title">
              Name:
            </label>
            <input
              {...register("name")}
              placeholder="Title"
              id="job_title"
              type="text"
              className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
          {/* input section  start */}
          <div>
            <label className="text-gray-700" htmlFor="job_title">
              Email:
            </label>
            <input
              {...register("email")}
              placeholder="Title"
              id="job_title"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
          {/* btn */}
          <div className="mt-4">
            <button className="bg-slate-400 btn btn-success" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;

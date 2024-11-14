"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "../components/SectionHeader";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const PostJobs = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState(true); // Simulate user state (replace with actual auth check)
  const router = useRouter(); // Initialize router for redirection

  const imgbbApiKey = "7460ef8f44862495daa7f95295c4edcf";
  const imageHostingApi = `https://api.imgbb.com/1/upload/key=7460ef8f44862495daa7f95295c4edcf`;

  // Function to handle form submission
  const onSubmit = async (data) => {

    if (!user) {
      // If the user is not logged in, redirect to login page
      router.push("/login"); // Assuming '/login' is your login page route
      return;
    }
    // Convert minSalary and maxSalary to a single salary range field
    const salaryRange = `${data.minSalary}-${data.maxSalary}`;

    // Create the final data object, excluding minSalary and maxSalary
    const { minSalary, maxSalary, ...rest } = data; // Exclude minSalary and maxSalary
    const jobData = {
      ...rest,
      salary: salaryRange, // Add the combined salary range
    };

    console.log(jobData);

    // img post

    // Step 3: Handle image file upload to ImgBB (if an image is provided)
    if (data.image && data.image[0]) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imgResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );

      const imageUrl = imgResponse.data.data.url;
      console.log("Image URL", imageUrl);

      // Add image URL to job data
      jobData.imageUrl = imageUrl;
    }

    // Post the data to the server using axios
    axios
      .post("https://dhaka-jobs-server.onrender.com/jobs", jobData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {

        console.log("Post data", response.data);
        if (response.data.insertedId) {
          Swal.fire({
            title: "Your Job is Posted!",
            // text: "You clicked the button!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding job:", error);
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };

  return (
    <div className="px-4 lg:px-24 py-8">
      <div>
        <SectionHeader sectionHeader={"Post a job"} />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="  p-8 rounded-md shadow-lg">
          <div>
            <h2 className="text-lg font-bold pb-6"> Job Information:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* input section  start */}
            <div>
              <label className="text-gray-700" htmlFor="job_title">
                Job Title*:
              </label>
              <input
                {...register("job_title")}
                placeholder="Title"
                id="job_title"
                type="text"
                required
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
                required
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
                <option value="Full Time">Full-Time</option>
                <option value="Part Time">Part-Time</option>
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
                type="file"
                {...register("image")}
                placeholder="Type logo link"
                id="text"
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
            <button className=" btn text-white bg-blue-600 hover:bg-blue-700" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;

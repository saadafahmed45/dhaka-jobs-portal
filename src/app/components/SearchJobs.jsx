"use client";
import { SearchIcon } from "lucide-react";
import { MainContext } from "../Context/Contex";
import { useContext } from "react";

export default function SearchJobs() {

  const { handleSearch, handleChange, quary, onSearchClick, filteredJobs } =
    useContext(MainContext);
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Find Your Dream Job
        </h2>
        <form className="max-w-4xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label
                htmlFor="job-title"
                className="block text-white text-sm font-medium mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                id="job-title"
                placeholder="e.g. Software Engineer"
                onChange={handleChange}
                value={quary.jobTitle}
                name="jobTitle"
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label
                htmlFor="location"
                className="block text-white text-sm font-medium mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="e.g. New York"
                onChange={handleChange}
                value={quary.location}
                name="location"
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="job-type"
                className="block text-white text-sm font-medium mb-2"
              >
                Job Type
              </label>
              <select
                id="job-type"
                onChange={handleChange}
                defaultValue={quary.jobType}
                name="jobType"
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Any</option>
                <option value="full time">Full-time</option>
                <option value="part time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={onSearchClick} // Trigger the search when button is clicked
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              <SearchIcon className="h-5 w-5 mr-2" />
              Search Jobs
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

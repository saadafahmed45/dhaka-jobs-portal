"use client";

const { createContext, useState, useEffect } = require("react");
import axios from "axios";
export const MainContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]); // State to hold all jobs
  const [quary, setQuary] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
  });
  const [filteredJobs, setFilteredJobs] = useState([]); // State to hold filtered jobs

  // Fetch jobs on component mount
  useEffect(() => {
    axios
      .get("https://dhaka-jobs-server.onrender.com/jobs")
      .then((res) => {
        setJobs(res.data); // Store all jobs
        setFilteredJobs(res.data); // Display all jobs initially
      })
      .catch((err) => {
        console.error(err);
        setJobs([]); // If an error occurs, set jobs to an empty array
        setFilteredJobs([]); // Ensure filtered jobs are also empty
      });
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setQuary((prevQuary) => ({
      ...prevQuary,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    handleSearch(e);
  };
  // Handle the search button click
  const onSearchClick = () => {
    const { jobTitle, location, jobType } = quary;

    // Filter jobs based on the search query
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.job_title
        .toLowerCase()
        .includes(jobTitle.toLowerCase());
      const matchesLocation = job.location
        .toLowerCase()
        .includes(location.toLowerCase());

      // If jobType is selected, filter by job type
      const matchesJobType = jobType
        ? job.job_type.toLowerCase() === jobType.toLowerCase()
        : true;

      return matchesTitle && matchesLocation && matchesJobType;
    });

    setFilteredJobs(filtered); // Set filtered jobs to display
  };

  return (
    <MainContext.Provider
      value={{ handleSearch, quary, onSearchClick, filteredJobs, handleChange }}
    >
      {children}
    </MainContext.Provider>
  );
};

"use client";

import axios from "axios";
const { createContext, useState, useEffect } = require("react");
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";

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

  // auth

  const [user, setUser] = useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <MainContext.Provider
      value={{
        handleSearch,
        quary,
        onSearchClick,
        filteredJobs,
        handleChange,
        handleGoogleSignIn,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

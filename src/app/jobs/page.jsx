"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import SectionHeader from "../components/SectionHeader";
import SkeletonCard from "../components/SkeletonCard";
import Link from "next/link";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(4);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://dhaka-jobs-server.onrender.com/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const visibleJobs = jobs.slice(0, visible);

  if (loading) {
    return (
      <div className="py-10">
        <SectionHeader
          sectionHeader="Future Jobs"
          sectionPera="Discover the best job opportunities tailored for you."
        />
        <div >
          {/* Render multiple skeleton cards to indicate loading */}
          {[...Array(2)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-24 py-10 space-y-4">
      <SectionHeader
        sectionHeader="Future Jobs"
        sectionPera="Discover the best job opportunities tailored for you."
      />
      {visibleJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
          {visibleJobs.map((job) => (
            <JobCard job={job} key={job._id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No jobs found. Please check back later.</p>
      )}
      <div className="text-center">
        <Link className=" bg-blue-500 p-2 rounded text-white" href={'/find-job'}> see more jobs</Link>
      </div>
    </div>
  );
};

export default Jobs;

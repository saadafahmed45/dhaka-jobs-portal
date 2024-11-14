import React from "react";
import SectionHeader from "../components/SectionHeader";
import JobCard from "../components/JobCard";

const FindJob = ({ jobs }) => {
  return (
    <div className="px-8 md:px-24 py-10 space-y-4">
      <SectionHeader
        sectionHeader="Find Jobs"
        sectionPera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia."
      />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default FindJob;

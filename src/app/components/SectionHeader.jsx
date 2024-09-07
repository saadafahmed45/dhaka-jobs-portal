import React from "react";

const SectionHeader = ({ sectionHeader, sectionPera }) => {
  return (
    <div>
      <div className="text-center py-2 md:py-8 space-y-2">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 ">
          {sectionHeader}
        </h1>
        <p className="text-md  text-gray-700 ">{sectionPera}</p>
      </div>
    </div>
  );
};

export default SectionHeader;

import React from "react";

const SectionHeader = ({ sectionHeader, sectionPera }) => {
  return (
    <div className="flex justify-center">
      <div className="text-center py-2 md:py-8 space-y-2 w-[90%] md:w-[50%]">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 ">
          {sectionHeader}
        </h1>
        <p className="text-md  text-gray-700 ">{sectionPera}</p>
      </div>
    </div>
  );
};

export default SectionHeader;

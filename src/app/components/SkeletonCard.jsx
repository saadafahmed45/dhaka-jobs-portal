import React from "react";

const SkeletonCard = () => {
  const loaderCard = [1, 2, 3, 4, ];
  return (
    <div className="">
      <div className="grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        {loaderCard.map((ld, index) => (
          <div
            key={index}
            className="flex flex-col m-8 rounded shadow-md w-72 sm:w-72 animate-pulse h-96"
          >
            <div className="h-48 rounded-t dark:bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
              <div className="w-full h-6 rounded dark:bg-gray-300"></div>
              <div className="w-full h-6 rounded dark:bg-gray-300"></div>
              <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;

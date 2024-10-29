import React from "react";

const SearchJobs = () => {
  return (
    <div className="container md:px-24 px-8 py-24 mx-auto">
      <div className=" ">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Account settings
          </h2>

          <form>
            <div className="flex items-center justify-between gap-4">
              <div>
                <label
                  className="text-gray-700 "
                  for="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 "
                  for="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
   <div className="mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
             
            </div>

         
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchJobs;

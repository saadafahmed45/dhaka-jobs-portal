import React from "react";

const Ctg = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="flex flex-col items-center mx-auto max-w-[52.5rem] px-6 py-16 gap-y-16 lg:max-w-[78rem]">
          <div className="mx-auto max-w-[36.75rem] text-center *:text-gray-950 ">
            <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
              Uisual Studio Stats
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vitae mattis tellus. Pellentesque commodo lacus at sodales.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 items-center mx-auto gap-6 md:grid-cols-2 lg:grid-cols-4 *:w-full *:col-span-1 *:bg-gray-100  *:px-6 *:py-12 *:rounded-lg *:text-center">
            <div>
              <h4 className="text-2xl text-blue-600 font-bold mb-2 lg:text-3xl">
                500k+
              </h4>
              <p className="text-base font-medium text-gray-950 ">
                Monthly Visitors
              </p>
            </div>
            <div>
              <h4 className="text-2xl text-blue-600 font-bold mb-2 lg:text-3xl">
                250k+
              </h4>
              <p className="text-base font-medium text-gray-950 ">
                Registered Users
              </p>
            </div>
            <div>
              <h4 className="text-2xl text-blue-600 font-bold mb-2 lg:text-3xl">
                175k+
              </h4>
              <p className="text-base font-medium text-gray-950 ">
                Monthly Downloads
              </p>
            </div>
            <div>
              <h4 className="text-2xl text-blue-600 font-bold mb-2 lg:text-3xl">
                100k+
              </h4>
              <p className="text-base font-medium text-gray-950 ">
                Email Subscribers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ctg;

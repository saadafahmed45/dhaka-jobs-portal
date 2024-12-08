"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { MainContext } from "../Context/Contex";
import { useRouter } from "next/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
    console.log("click the nav");
  };

  const router = useRouter();
  const profileClick = () => {
    router.push("/profile");
  }
  // const [user, setUser] = useState(false)

  const { user } = useContext(MainContext)
  return (
    <div>
      <nav
        // x-data="{ isOpen: false }"
        className="relative bg-white shadow "
      >
        <div className="container px-6 md:px-12 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link href={"/"} className="text-2xl font-bold text-slate-800">
                Dhaka /<span className="text-blue-700">Jobs</span>
                <span className="text-[12px]">.com</span>
              </Link>
              {/* mobile nav btn  */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {open ? (
                    <svg
                      onClick={toggleButton}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      // x-show="!isOpen"
                      onClick={toggleButton}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {/* mobile nav btn  */}
            </div>
            <div
              className={`${open == true
                ? "translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-6 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
                : "opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
                }`}
            >
              {/* <div  className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"> */}
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 font-semibold">
                <Link
                  href={"/"}
                  className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
                >
                  Home
                </Link>

                <Link
                  href={"/find-job"}
                  className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
                >
                  Find Work
                </Link>
                <Link
                  href={"/job-manage"}
                  className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
                >
                  Find Work
                </Link>
                {
                  user.emailVerified === true && <Link
                    href={"/appliedJobs"}
                    className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 "
                  >
                    Applied Jobs
                  </Link>
                }

                {/* <Link
                  href={"/postJobs"}
                  className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 bg-blue-600  hover:bg-blue-700 "
                >
                  Post a job
                </Link> */}
              </div>

              {
                user?.emailVerified == true ? <div className="flex items-center mt-4 lg:mt-0">
                  <button
                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-800 dark:hover:text-gray-400 focus:text-gray-800 dark:focus:text-gray-400 focus:outline-none"
                    aria-label="show notifications "
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button

                    onClick={profileClick}
                    className="md:flex items-center focus:outline-none hidden"
                    aria-label="toggle profile dropdown"
                  >
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img
                        src={user.photoURL}
                        className="object-cover w-full h-full"
                        alt="avatar"
                      />
                    </div>


                  </button>
                </div> : <Link
                  href={"/login"}
                  className="px-5 py-2 mx-3 mt-2 text-gray-900 transition-colors duration-300 transform rounded-md lg:mt-0 border hover:text-white  bg-white  hover:bg-blue-700 "
                >
                  Sign In
                </Link>
              }

              <Link
                href={"/postJobs"}
                className="px-5 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 bg-blue-600  hover:bg-gray-800 "
              >
                Post a job
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

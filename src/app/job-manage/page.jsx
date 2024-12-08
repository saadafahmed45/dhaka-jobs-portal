'use client'
import React, { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import axios from 'axios';
import Swal from 'sweetalert2';

const JobManagePage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
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
    const {
        _id,
        job_title,
        job_description,
        company_name,
        salary,
        location,
        job_type,
        remote_or_onsite,
        posted_time,
        imageUrl,
    } = jobs;


    // delete product

    const handleDelete = (_id) => {
        console.log("dlt", _id);

        fetch(`https://dhaka-jobs-server.onrender.com/jobs/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setJobs(jobs.filter((job) => job._id !== _id));

                    Swal.fire({
                        title: "Deleted the job!",
                        text: "You clicked the button!",
                        icon: "success",
                    });

                }
            });
    };
    return (
        <div className='px-16 py-8'>
            <div>
                <SectionHeader sectionHeader={"Manage all jobs"} />
            </div>
            <div className="mt-6 overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                                Job Title
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                                Company
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                                Location
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                                Type
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {jobs.map(({ _id,
                            job_title,
                            job_description,
                            company_name, location, job_type }) => (
                            <tr key={_id}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    {job_title}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    {company_name}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    {location}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    {job_type}
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button
                                            onClick={() => handleEdit(job.id)}
                                            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={() => handleDelete(_id)}
                                            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobManagePage
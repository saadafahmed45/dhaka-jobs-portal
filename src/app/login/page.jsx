'use client'
import React, { useContext, useEffect } from 'react'
import { MainContext } from '../Context/Contex'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

    const { user } = useContext(MainContext)
    const router = useRouter();

    useEffect(() => {
        if (user?.emailVerified) {
            router.push("/postJobs");
        }
    }, [user, router]);

    const { handleGoogleSignIn } = useContext(MainContext)
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 py-16'>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
                <div
                    className="hidden bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
                    }}
                ></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600">
                        Welcome back!
                    </p>

                    <a onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                {/* SVG paths omitted for brevity */}
                            </svg>
                        </div>
                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                    </a>

                    {/* Other login form fields */}
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Email Address</label>
                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <a href="#" className="text-xs text-gray-500 hover:underline">Forget Password?</a>
                        </div>
                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none" type="password" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase hover:underline">or sign up</a>
                        <span className="w-1/5 border-b md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

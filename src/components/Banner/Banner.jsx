import React from "react";
import Lottie from "lottie-react";
import search from "../../assets/searchjob.json";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 my-8 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 ">
            <div className="mx-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans  font-bold tracking-tight lg:text-5xl text-gray-900 sm:text-4xl sm:leading-none ">
                One Step Closer To Your
                <span className="inline-block  text-purple-500">Dream Job</span>
              </h2>
              <p className="font-serif font-medium text-black g:text-lg md:text-lg">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
            </div>
            <div className="className='flex flex-col items-center md:flex-row'">
              <Link
                to="/home"
                className="border-2 border-pink-400 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-fuchsia-800 hover:bg-sky-100 hover:font-bold hover:text-orange-500 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Get Started</span>
              </Link>
              <Link
                to="/home"
                aria-label=""
                className="inline-flex items-center font-bold text-gray-900 transition-colors duration-200 hover:text-blue-700"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
              <Lottie animationData={search} loop={true}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

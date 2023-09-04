import React from "react";
import Banner from "../Banner/Banner.jsx";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory.jsx";
import Jobs from "../Jobs/Jobs.jsx";
const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs)
  return (
    <div className=" ">
      <div>
        <Banner></Banner>
      </div>
      <div>
            <JobCategory></JobCategory>
      </div>
      <div>
          <div className="text-center my-14">
                <h1 className="text-4xl mb-4 font-semibold font-serif">Featured Jobs</h1>
                <p className="text-base text-black">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 p-6 mb-6">
              {
                jobs.map(job =><Jobs
                key={job.id}
                job = {job}
                ></Jobs>)
              }
            </div>
            <div className="mb-6 text-center">
                <button className="bg-blue-500 border border-orange-300 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 font-bold text-white hover:from-blue-800 hover:via-purple-800 hover:to-pink-800">
                  See All Jobs
                </button>
            </div>

          <div>

          </div>
      </div>
    </div>
  );
};

export default Home;

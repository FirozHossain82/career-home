import React from "react";
import { useLoaderData } from "react-router-dom";

const JobCategory = ({ category }) => {
  // console.log(category);
  const { picture, title, available_jobs } = category;
  return (
    <div>
        <div>
            <h1>Job Category List</h1>
            <span>Explore thousands of job opportunities with all the information you need. Its your future</span>
        </div>
      <div className=" mx-auto  shadow-lg rounded-lg overflow-hidden bg-blue-100">
        <img className="w-10 h-10 object-cover   " src={picture} alt="Job" />
        <div className="p-4">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold">
            {title}
          </h2>
          <p className="text-gray-600"> {available_jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

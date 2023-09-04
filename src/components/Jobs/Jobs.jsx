import React from "react";

const Jobs = ({ job }) => {
  const {
    logo,
    title,
    company_name,
    job_type,
    job_type1,
    job_location,
    salary,
  } = job;
  return (
    <div className=" shadow-md rounded-md  bg-slate-50 pl-10 py-7">
      <img className="h-10  w-40 mb-5" src={logo} alt="" />

      <div>
        <h1 className="text-2xl font-semibold text-black mb-2">{title}</h1>
        <h1 className="text-xl font-medium text-slate-600 mb-2">{company_name}</h1>
      </div>
      <div className="flex gap-6 mb-4">
        <button className="border border-purple-600 text-blue-600 rounded font-semibold py-2 px-4">{job_type}</button>
        <button className="border border-purple-600 text-blue-600 rounded font-semibold py-2 px-4">{job_type1}</button>
      </div>
      <div className="flex gap-6 mb-4">
        <p className="text-xl text-gray-600">{job_location}</p>
        <p className="text-xl text-gray-600">Salary: {salary}</p>
      </div>
      <button className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 font-semibold py-2 px-4 rounded-md ">
        View Details
      </button>
    </div>
  );
};

export default Jobs;

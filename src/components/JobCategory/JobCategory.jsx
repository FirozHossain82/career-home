import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryDetails from "./../JobCategoryDetails/JobCategoryDetails";

const JobCategory = () => {
  const [categoryes, setCategoryes] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategoryes(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-14">
            <h1 className="text-4xl mb-4 font-semibold font-serif">Job Category List</h1>
            <p className="text-base text-black">Explore thousands of job opportunities with all the information you need. Its your future.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 p-4 my-12 ">
        {categoryes.map((category) => (
          <JobCategoryDetails
            key={category.id}
            category={category}
          ></JobCategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;

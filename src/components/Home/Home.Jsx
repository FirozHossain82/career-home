import React from "react";
import Banner from "../Banner/Banner.jsx";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory.jsx";
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
          
      </div>
    </div>
  );
};

export default Home;

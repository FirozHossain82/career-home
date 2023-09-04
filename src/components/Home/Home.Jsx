import React from "react";
import JobCategory from "../JobCategory/JobCategory.jsx";
import Banner from "../Banner/Banner.jsx";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const categoryes = useLoaderData();
  console.log(categoryes);
  return (
    <div className=" ">
      <div>
          <Banner></Banner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-8 ">
              {
                categoryes.map(category => <JobCategory
                key={category.id}
                category={category}
                ></JobCategory>)
              }
      </div>
    </div>
  );
};

export default Home;

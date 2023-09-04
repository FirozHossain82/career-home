import React from "react";

const JobCategoryDetails = ({ category }) => {
  // console.log(category)
  const { picture, title, available_jobs } = category;
  return (
    <div>
      <div className=" mx-auto  shadow-lg rounded-lg overflow-hidden bg-blue-100  ">
           <div className=" md:pl-36 lg:pl-36 sm:pl-60 py-4 text-center">
                <img className="w-12 h-12 object-cover  " src={picture} alt="Job" />
           </div>
        <div className="p-4 text-center ">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold font-serif  ">
            {title}
          </h2>
          <p className="text-gray-800 font-semibold "> {available_jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryDetails;

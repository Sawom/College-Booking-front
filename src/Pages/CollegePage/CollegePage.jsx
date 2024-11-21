import React, { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const CollegePage = () => {
  const [college, setCollege] = useState([]);

  // load home college data
  useEffect(() => {
    fetch("https://college-booking-back.onrender.com/college")
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {/* show college */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-10 px-4">
        {college.length > 0 ? (
          college.map((clgData) => (
            <CollegeCard clgData={clgData} key={clgData._id}></CollegeCard>
          ))
        ) : (
          <h1 className="text-xl"> No result has found! </h1>
        )}
      </div>
    </div>
  );
};

export default CollegePage;

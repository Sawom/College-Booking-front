import React, { useEffect, useState } from "react";
import CollegeListCard from "./CollegeListCard";

const CollegeList = () => {
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
      <p className="font-bold text-center mt-10 text-2xl">
        {" "}
        Admission Going On!!{" "}
      </p>
      {/* college list */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 my-10 px-4">
        {college.length > 0 ? (
          college.map((clgData) => (
            <CollegeListCard
              clgData={clgData}
              key={clgData._id}
            ></CollegeListCard>
          ))
        ) : (
          <h1 className="text-xl"> No result has found! </h1>
        )}
      </div>
    </div>
  );
};

export default CollegeList;

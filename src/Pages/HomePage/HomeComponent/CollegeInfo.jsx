import React from "react";

const CollegeInfo = ({ clgData }) => {
  const {
    img,
    collegeName,
    ratings,
    noOfResearch,
    event,
    researchHistory,
    sportsFacilities,
  } = clgData;

  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-2xl px-2">
        <figure>
          <img className="w-full" src={img} alt="college" />
        </figure>
        {/* <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > {price} BDT </p> */}
        <div className="card-body text-left ">
          <h2 className="card-title font-bold" style={{ color: "#212E52" }}>
            {" "}
            {collegeName}{" "}
          </h2>
          <p> Ratings: {ratings} </p>
          <p> Total research: {noOfResearch} </p>
          <p>Event: {event} </p>
          <p>
            Research History:
            <ul>
              {clgData.researchHistory.map((research, i) => (
                <li key={i}>
                  <strong>Year:</strong> {research.year} <br />
                  <strong>Topic:</strong> {research.topic} <br />
                  <strong>Outcome:</strong> {research.outcome}
                </li>
              ))}
            </ul>
          </p>
          <p>
            <strong>Sports Facilities:</strong>
            <ul>
              {clgData.sportsFacilities.map((sport, i) => (
                <li key={i}>{sport}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;

import React from "react";
import { Rating } from "@smastrom/react-rating";
import { useLocation, useNavigate } from "react-router-dom";

const CollegeInfo = ({ clgData }) => {
  const {
    _id,
    img,
    collegeName,
    ratings,
    noOfResearch,
    event,
    researchHistory,
    sportsFacilities,
  } = clgData;

  let navigate = useNavigate();
  const location = useLocation(); 
  // dynamic route url
  const url = `/collegeinfo/${_id}` ;
  const handleView = ()=>{
    navigate(url);
  }

  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-2xl px-2">
        <figure>
          <img className="w-full" src={img} alt="college" />
        </figure>
       
        <div className="card-body text-left ">
          <h2 className="card-title font-bold" style={{ color: "#212E52" }}>
            {collegeName}
          </h2>
          <p> <strong>Ratings:</strong>  </p>
          <Rating style={{ maxWidth: 100 }} value={ratings} readOnly  />
          <p> <strong>Total research:</strong>   {noOfResearch} </p>
          <p> <strong>Event:</strong>  {event} </p>
          <p>
            <strong>Research History:</strong> 
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

          <button onClick={handleView}  style={{backgroundColor: '#212E52'}} 
            className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm 
            md:btn-md lg:btn-md "> <span className='flex gap-1'> 
             View details </span> </button>

        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;

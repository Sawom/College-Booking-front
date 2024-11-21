import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://college-booking-back.onrender.com/homedata/${id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="container mx-auto mt-5 px-2 ">
      {/* 1 */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-3 gap-4">
        <figure>
          <img className="w-100 " src={details.img} alt="college" />
        </figure>
        <div className=" text-left mt-10">
          <h2 className="card-title font-bold" style={{ color: "#212E52" }}>
            {" "}
            {details.collegeName}{" "}
          </h2>
          <br />
          <Rating style={{ maxWidth: 100 }} value={details.ratings} readOnly />
          <p>
            {" "}
            <span className="font-bold">Admission Date:</span>{" "}
            {details.admissionDate}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Event:</span> {details.event}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Event Details:</span>{" "}
            {details.eventsDetails}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Total Research:</span>{" "}
            {details.noOfResearch}{" "}
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="mt-10">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          More Information
        </h1>{" "}
        <br />
        <div>
          <p>
            {" "}
            <span className="font-bold">Admission Process:</span>{" "}
            {details.admissionProcess}{" "}
          </p>
          <br />
          {/* Research Works */}
          <p className="font-bold"> Research Works: </p>
          <ul>
            {details.researchWorks &&
            Array.isArray(details.researchWorks) &&
            details.researchWorks.length > 0 ? (
              details.researchWorks.map((work, i) => <li key={i}>{work}</li>)
            ) : (
              <p>No research works available.</p>
            )}
          </ul>
          <br />

          {/* Research History */}
          <p>
            {" "}
            <span className="font-bold">Research History:</span>{" "}
          </p>
          <ul>
            {details.researchHistory &&
            Array.isArray(details.researchHistory) &&
            details.researchHistory.length > 0 ? (
              details.researchHistory.map((research, i) => (
                <li key={i}>
                  <strong>Year:</strong> {research.year} <br />
                  <strong>Topic:</strong> {research.topic} <br />
                  <strong>Outcome:</strong> {research.outcome}
                </li>
              ))
            ) : (
              <p>No research history available.</p>
            )}
          </ul>
          <br />

          {/* sports Facilities */}
          <p>
            {" "}
            <span className="font-bold">Sports Facilities:</span>{" "}
          </p>
          <ul>
            {details.sportsFacilities &&
            Array.isArray(details.sportsFacilities) &&
            details.sportsFacilities.length > 0 ? (
              details.sportsFacilities.map((facility, i) => (
                <li key={i}>{facility}</li>
              ))
            ) : (
              <p>No sports facilities available.</p>
            )}
          </ul>

          <br />
          {/* Sports Categories */}
          <p className="font-bold"> Sports Categories: </p>
          {details.sportsCategories ? (
            <div>
              <p className="font-bold">Outdoor Sports:</p>
              <ul>
                {details.sportsCategories.outdoor &&
                Array.isArray(details.sportsCategories.outdoor) &&
                details.sportsCategories.outdoor.length > 0 ? (
                  details.sportsCategories.outdoor.map((sport, i) => (
                    <li key={i}>{sport}</li>
                  ))
                ) : (
                  <p>No outdoor sports available.</p>
                )}
              </ul>

              <p className="font-bold">Indoor Sports:</p>
              <ul>
                {details.sportsCategories.indoor &&
                Array.isArray(details.sportsCategories.indoor) &&
                details.sportsCategories.indoor.length > 0 ? (
                  details.sportsCategories.indoor.map((sport, i) => (
                    <li key={i}>{sport}</li>
                  ))
                ) : (
                  <p>No indoor sports available.</p>
                )}
              </ul>
            </div>
          ) : (
            <p>No sports categories available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;

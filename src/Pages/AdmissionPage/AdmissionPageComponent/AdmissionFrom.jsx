import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdmissionFrom = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/college/${id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="mt-10 container mx-auto">
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
          <div className="mt-5">
            <form action="">
              {/* name */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Candidate Name*
                  </span>
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={""}
                  placeholder="Your Name"
                  name="name"
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* email */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Candidate Email*
                  </span>
                </label>
                <input
                  type="email"
                  readOnly
                  defaultValue={""}
                  placeholder="Your Name"
                  name="name"
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* subject */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">Subject*</span>
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={""}
                  placeholder="Your Name"
                  name="name"
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* phone no */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Phone number*
                  </span>
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={""}
                  placeholder="Your Name"
                  name="name"
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* address */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">Address*</span>
                </label>
                <input
                  type="text"
                  defaultValue={""}
                  placeholder="Your Name"
                  name="name"
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* dob */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">Address*</span>
                </label>
                <input
                  type="date"
                  defaultValue={""}
                  placeholder="Your birthday"
                  name="name"
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* pics */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">Address*</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-info w-full "
                />
              </div>

              {/* submit button */}
               <button   style={{backgroundColor: '#212E52'}} 
                    className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm 
                    md:btn-md lg:btn-md "> <span className='flex gap-1'> 
                    Submit </span> 
                </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFrom;

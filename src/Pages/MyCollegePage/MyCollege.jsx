import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Authentication/useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const MyCollege = () => {
  const { user, loading, setLoading } = useAuth();
  const [admissionData, setAdmissionData] = useState([]);

  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(null);

  // load home college data
  useEffect(() => {
    if (user && user?.email) {
      fetch(`http://localhost:5000/admission?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmissionData(data);
        })
        .catch((error) => {
          console.error("Error fetching admission data:", error);
          setLoading(false);
        });
    }
  }, [user]);

   // add review
  const onSubmit = (data) => {
    const formData = new FormData();
    const { collegeName, name, review, rating } = data;
    axios.post(
        "http://localhost:5000/reviews",
        data
      )
      .then((data) => {
        if (data.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for your review",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto ">
        <p className="font-bold text-center text-2xl"> Admission Profile </p>

        {admissionData.map((data, index) => (
          <div className="grid lg:grid-cols-2 mb-10 md:grid-cols-2 grid-cols-1 w-full shadow-xl p-3 gap-4">
            {/* 1 */}
            <div>
              <figure>
                <img
                  className="mb-2 w-[200px] h-[200px] rounded-full object-cover"
                  src={data.img || "https://via.placeholder.com/200"}
                  alt="college"
                />
              </figure>
            </div>
            {/* 2 */}
            <div>
              <p>
                <strong>College Name:</strong> {data.collegeName}
              </p>
              <p>
                <strong>Candidate Name:</strong> {data.name}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Subject</strong> {data.subject}
              </p>
              <p>
                <strong>Phone</strong> {data.phone}
              </p>
              <p>
                <strong>Address</strong> {data.address}
              </p>
              <p>
                <strong>Date of Birth: </strong> {data.dob}
              </p>
            </div>
          </div>
        ))}

        {/* review form */}
        <div className="container mx-auto mt-4 mb-4 flex justify-center items-center">
          <div className="card w-full max-w-lg shrink-0 p-5 shadow-xl">
            <h2 className=" text-center font-bold text-2xl"> Your review </h2>
            {/* form */}
            <form className="card-body"  onSubmit={handleSubmit(onSubmit)} >
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reviewed by:</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  name="name"
                  defaultValue={""}
                  {...register("name", { required: true })}
                />
              </div>
              {/* college name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">College Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="College Name"
                  className="input input-bordered"
                  name="collegeName"
                  defaultValue={""}
                  {...register("collegeName", { required: true })}
                />
              </div>
              {/* your review */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your review:</span>
                </label>
                <input
                  type="text"
                  placeholder="Your review"
                  className="input input-bordered"
                  name="review"
                  defaultValue={""}
                  {...register("review", { required: true })}
                />
              </div>
              {/* ratings */}
              <div className="form-control rating mb-5">
              <label className="label">
                <span className="label-text">Ratings:</span>
              </label>
              {/* Radio buttons for 5-star rating */}
              <div className="flex">
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  className="mask mask-star-2 bg-green-500"
                  {...register("rating", { required: true })}
                />
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  className="mask mask-star-2 bg-green-500"
                  {...register("rating", { required: true })}
                />
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  className="mask mask-star-2 bg-green-500"
                  {...register("rating", { required: true })}
                />
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  className="mask mask-star-2 bg-green-500"
                  {...register("rating", { required: true })}
                />
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  className="mask mask-star-2 bg-green-500"
                  {...register("rating", { required: true })}
                />
              </div>
            </div>

            {/* button */}
            <button
                className="btn "
                style={{
                  backgroundColor: "#016A4E",
                  color: "white",
                  fontStyle: "bold",
                }}>
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;

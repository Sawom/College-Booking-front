import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
    const [update, setUpdate] = useState({});
    const {id} = useParams();

    // single data load
    useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/admission/${id}`
        );
        setUpdate(response.data);
        // Populate form with fetched data
        reset({
          name: response.data.name,
          collegeName: response.data.collegeName,
          address: response.data.address,
        });
      } catch (error) {
        console.error("Failed to fetch review data:", error);
      }
    };

    fetchReview();
  }, [id, reset]);

  // handle form submit
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/admission/${id}`,
        data
      );

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated",
          showConfirmButton: false,
          timer: 2000,
        });
        // Reset the form after update
        useEffect(() => {
          if (update) {
            reset({
              name: update.name || "",
              collegeName: update.collegeName || "",
              address: update.address || "",
            });
          }
        }, [update, reset]);
        // update user info in reset function
      }
    } catch (error) {
      console.error("Error updating!", error);
    }
  };  

  return (
    <div className="mt-10">
      <p className="font-bold text-center text-2xl">Update</p>
      <div className="container mx-auto  flex justify-center items-center">
        <div className="card w-full max-w-lg shrink-0 p-5 shadow-xl  ">
          {/* form */}
          <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
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
                defaultValue={update.name}
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
                {...register("collegeName", { required: true })}
                defaultValue={update.collegeName}
              />
            </div>

            {/* address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
                name="address"
                {...register("address", { required: true })}
                defaultValue={update.address}
              />
            </div>

            {/* submit button */}
            <div className="form-control mt-6">
              <button
                className="btn "
                style={{
                  backgroundColor: "#212E52",
                  color: "white",
                  fontStyle: "bold",
                }}
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
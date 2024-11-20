import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Authentication/useAuth/useAuth";

const AdmissionFrom = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [details, setDetails] = useState({});

  // img host url
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=8a5a04f93faaf1072c6596fcf564df79`;

  useEffect(() => {
    fetch(`http://localhost:5000/college/${id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data));
  }, []);

  // add form data
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgUrl = imgResponse.data.display_url;
        const { collegeName, name, email, subject, phone, address, dob } = data;
        const newData = {collegeName, name, email, subject, phone, address, dob, img:imgUrl }
        axios.post("http://localhost:5000/admission", newData)
        .then((data) => {
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Form submitted successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      });
  };

  return (
    <div className="mt-10 container mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-3 gap-4">
        <figure>
          <img className="w-100 " src={details.img} alt="college" />
        </figure>
        <div className=" text-left mt-10">
          <h2 className="card-title font-bold" style={{ color: "#212E52" }}>
            {details.collegeName}
          </h2>
          <br />
          <Rating style={{ maxWidth: 100 }} value={details.ratings} readOnly />
          <div className="mt-5">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              {/* college name */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    College Name*
                  </span>
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={details.collegeName}
                  placeholder="College Name"
                  name="collegeName"
                  {...register("collegeName", { required: true })}
                  className="input input-info input-bordered w-full "
                />
              </div>

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
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                  name="name"
                  {...register("name", { required: true })}
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
                  defaultValue={user.email}
                  placeholder="Your email"
                  name="email"
                  {...register("email", { required: true })}
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
                  defaultValue={""}
                  placeholder="Your subject"
                  name="subject"
                  {...register("subject", { required: true })}
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
                  defaultValue={""}
                  placeholder="Your phone number"
                  name="phone"
                  {...register("phone", { required: true })}
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
                  placeholder="Your address"
                  name="address"
                  {...register("address", { required: true })}
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* dob */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Date of birth*
                  </span>
                </label>
                <input
                  type="date"
                  defaultValue={""}
                  placeholder="Your birthday"
                  name="dob"
                  {...register("dob", { required: true })}
                  className="input input-info input-bordered w-full "
                />
              </div>

              {/* pics */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Your Picture*
                  </span>
                </label>
                <input
                  type="file"
                  name="img"
                  {...register("img", { required: true })}
                  className="file-input file-input-bordered file-input-info w-full "
                />
              </div>

              {/* submit button */}
              <button
                style={{ backgroundColor: "#212E52" }}
                className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm 
                    md:btn-md lg:btn-md "
              >
                <span className="flex gap-1">Submit </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFrom;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProfile = () => {
   const [update, setUpdate] = useState({});
    const {id} = useParams();

    // single data load
    useEffect( ()=>{
        fetch(`http://localhost:5000/admission/${id}`)
        .then(res=> res.json())
        .then( (data)=>{
            setUpdate(data)
        } )
    }, [] )

  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <p className="font-bold text-center text-2xl">Update</p>
        <div className="card w-full max-w-lg shrink-0 p-5 shadow-xl">
          {/* form */}
          <form className="card-body">
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
                
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

import React, { useEffect, useState } from "react";
import useAuth from "../../Authentication/useAuth/useAuth";

const MyCollege = () => {
  const { user, loading, setLoading } = useAuth();
  const [admissionData, setAdmissionData] = useState([]);

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

  return (
    <div className="mt-10">
      <div className="container mx-auto ">
        <p className="font-bold text-center text-2xl"> Admission Profile </p>

        {admissionData.map((data, index) => (
          <div className="grid lg:grid-cols-2 mb-10 md:grid-cols-2 grid-cols-1 w-full shadow-2xl p-3 gap-4">
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
                <p> <strong>College Name:</strong> {data.collegeName} </p> 
                <p> <strong>Candidate Name:</strong> {data.name} </p>
                <p> <strong>Email:</strong> {data.email} </p>
                <p> <strong>Subject</strong> {data.subject} </p>
                <p> <strong>Phone</strong> {data.phone} </p>
                <p> <strong>Address</strong> {data.address} </p>
                <p> <strong>Date of Birth: </strong> {data.dob} </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;

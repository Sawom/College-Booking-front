import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import reg from "../../images/gif/reg.gif";
import useAuth from "../useAuth/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const { user } = useAuth();

  const navigate = useNavigate();
  // navigate
  if (user?.email) {
    navigate("/");
  }

  // name
  const handleName = (event) => {
    setName(event.target.value);
  };

  // email
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // confirm password
  const handleConfirmpass = (event) => {
    setConfirmpass(event.target.value);
  };

  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // register new user
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = { name: name, email: email };
        fetch("https://college-booking-back.onrender.com/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title:
                  "Now you are registered. Congratulations! Check your email to verify your email address.",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          });
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // set user name
  const setUserName = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // create a register user
  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmpass) {
      setError("Your password did not match! ");
      return;
    }
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    registerNewUser(email, password);
  };

  return (
    <div>
      <div className="hero container mt-5 mx-auto bg-base-100 min-h-screen ">
        <div className="hero-content  shadow-2xl flex-col lg:flex-row-reverse">
          {/* 1st div */}
          <div className="text-center mt-10 lg:text-left">
            <img src={reg} className="py-6" alt="" />
          </div>
          {/* 2nd div */}
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleRegistration} className="card-body">
              <h1 className="text-3xl mt-8 mx-auto font-bold ">Sign Up</h1>
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  onBlur={handleName}
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  onBlur={handleEmail}
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  onBlur={handlePassword}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    <small>*Password Must be at least 6 characters long</small>
                  </p>
                </label>
              </div>
              {/* retype password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Retype Password</span>
                </label>
                <input
                  type="password"
                  onBlur={handleConfirmpass}
                  name="password2"
                  placeholder="retype password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  style={{ backgroundColor: "#212E52" }}
                  className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md"
                >
                  <span className="flex gap-2"> Register </span>
                </button>
              </div>
              <p>
                Already registered?
                <Link to="/login">
                  <span className="font-bold text-primary  px-2">
                    Go to LogIn
                  </span>
                </Link>
              </p>
              <br />
              {/* error */}
              <p className="text-red-600"> {error} </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

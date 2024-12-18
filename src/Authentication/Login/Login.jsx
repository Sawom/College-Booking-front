import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../images/gif/login.gif";
import useAuth from "../useAuth/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // google sign in
  const { user, signInWithGoogle, githubSignIn } = useAuth();
  const auth = getAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // email
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // handle login with email
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .then(() => {
        Swal.fire({
          title: "User Login Successful!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // user login
  const handleUserLogin = (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  // reset password
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(auth, email)
        .then((result) => {
          Swal.fire({
            title: "Email sent. Check your email.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      Swal.fire({
        title: "Please enter your email address",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  // google login
  const handleGoogleSignIn = () => {
    signInWithGoogle();
    navigate(from, {replace: true});
  };

  // github login
  const handleGithubSignIn = () =>{
    githubSignIn();
    navigate(from, {replace: true});
  }

  return (
    <div>
      <div className="hero container mt-5 mx-auto bg-base-100 min-h-screen ">
        <div className="hero-content  shadow-2xl flex-col lg:flex-row">
          {/* 1st div */}
          <div className="text-center mt-10 lg:text-left">
            <img src={login} className="py-6" alt="" />
          </div>
          {/* 2nd div */}
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleUserLogin} className="card-body">
              <h1 className="text-3xl mt-8 mx-auto font-bold ">Login</h1>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  onBlur={handleEmail}
                  name="email"
                  placeholder="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  style={{ backgroundColor: "#212E52" }}
                  className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "
                >
                  <span className="flex gap-2"> Login </span>
                </button>
              </div>
              {/* error */}
              <p className="text-red-600"> {error} </p>
              <p>
                New here?
                <Link to="/register">
                  
                  <span className="font-bold text-primary px-2">
                    Create a New Account
                  </span>
                </Link>
              </p>
              <p className="mx-auto">Or Sign In </p>
              {/* google login button */}
              <button
                onClick={handleGoogleSignIn}
                style={{ backgroundColor: "#212E52" }}
                className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md ">
              <span className="flex gap-2"> Sign in With Google </span>
              </button>
              {/* github */}
              {/* github sign in */}
                <button
                onClick={handleGithubSignIn}
                style={{ backgroundColor: "#212E52" }}
                className="btn px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md "
              >Sign in With Github</button>
              {/* reset password */}
              <p>
                Forgot password?
                <button
                  onClick={resetPassword}
                  className="btn btn-link font-bold text-primary "
                  style={{ textDecoration: "none" }}
                >
                  Reset Password
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
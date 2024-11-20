import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Authentication/useAuth/useAuth";
import logo from "../images/logo.svg";

const Header = () => {
  const { user, logoutUser } = useAuth();

  // logout function
  const logoutFunction = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Signed Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire("Signed out!", "You are signed out.", "success");
      }
    });
  };

  return (
    <div className=" bg-base-100 shadow-xl">
      <div className="navbar container mx-auto">
        {/* start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* responsive part */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/college">College</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
              <li>
                <Link to="/college">College</Link>
              </li>
            </ul>
          </div>
          <img src={logo} style={{ width: "60px" }} alt="" />
        </div>

        {/* center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/college">College</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/college">College</Link>
            </li>
          </ul>
        </div>

        {/* login/logout button */}
        <div className="navbar-end">
          {user?.email ? (
            <button
              onClick={logoutFunction}
              className="btn btn-sm btn-ghost mx-2 ">
              <span className="font-bold">Logout</span>
            </button>
          ) : (
            <Link to="/login" className="btn font-bold btn-ghost">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

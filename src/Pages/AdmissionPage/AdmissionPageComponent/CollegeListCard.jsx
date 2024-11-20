import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";

const CollegeListCard = ({clgData}) => {
    const {
    _id,
    img,
    collegeName,
    ratings
  } = clgData;

  let navigate = useNavigate();
  const location = useLocation(); 
  // dynamic route url
  const url = `/admissionform/${_id}` ;
  const handleView = ()=>{
    navigate(url);
  }


    return (
        <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-2xl px-2">
        <figure>
          <img className="w-full" src={img} alt="college" />
        </figure>
       
        <div className="card-body text-left ">
          <h2 className="card-title font-bold" style={{ color: "#212E52" }}>
            {collegeName}
          </h2>
          <p> <strong>Ratings:</strong> 
          <Rating style={{ maxWidth: 100 }} value={ratings} readOnly  />
           </p>
          
          

          <button onClick={handleView}  style={{backgroundColor: '#212E52'}} 
            className="btn px-5 mt-1 text-white btn-outline btn-active btn-sm 
            md:btn-md lg:btn-md "> <span className='flex gap-1'> 
             Admission </span> </button>

        </div>
      </div>
    </div>
    );
};

export default CollegeListCard;